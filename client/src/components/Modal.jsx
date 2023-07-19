import { useState, useEffect } from "react";
import styled, { keyframes, css } from 'styled-components';

import { useBuilderLogic } from "../services/BuilderLogic";


const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(-20px); }
  to { transform: translateY(0); }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: grid;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: #fff;
  padding: 50px;
  z-index: 1000;
  max-width: 800px;
  max-height: 800px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  animation: ${fadeIn} 0.5s forwards;

  ${({ active }) =>
    active &&
    css`
      animation: ${slideIn} 0.5s forwards;
    `}
`;

const CloseButton = styled.button`
  position: absolute;
  right: 15px;
  top: 10px;
  font-size: 1.5em;
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const Tab = styled.button`
  padding: 10px;
  border: none;
  cursor: pointer;
  outline: none;
  opacity: 0.6;
  transition: opacity 0.3s;
  font-weight: bold;
  color: #333;

  &:hover {
    opacity: 1;
  }

  ${({ active }) =>
    active &&
    css`
      border-bottom: 10px #333;
      opacity: 1;
      color: #555;
      transform: scale(1.1);
    `}
`;

const Content = styled.div`
  line-height: 1.6;
  font-size: 1.2em;
  color: #555;
  animation: ${fadeIn} 0.5s forwards;
`;

export const Modal = ({ isOpen, onClose, data }) => {
  const [activeTab, setActiveTab] = useState('aboutYou');
  const [sections, setSections] = useState({});
  const sectionNames = [
    'aboutYou',
    'education',
    'experience',
    'skills',
    'languages',
    'suggestionForPosition',
  ];

  useEffect(() => {
    if (!isOpen || !data.analysis) {
      return;
    }

    try {
      const aiDataObject = JSON.parse(data.analysis);

      const newSections = Object.keys(aiDataObject)
        .filter((key) => sectionNames.includes(key))
        .reduce((obj, key) => {
          obj[key] = aiDataObject[key];
          return obj;
        }, {});

      setSections(newSections);
    } catch (error) {
      console.error('Unable to parse AI data', error);
    }
  }, [isOpen, data]);

  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <ModalContainer active={activeTab !== null}>
        <CloseButton onClick={onClose}>X</CloseButton>
        <TabsContainer>
          {sectionNames.map((key, index) => (
            <Tab
              key={index}
              active={key === activeTab}
              onClick={() => setActiveTab(key)}
            >
              {key}
            </Tab>
          ))}
        </TabsContainer>
        <Content>
          <p>{sections[activeTab]}</p>
        </Content>
      </ModalContainer>
    </Overlay>
  );
};
