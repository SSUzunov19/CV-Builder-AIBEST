import React, { useRef, useEffect } from 'react';
import Settings from '../Settings';
import PageButtons from '../PageButtons';
import { CvContext } from '../../hooks/CvContext';
import { Box } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import StyledContainer from './StyledContainer';
import { LoadingScreen } from '../LoadingScreen';

import { useNavigate } from 'react-router-dom';
import { useBuilderLogic, Modal } from '../../services/BuilderLogic';

const theme = createTheme({
    palette: {
        background: {
            default: '#edf0ee',
        },
    },
});

export default function Home() {
    const navigate = useNavigate();

    const cvRef = useRef(null);

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
        analyseTheResume,
        analysisData,
        isModalOpen,
        setIsModalOpen,
        loading,
        setLoading
    } = useBuilderLogic();

    const handleBack = () => {
        navigate('/dashboard');
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
                    templateSwitch,
                    analyseTheResume,
                    analysisData,
                    isModalOpen,
                    setIsModalOpen,
                    loading,
                    setLoading
                }}
            >
                {loading && <LoadingScreen />}

                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    height="100vh"
                    padding="4rem 2rem"
                    position="relative"
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
