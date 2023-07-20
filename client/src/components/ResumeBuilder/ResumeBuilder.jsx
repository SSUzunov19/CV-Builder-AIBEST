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

import { useNavigate, useParams } from 'react-router-dom';
import { useBuilderLogic, Modal } from '../../services/BuilderLogic';
import { updateResumeTemplate, fetchTemplateofResume } from '../../services/api';

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

export default function Home({ userId, templateId, setTemplateId }) {

    const navigate = useNavigate();
    const cvRef = useRef(null);

    const { resumeId } = useParams(); // get the resumeId from the URL parameters

    useEffect(() => {
        if (templateId && templateId != 1) { // if template is not null or undefined
            console.log('Updating resume template:', templateId);
            updateResumeTemplate(resumeId, templateId)
                .then(updatedResume => {
                    console.log('Updated resume:', updatedResume);
                })
                .catch(error => {
                    console.error('Error updating resume template:', error);
                });
        } else {
            console.log('Fetching resume in useEffect:', resumeId);
            if (resumeId) { // if resumeId is null, undefined, or an empty string
                // navigate to dashboard
                navigate('/dashboard');
            } else {
                fetchTemplateofResume(resumeId)
                    .then(resume => {
                        console.log('Resume:', resume);
                        setTemplateId(resume.template);
                    })
                    .catch(error => {
                        console.error('Error fetching resume:', error);
                    });
            }
        }
    }, [templateId, resumeId]); // this effect runs every time 'template' changes

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
                return <CV color={"rgba(0, 0, 0, 0)"} gradientColor={"rgba(0, 0, 0, 0)"} />;  // white
            case 2:
                return <CV color={"rgba(173, 216, 230, 0.2)"} gradientColor={"rgba(135, 206, 250, 0.3)"} />; // light blue to sky blue
            case 3:
                return <CV color={"rgba(144, 238, 144, 0.2)"} gradientColor={"rgba(60, 179, 113, 0.3)"} />; // light green to medium sea green
            case 4:
                return <CV color={"rgba(255, 255, 224, 0.2)"} gradientColor={"rgba(255, 250, 205, 0.3)"} />; // light yellow to lemon chiffon
            case 5:
                return <CV color={"rgba(219, 112, 219, 0.2)"} gradientColor={"rgba(238, 130, 238, 0.3)"} />; // orchid to violet
            case 6:
                return <CV color={"rgba(255, 192, 203, 0.2)"} gradientColor={"rgba(255, 105, 180, 0.3)"} />; // pink to hot pink
            case 7:
                return <CV color={"rgba(176, 224, 230, 0.2)"} gradientColor={"rgba(70, 130, 180, 0.3)"} />; // powder blue to steel blue
            case 8:
                return <CV color={"rgba(233, 150, 122, 0.2)"} gradientColor={"rgba(255, 99, 71, 0.3)"} />; // dark salmon to tomato
            case 9:
                return <CV color={"rgba(173, 255, 47, 0.2)"} gradientColor={"rgba(50, 205, 50, 0.3)"} />; // green-yellow to lime green
            default:
                return <CV color={"rgba(220, 220, 220, 0.1)"} gradientColor={"rgba(255, 255, 255, 0.2)"} />; // light gray to white
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
