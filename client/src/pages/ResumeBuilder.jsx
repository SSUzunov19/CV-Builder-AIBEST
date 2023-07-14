import CV from "../components/CV";
import React from 'react';
import Settings from "../components/Settings";
import PageButtons from "../components/PageButtons";
import { CvContext } from "../hooks/CvContext";
import { Box } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import StyledContainer from './StyledContainer';

import { useBuilderLogic } from './BuilderLogic';

const theme = createTheme({
    palette: {
        background: {
            default: "#edf0ee"
        }
    }
});

export default function Home() {
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
        componentRef
    } = useBuilderLogic();

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
                >
                    <Box alignItems="center" height="100%">
                        <Box component="section" className="settings">
                            <Settings resume={resume}/>
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
                </Box>

            </CvContext.Provider>
        </ThemeProvider>
    );
};
