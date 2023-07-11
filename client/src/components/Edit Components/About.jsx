import React, { useContext, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { HiChevronRight } from "react-icons/hi";
import { BsPatchCheck } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { CvContext } from "../../hooks/CvContext";
import { Checkbox, FormControlLabel, TextField, Typography, Button, Card, CardContent, Grid } from '@mui/material';
import { styled } from '@mui/system';

const MyTextField = styled(TextField)`
  margin-top: 20px;
`;

const About = () => {
    const { cv, uploadImage } = useContext(CvContext);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <AnimatePresence initial={false}>
            <motion.div
                layout
                className="cardStyle"
                animate={{ marginBottom: isOpen ? "30px" : "20px" }}
            >
                <motion.div
                    initial={false}
                    onClick={() => setIsOpen(isOpen ? false : true)}
                    layout
                    className="w-full flex text-neutral-500 cursor-pointer text-lg"
                >
                    <Typography variant="h6" className="flex-1">About Yourself</Typography>
                    <motion.div
                        className="inline-block items-end"
                        animate={{ rotate: isOpen ? 90 : 0 }}
                    >
                        <HiChevronRight className="inline w-6 h-6" />
                    </motion.div>
                </motion.div>
                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            key="content"
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                                open: {
                                    opacity: 1,
                                    height: "auto",
                                },
                                collapsed: { opacity: 0, height: 0 },
                            }}
                            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                        >
                            <Card>
                                <CardContent>
                                    <FormControlLabel
                                        control={<Checkbox checked={cv.displayImage} />}
                                        label="Display Image"
                                    />

                                    {cv.displayImage ? (
                                        <motion.div
                                            layout
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <Button variant="contained" component="label">
                                                {cv.image ? (
                                                    <BsPatchCheck className="h-10 w-10 text-emerald-600" />
                                                ) : (
                                                    <BiImageAdd className="h-10 w-10 text-rose-500" />
                                                )}
                                                <Typography className="text-gray-500 mt-3">
                                                    Click to upload your image
                                                </Typography>

                                                <Typography className="text-sm text-gray-400">( *.jpg, *.png )</Typography>
                                                <input
                                                    id="dropzone"
                                                    type="file"
                                                    accept="image/jpeg, image/png"
                                                    className="hidden"
                                                    onChange={uploadImage}
                                                    hidden
                                                />
                                            </Button>
                                        </motion.div>
                                    ) : null}

                                    <MyTextField
                                        label="Name & Surname"
                                        value={cv.name}
                                        placeholder="Your name"
                                        variant="outlined"
                                    />

                                    <MyTextField
                                        label="Job"
                                        value={cv.jobTitle}
                                        placeholder="What is your job?"
                                        variant="outlined"
                                    />

                                    <MyTextField
                                        label="Location"
                                        value={cv.location}
                                        placeholder="Where do you live?"
                                        variant="outlined"
                                    />

                                    <MyTextField
                                        label="About"
                                        value={cv.about}
                                        placeholder="A few sentences about yourself"
                                        variant="outlined"
                                        multiline
                                    />

                                    <Typography variant="h6" className="mt-5">Social</Typography>

                                    <Grid container spacing={2}>
                                        {/* ... repeat for all checkboxes ... */}
                                        <Grid item xs={6}>
                                            <FormControlLabel
                                                control={<Checkbox checked={cv.displayMail} />}
                                                label="Mail"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <FormControlLabel
                                                control={<Checkbox checked={cv.displayWebSite} />}
                                                label="Portfolio"
                                            />
                                        </Grid>
                                        {/* ... */}
                                    </Grid>

                                    {cv.displayMail && (
                                        <MyTextField
                                            label="Mail"
                                            value={cv.email}
                                            placeholder="example@mail.com"
                                            variant="outlined"
                                        />
                                    )}

                                    {cv.displayWebSite && (
                                        <MyTextField
                                            label="Portfolio"
                                            value={cv.website}
                                            placeholder="Site Link without ' https:// '"
                                            variant="outlined"
                                        />
                                    )}

                                    {cv.displayGithub && (
                                        <Inputs
                                            title="Github"
                                            value={cv.github}
                                            placeholder="Only Username"
                                            keyChange="github"
                                        />
                                    )}

                                    {cv.displayTwitter && (
                                        <Inputs
                                            title="Twitter"
                                            value={cv.twitter}
                                            placeholder="Only Username without @"
                                            keyChange="twitter"
                                        />
                                    )}
                                    {cv.displayLinkedIn && (
                                        <Inputs
                                            title="LinkedIn"
                                            value={cv.LinkedIn}
                                            placeholder="Only Username"
                                            keyChange="linkedIn"
                                        />
                                    )}
                                    {cv.displayInstagram && (
                                        <Inputs
                                            title="Instagram"
                                            value={cv.Instagram}
                                            placeholder="Only Username"
                                            keyChange="instagram"
                                        />
                                    )}
                                    {cv.displayFacebook && (
                                        <Inputs
                                            title="Facebook"
                                            value={cv.Facebook}
                                            placeholder="Only Username"
                                            keyChange="facebook"
                                        />
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </AnimatePresence>
    );
};

export default About;