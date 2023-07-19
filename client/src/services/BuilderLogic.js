import { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import { cvData } from "../data/cvData";
import { useReactToPrint } from "react-to-print";
import { FILE_NOT_SELECTED, FILE_READ_ERROR, UNSUPPORTED_FILE_TYPE } from "../constants/message-result.constants";
import LS from "../utils/browser.utils";
import { getResumeById, analyseResume } from './api';

import CV from "../components/CV";

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
};

const MODAL_STYLES = {
    backgroundColor: '#fff',
    padding: '50px',
    zIndex: 1000,
    maxWidth: '500px',
    maxHeight: '600px',
    overflowY: 'scroll',
    borderRadius: '12px'
};

export const Modal = ({ isOpen, onClose, data }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div style={OVERLAY_STYLES}>
            <div style={MODAL_STYLES}>
                <button onClick={onClose}>Close</button>
                {data &&
                    <div>
                        {/* Display your data here */}
                        <h2>Feedback: {data.feedback}</h2>
                        <img src={data.diagram} alt="Diagram" />
                    </div>
                }
            </div>
        </div>
    );
};

export const useBuilderLogic = () => {
    const [cv, setCv] = useState(cvData);
    const [scale, setScale] = useState(1);
    const { id } = useParams();
    const [resume, setResume] = useState(null);
    const [template, setTemplate] = useState(1);

    const [analysisData, setAnalysisData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


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

    const selectTemplate = (e) => {
        setTemplate(e.target.value);
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
        switch (template) {
            case "1":
                return <CV />;
            case "2":
                return <CV />;
            case "3":
                return <CV />;
            default:
                return <CV />;
        }
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
        let cvText = cvToString(cv);
        try {
            const data = await analyseResume(cvText);
            setAnalysisData(data);
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
        templateSwitch,
        handlePrint,
        scale,
        componentRef,
        selectTemplate,
        analyseTheResume,
        analysisData,
        isModalOpen,
        setIsModalOpen
    };
};
