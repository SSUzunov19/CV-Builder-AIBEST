import React, { useRef, useEffect } from 'react';
import Settings from '../Settings';
import PageButtons from '../PageButtons';
import { CvContext } from '../../hooks/CvContext';
import { Box } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import StyledContainer from './StyledContainer';
import { LoadingScreen } from '../LoadingScreen';
import CV from '../CV';

import { useNavigate } from 'react-router-dom';
import { useBuilderLogic, Modal } from '../../services/BuilderLogic';
import { updateResumeTemplate } from '../../services/api';

const theme = createTheme({
    palette: {
        secondary: {
            main: 'rgba(255,255,255,1)',
        },
        tertiary: {
            main: 'rgba(51,140,201,0.4289915795419731)',
        }
    },
});

export default function Home({ userId, templateId, resumeId }) {

    const navigate = useNavigate();
    const cvRef = useRef(null);

    useEffect(() => {
        if (templateId) { // if template is not null or undefined
            console.log('Updating resume template:', templateId);
            updateResumeTemplate(resumeId, templateId)
                .then(updatedResume => {
                    console.log('Updated resume:', updatedResume);
                })
                .catch(error => {
                    console.error('Error updating resume template:', error);
                });
        }
    }, [templateId]); // this effect runs every time 'template' changes

    useEffect(() => {
        const handleScroll = () => {
            const cvContainer = cvRef.current;
            const scrollY = window.scrollY || window.pageYOffset;

            cvContainer.style.transform = `translateY(${scrollY}px)`;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const templateSwitch = () => {
        console.log(templateId);
        switch (templateId) {
            case 1:
                return <CV color={"rgba(0, 0, 0, 0)"} />;  // white
            case 2:
                return <CV color={"rgba(0, 0, 255, 0.5)"} />;  // half transparent blue
            case 3:
                return <CV color={"rgba(0, 255, 0, 0.5)"} />;  // half transparent green
            case 4:
                return <CV color={"rgba(255, 255, 0, 0.5)"} />;  // half transparent yellow
            case 5:
                return <CV color={"rgba(128, 0, 128, 0.5)"} />;  // half transparent purple
            case 6:
                return <CV color={"rgba(255, 165, 0, 0.5)"} />;  // half transparent orange
            case 7:
                return <CV color={"rgba(0, 128, 128, 0.5)"} />;  // half transparent teal
            case 8:
                return <CV color={"rgba(128, 0, 0, 0.5)"} />;  // half transparent maroon
            case 9:
                return <CV color={"rgba(0, 128, 0, 0.5)"} />;  // half transparent dark green
            default:
                return <CV color={"rgba(0, 0, 0, 0)"} />;  // half transparent red as a default
        }
    };
    

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
        handlePrint,
        scale,
        componentRef,
        analyseTheResume,
        analysisData,
        isModalOpen,
        setIsModalOpen,
        loading,
        setLoading,
    } = useBuilderLogic();

    const handleBack = () => {
        navigate('/dashboard');
    };

    const handleBack1 = () => {
        navigate('/');
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                data={analysisData}
            />

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
                    analyseTheResume,
                    analysisData,
                    isModalOpen,
                    setIsModalOpen,
                    loading,
                    setLoading,
                }}
            >
                {loading && <LoadingScreen />}

                {userId !== "null" && userId !== null ? (
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        height="100vh"
                        padding="4rem 2rem"
                        position="relative"
                        sx={{
                            background: `linear-gradient(90deg, ${theme.palette.secondary.main} 0%, ${theme.palette.tertiary.main} 45%)`
                        }}
                    >
                        <Box display="flex" justifyContent="center" width="50%" height="100%">
                            <Box component="section" className="settings">
                                <Settings resume={resume} />
                            </Box>
                        </Box>


                        <Box isplay="flex" justifyContent="center" width="50%" ref={cvRef}>
                            <Box component="section">
                                <StyledContainer ref={componentRef} style={{ transform: `scale(${scale})` }}>
                                    {templateSwitch()}
                                </StyledContainer>
                            </Box>
                        </Box>


                        <PageButtons onPrint={handlePrint} />

                        <button
                            className="back-button"
                            onClick={handleBack}
                            style={{
                                position: 'absolute',
                                top: '1rem',
                                left: '1rem',
                                padding: '1rem',
                                width: '100px',
                                height: '50px',
                                background: '#1976d2',
                                color: '#ffffff',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '18px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            Back
                        </button>
                    </Box>
                ) : (
                    <>
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            height="100vh"
                        >
                            <Box display="flex" justifyContent="center" width="50%" ref={cvRef}>
                                <Box component="section">
                                    <StyledContainer ref={componentRef} style={{ transform: `scale(${scale})` }}>
                                        {templateSwitch()}
                                    </StyledContainer>
                                </Box>
                            </Box>

                            <button
                                className="back-button"
                                onClick={handleBack1}
                                style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    left: '1rem',
                                    padding: '1rem',
                                    width: '100px',
                                    height: '50px',
                                    background: '#1976d2',
                                    color: '#ffffff',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontSize: '18px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                Back
                            </button>

                        </Box>
                    </>
                )}
            </CvContext.Provider>
        </ThemeProvider>
    );
}
