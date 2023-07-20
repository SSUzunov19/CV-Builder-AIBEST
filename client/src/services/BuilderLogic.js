import { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import { cvData } from "../data/cvData";
import { useReactToPrint } from "react-to-print";
import { FILE_NOT_SELECTED, FILE_READ_ERROR, UNSUPPORTED_FILE_TYPE } from "../constants/message-result.constants";
import LS from "../utils/browser.utils";
import { getResumeById, analyseResume } from './api';

import styled, { keyframes, css } from 'styled-components';

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
    'About You',
    'Education',
    'Experience',
    'Skills',
    'Languages',
    'Position Suggestions',
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


export const useBuilderLogic = () => {
  const [cv, setCv] = useState(cvData);
  const [scale, setScale] = useState(1);
  const { id } = useParams();
  const [resume, setResume] = useState(null);
  const [template, setTemplate] = useState(1); // define template as a state variable

  const [analysisData, setAnalysisData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getResumeById(id).then((response) => {
      setResume(response);
    });
  }, [id]);

  const setCV = () => {
    setCv(cvData);
    LS.set({ key: "cv", payload: cvData });
  };

  const setEmptyCv = () => {
    const emptyCv = {
      name: "",
      image: "",
      jobTitle: "",
      phone: "",
      location: "",
      email: "",
      linkedin: "",
      twitter: "",
      github: "",
      website: "",
      about: "",
      toolsAndTechSkills: [],
      industryKnowledge: [],
      languages: [],
      skillTitle1: "",
      skillTitle2: "",
      skillTitle3: "",
      projects: [
        {
          title: "",
          link: "",
          summary: "",
        },
      ],
      education: [
        {
          title: "",
          school: "",
          date: "",
        },
      ],
      experiences: [
        {
          title: "",
          company: "",
          startDate: "",
          endDate: "",
          summary: "",
        },
      ],
      displayImage: false,
      displayMail: false,
      displayWebSite: false,
      displayGithub: false,
      displayTwitter: false,
      activeColor: "#5B21B6",
    };
    setCv(emptyCv);
    LS.set({ key: "cv", payload: emptyCv });
  };

  const updateCv = (key, value) => {
    const newCv = { ...cv, [key]: value };
    setCv(newCv);
    LS.set({ key: "cv", payload: newCv });
  };

  const addTag = (e, key, value) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      const newCv = { ...cv, [key]: [...cv[key], value] };
      const unique = newCv[key].filter((item, index) => {
        return newCv[key].indexOf(item) === index;
      });
      newCv[key] = unique;
      setCv(newCv);
      LS.set({ key: "cv", payload: newCv });
      e.target.value = "";
    }

    if (e.key === "Backspace" && e.target.value === "") {
      const newCv = { ...cv, [key]: cv[key].slice(0, -1) };
      setCv(newCv);
      LS.set({ key: "cv", payload: newCv });
    }
  };

  const removeTag = (key, value) => {
    const newCv = { ...cv, [key]: cv[key].filter((tag) => tag !== value) };
    setCv(newCv);
    LS.set({ key: "cv", payload: newCv });
  };

  const addExperience = (experience) => {
    const newCv = { ...cv, experiences: [...cv.experiences, experience] };
    setCv(newCv);
    LS.set({ key: "cv", payload: newCv });
  };

  const addProject = (project) => {
    const newCv = { ...cv, projects: [...cv.projects, project] };
    setCv(newCv);
    LS.set({ key: "cv", payload: newCv });
  };

  const addEducation = (education) => {
    const newCv = { ...cv, education: [...cv.education, education] };
    setCv(newCv);
    LS.set({ key: "cv", payload: newCv });
  };

  const uploadImage = (e) => {
    // For XSS attack from HTML injection
    const allowedFiles = ["image/png", "image/jpg", "image/jpeg"];
    const file = e.target.files[0];
    if (!file) {
      throw new Error(FILE_NOT_SELECTED);
    }
    const reader = new FileReader();
    const isAllowed = allowedFiles.some((type) => file.type === type);
    if (!isAllowed) {
      throw new Error(UNSUPPORTED_FILE_TYPE);
    }
    reader.readAsDataURL(file);
    reader.onerror = (e) => {
      throw new Error(FILE_READ_ERROR, e);
    };
    reader.onload = (e) => {
      updateCv("image", e.target.result);
    };
  };

  const scaleUp = () => {
    if (scale < 1.6) {
      setScale(scale + 0.1);
    }
  };
  const scaleDown = () => {
    if (scale > 0.4) {
      setScale(scale - 0.1);
    }
  };

  useEffect(() => {
    const cvLocal = LS.get("cv");
    if (cvLocal) {
      setCv((currentCv) => ({ ...currentCv, ...cvLocal }));
    }
  }, []);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,

    pageStyle: `
        @page {
            size: auto;
            margin: 0;
        }

        body { 
            transform-origin: top left; 
            margin: 0; 
            transform: scale(1); 
            -webkit-print-color-adjust: exact !important;  
            color-adjust: exact !important; 
            print-color-adjust: exact !important; 
            width: 100%;  /* Set width to 100% */
            height: 100%; /* Set height to 100% */
        }
    `,

    documentTitle: cv.name,
    onAfterPrint: () => console.log("printed"),
  });


  const ifScaleUpOrDown = () => {
    if (scale > 1 || scale < 1) {
      setScale(1);
    }
    return setTimeout(() => {
      handlePrint();
    }, 100);
  };

  const selectTemplate = (newTemplate) => {
    setTemplate(newTemplate);
  };

  function cvToString(cv) {
    let cvText = "";

    cvText += `Name: ${cv.name}\n`;
    cvText += `Job Title: ${cv.jobTitle}\n`;
    cvText += `Phone: ${cv.phone}\n`;
    cvText += `Location: ${cv.location}\n`;
    cvText += `Email: ${cv.email}\n`;

    if (cv.github) {
      cvText += `Github: ${cv.github}\n`;
    }

    if (cv.website) {
      cvText += `Website: ${cv.website}\n`;
    }

    if (cv.twitter) {
      cvText += `Twitter: ${cv.twitter}\n`;
    }

    cvText += `About: ${cv.about}\n`;

    cvText += "Education:\n";
    cv.education.forEach((edu) => {
      cvText += `${edu.title} at ${edu.school} (${edu.startDate} - ${edu.endDate})\n`;
    });

    cvText += "Experience:\n";
    cv.experiences.forEach((exp) => {
      cvText += `${exp.title} at ${exp.company} (${exp.startDate} - ${exp.endDate})\n`;
      cvText += `${exp.summary}\n`;
    });

    cvText += "Skills:\n";
    cvText += cv.toolsAndTechSkills.join(", ") + "\n";

    cvText += "Languages:\n";
    cvText += cv.languages.join(", ") + "\n";

    return cvText;
  }

  const analyseTheResume = async () => {
    setLoading(true); // Before the AI starts processing
    let cvText = cvToString(cv);
    try {
      const data = await analyseResume(cvText);
      console.log('Received analysis data:', data); // Logs the received analysis data
      setAnalysisData(data);
      setLoading(false); // Once the AI processing is done
      setIsModalOpen(true);  // Open the modal after receiving the data
    } catch (error) {
      console.error('Failed to analyze resume:', error);
    }
  };

  const componentRef = useRef();

  return {
    cv,
    resume,
    setCV,
    setEmptyCv,
    updateCv,
    addTag,
    removeTag,
    addExperience,
    addProject,
    addEducation,
    uploadImage,
    scaleUp,
    scaleDown,
    ifScaleUpOrDown,
    template,
    setTemplate,
    handlePrint,
    scale,
    componentRef,
    selectTemplate,
    analyseTheResume,
    analysisData,
    isModalOpen,
    setIsModalOpen,
    loading,
  };
};
