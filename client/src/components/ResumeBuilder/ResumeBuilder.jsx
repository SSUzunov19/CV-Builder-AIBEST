import React, { useRef, useEffect } from 'react';
import Settings from '../Settings';
import PageButtons from '../PageButtons';
import { CvContext } from '../../hooks/CvContext';
import { Box } from '@mui/material';
import { CssBaseline } from '@mui/material';
import StyledContainer from './StyledContainer';
import { LoadingScreen } from '../LoadingScreen';
import CV from '../CV';
import './s.css';

import { useNavigate } from 'react-router-dom';
import { useBuilderLogic, Modal } from '../../services/BuilderLogic';
import { updateResumeTemplate, saveResumeData, fetchTemplateofResume } from '../../services/api';

export default function Home({ userId, templateId, setTemplateId, resumeId, premiumAccount }) {

    const navigate = useNavigate();
    const cvRef = useRef(null);
    const [templateForThePage, setTemplateForThePage] = React.useState(1);

    console.log("templateForThePage", templateForThePage);

    useEffect(() => {
        if (templateId) { // if template is not null or undefined
            console.log("AAAAAAAAAAAAAAAAAAAAAAAAA");
            updateResumeTemplate(resumeId, templateId)
                .then(updatedResume => {

                })
                .catch(error => {
                    console.error('Error updating resume template:', error);
                });
        } else {
            console.log("BEEEEEEEEEEEEEEEEEE");
            // if template is null or undefined, call the api to get the template id
            // and then set the templateId
            console.log("resumeIdblq: ", resumeId)
            fetchTemplateofResume(resumeId)
                .then(fetchedTemplateId => {
                    console.log('Fetched templateIdblq: ', fetchedTemplateId);
                    setTemplateForThePage(fetchedTemplateId); // here fetchedTemplateId is just a string, not an object
                })
                .catch(error => {
                    console.error('Error fetching template id:', error);
                });

        }
    }, [templateId, userId]); // 'userId' is also a dependency now


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

    useEffect(() => {
        // Add the unique class to the body
        document.body.classList.add('unique-body-class');

        // Clean up function
        return () => {
            document.body.classList.remove('unique-body-class');
        };
    }, []);  // Empty array ensures this runs on mount and unmount


    const templateSwitch = () => {
        var template;
        if (templateId) {
            template = templateId;
        } else {
            template = templateForThePage;
        }
        console.log("template: ", template);
        switch (true) {
            case ['1', 1].includes(template):
                return <CV color={"rgba(0, 0, 0, 0)"} gradientColor={"rgba(0, 0, 0, 0)"} />;  // white
            case ['2', 2].includes(template):
                return <CV color={"rgba(173, 216, 230, 0.2)"} gradientColor={"rgba(135, 206, 250, 0.3)"} />; // light blue to sky blue
            case ['3', 3].includes(template):
                return <CV color={"rgba(144, 238, 144, 0.2)"} gradientColor={"rgba(60, 179, 113, 0.3)"} />; // light green to medium sea green
            case ['4', 4].includes(template):
                return <CV color={"rgba(255, 255, 224, 0.2)"} gradientColor={"rgba(255, 250, 205, 0.3)"} />; // light yellow to lemon chiffon
            case ['5', 5].includes(template):
                return <CV color={"rgba(219, 112, 219, 0.2)"} gradientColor={"rgba(238, 130, 238, 0.3)"} />; // orchid to violet
            case ['6', 6].includes(template):
                return <CV color={"rgba(255, 192, 203, 0.2)"} gradientColor={"rgba(255, 105, 180, 0.3)"} />; // pink to hot pink
            case ['7', 7].includes(template):
                return <CV color={"rgba(176, 224, 230, 0.2)"} gradientColor={"rgba(70, 130, 180, 0.3)"} />; // powder blue to steel blue
            case ['8', 8].includes(template):
                return <CV color={"rgba(233, 150, 122, 0.2)"} gradientColor={"rgba(255, 99, 71, 0.3)"} />; // dark salmon to tomato
            case ['9', 9].includes(template):
                return <CV color={"rgba(173, 255, 47, 0.2)"} gradientColor={"rgba(50, 205, 50, 0.3)"} />; // green-yellow to lime green
            default:
                console.log("default");
                return <CV color={"rgba(0, 0, 0, 0)"} gradientColor={"rgba(0, 0, 0, 0)"} />; // light gray to white
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
        aboutYou
    } = useBuilderLogic();

    const handleBack = () => {
        navigate('/dashboard');
    };

    const handleBack1 = () => {
        navigate('/');
    };

    const handleSave = () => {

        const aboutDataArray = aboutYou.split('|');

        const aboutData = {
            name: aboutDataArray[0],
            image: aboutDataArray[1],
            jobTitle: aboutDataArray[2],
            phone: aboutDataArray[3],
            location: aboutDataArray[4],
            email: aboutDataArray[5],
            linkedin: aboutDataArray[6],
            instagram: aboutDataArray[7],
            facebook: aboutDataArray[8],
            twitter: aboutDataArray[9],
            github: aboutDataArray[10],
            website: aboutDataArray[11],
            about: aboutDataArray[12],
            displayImage: aboutDataArray[13],
            displayMail: aboutDataArray[14],
            displayWebsite: aboutDataArray[15],
            displayLinkedIn: aboutDataArray[16],
            displayInstagram: aboutDataArray[17],
            displayFacebook: aboutDataArray[18],
            displayGithub: aboutDataArray[19],
            displayTwitter: aboutDataArray[20],
        };

        console.log(aboutData);

        // Call the saveResumeData function
        console.log("resumeid: ", resumeId)
        saveResumeData(resumeId, aboutData/*, skillsData, projectsData, educationData, experiencesData*/)
            .then(response => {
                console.log('Successfully saved resume:', response);
            })
            .catch(error => {
                console.error('Error saving resume:', error);
            });
    };

    return (
        <>
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


                        <PageButtons onPrint={handlePrint} premiumAccount={premiumAccount} />

                        <button
                            className="back-button"
                            onClick={handleBack}
                            style={{
                                position: 'absolute',
                                top: '1rem',
                                left: '1rem',
                                padding: '1rem',
                                width: '80px',
                                height: '40px',
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

                        <button
                            className="save-button"
                            onClick={handleSave}
                            style={{
                                position: 'absolute',
                                top: '1rem',
                                right: '1rem',
                                padding: '1rem',
                                width: '80px',
                                height: '40px',
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
                            Save
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
        </>
    );
}
