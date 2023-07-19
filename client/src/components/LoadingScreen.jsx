import styled, { keyframes } from 'styled-components';

const LoadingOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    color: #fff;
    font-size: 2em;
    text-align: center;
`;

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const Text = styled.p`
  animation: ${pulse} 2s infinite;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  margin: 16px;
  border: 4px solid rgba(255,255,255,0.2);
  border-left-color: #fff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${rotate} 1s linear infinite;
`;


export const LoadingScreen = () => {
    return (
        <LoadingOverlay>
            <Spinner />
            <Text>We are waiting for the AI to generate the feedback...</Text>
        </LoadingOverlay>
    );
};

