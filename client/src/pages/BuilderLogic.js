import { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import { cvData } from "../data/cvData";
import { useReactToPrint } from "react-to-print";
import { FILE_NOT_SELECTED, FILE_READ_ERROR, UNSUPPORTED_FILE_TYPE } from "../constants/message-result.constants";
import LS from "../utils/browser.utils";
import { getResumeById } from '../services/api';

import CV from "../components/CV";

export const useBuilderLogic = () => {
    const [cv, setCv] = useState(cvData);
    const [scale, setScale] = useState(1);

    const { id } = useParams();
    const [resume, setResume] = useState(null);

    useEffect(() => {
        getResumeById(id).then((response) => {
            console.log('Response:', response);
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
        templateSwitch,
        handlePrint,
        scale,
        componentRef
    };
};
