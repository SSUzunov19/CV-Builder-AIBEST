import React from 'react';
import Settings from '../Settings';
import PageButtons from '../PageButtons';
import { CvContext } from '../../hooks/CvContext';
import { Box } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import StyledContainer from './StyledContainer';

import { useNavigate } from 'react-router-dom';
import { useBuilderLogic } from '../../services/BuilderLogic';

const theme = createTheme({
  palette: {
    background: {
      default: '#edf0ee',
    },
  },
});

export default function Home() {
  const navigate = useNavigate();

  const {
    cv,
    resume,
    setCV,
    setEmptyCv,
    updateCv,
    addProject,
    addExperience,
    addTag,
    removeTag,
    addEducation,
    uploadImage,
    scaleUp,
    scaleDown,
    ifScaleUpOrDown,
    templateSwitch,
    handlePrint,
    scale,
    componentRef,
  } = useBuilderLogic();

  const handleBack = () => {
    navigate('/dashboard');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <CvContext.Provider
        value={{
          cv,
          uploadImage,
          updateCv,
          addProject,
          addExperience,
          addTag,
          removeTag,
          setEmptyCv,
          setCV,
          scale,
          scaleUp,
          scaleDown,
          ifScaleUpOrDown,
          addEducation,
          templateSwitch,
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          height="100vh"
          padding="0 10rem"
          position="relative" // Add position relative to parent Box
        >
          <Box alignItems="center" height="100%">
            <Box component="section" className="settings">
              <Settings resume={resume} />
            </Box>
          </Box>

          <Box position="relative">
            <Box component="section">
              <StyledContainer ref={componentRef} style={{ transform: `scale(${scale})` }}>
                {templateSwitch()}
              </StyledContainer>
              <PageButtons onPrint={handlePrint} />
            </Box>
          </Box>

          {/* Back button */}
          <button
            className="back-button"
            onClick={handleBack}
            style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              padding: '0.5rem',
              background: '#1976d2',
              color: '#ffffff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Back
          </button>
        </Box>
      </CvContext.Provider>
    </ThemeProvider>
  );
}
