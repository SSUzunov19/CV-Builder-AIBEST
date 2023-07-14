import React from 'react';
import CV from "../components/CV";
import Settings from "../components/Settings";
import PageButtons from "../components/PageButtons";
import { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import { CvContext } from "../hooks/CvContext";
import { cvData } from "../data/cvData";
import { useReactToPrint } from "react-to-print";
import {
    FILE_NOT_SELECTED,
    FILE_READ_ERROR,
    UNSUPPORTED_FILE_TYPE,
} from "../constants/message-result.constants";
import LS from "../utils/browser.utils";

import { Box } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import StyledContainer from './StyledContainer';

import { getResumeById } from '../services/api';

const theme = createTheme({
    palette: {
        background: {
            default: "#edf0ee" // Use any gray color code you want
        }
    }
});

export default function Home() {
    const [cv, setCv] = useState(cvData);
    const [scale, setScale] = useState(1);

    const { id } = useParams();
    const [resume, setResume] = useState(null);

    useEffect(() => {
        getResumeById(id).then((response) => {
            console.log('Response:', response); // Check the entire response
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

        pageStyle:
            "body { transform-origin: top left; margin: auto; transform: scale(1); -webkit-print-color-adjust: exact !important;  color-adjust: exact !important; print-color-adjust: exact !important; }",

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

    const templateSwitch = () => {
        return <CV />;
    };

    const componentRef = useRef();

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