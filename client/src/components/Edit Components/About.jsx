import { BiImageAdd } from "react-icons/bi";
import { HiChevronRight } from "react-icons/hi";
import { BsPatchCheck } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { useContext, useState } from "react";
import { CvContext } from "../../hooks/CvContext";
import Inputs from "../UI Components/Inputs";
import TextArea from "../UI Components/TextArea";
import CheckBox from "../UI Components/Checkbox";
import { Box, Typography, Paper } from "@mui/material";

const About = () => {
  const { cv, uploadImage } = useContext(CvContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatePresence initial={false}>
      <motion.div layout animate={{ marginBottom: isOpen ? "30px" : "20px" }}>
        <Paper elevation={3}>
          <Box
            initial={false}
            onClick={() => setIsOpen(isOpen ? false : true)}
            layout
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            className="w-full cursor-pointer text-lg"
          >
            <Typography variant="h6">About Yourself</Typography>
            <motion.div
              className="inline-block items-end"
              animate={{ rotate: isOpen ? 90 : 0 }}
            >
              <HiChevronRight className="inline w-6 h-6" />
            </motion.div>
          </Box>
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
                <CheckBox
                  title="Display Image"
                  value={cv.displayImage}
                  keyChange="displayImage"
                />

                {cv.displayImage ? (
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Box
                      htmlFor="dropzone"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      className="mt-1 w-full py-8 bg-white border-2 border-gray-300 border-dashed cursor-pointer  rounded-xl"
                    >
                      <Box display="flex" flexDirection="column" alignItems="center">
                        {cv.image ? (
                          <BsPatchCheck className="h-10 w-10 text-emerald-600" />
                        ) : (
                          <BiImageAdd className="h-10 w-10 text-rose-500" />
                        )}
                        <Typography className="text-gray-500 mt-3">
                          Click to upload your image
                        </Typography>

                        <Typography className="text-sm text-gray-400">( *.jpg, *.png )</Typography>
                      </Box>
                      <input
                        id="dropzone"
                        type="file"
                        accept="image/jpeg, image/png"
                        className="hidden"
                        onChange={uploadImage}
                      />
                    </Box>
                  </motion.div>
                ) : null}

                <Inputs
                  title="Name & Surname"
                  value={cv.name}
                  placeholder="Your name"
                  keyChange="name"
                />
                <Inputs
                  title="Job"
                  value={cv.jobTitle}
                  placeholder="What is your job?"
                  keyChange="jobTitle"
                />
                <Inputs
                  title="Location"
                  value={cv.location}
                  placeholder="Where do you live?"
                  keyChange="location"
                />
                <TextArea
                  title="About"
                  value={cv.about}
                  placeholder="A few sentences about yourself"
                  keyChange="about"
                />

                <Typography
                  layout
                  className="projectAndExperienceTitle mt-5 text-lg"
                >
                  Social
                </Typography>
                <Box layout display="flex" flexWrap="wrap">
                  <CheckBox
                    title="Mail"
                    value={cv.displayMail}
                    keyChange="displayMail"
                  />
                  <CheckBox
                    title="Portfolio"
                    value={cv.displayWebSite}
                    keyChange="displayWebSite"
                  />
                  <CheckBox
                    title="Github"
                    value={cv.displayGithub}
                    keyChange="displayGithub"
                  />
                  <CheckBox
                    title="Twitter"
                    value={cv.displayTwitter}
                    keyChange="displayTwitter"
                  />
                  <CheckBox
                    title="LinkedIn"
                    value={cv.displayLinkedIn}
                    keyChange="displayLinkedIn"
                  />
                  <CheckBox
                    title="Instagram"
                    value={cv.displayInstagram}
                    keyChange="displayInstagram"
                  />
                  <CheckBox
                    title="Facebook"
                    value={cv.displayFacebook}
                    keyChange="displayFacebook"
                  />
                </Box>

                {cv.displayMail ? (
                  <Inputs
                    title="Mail"
                    value={cv.email}
                    placeholder="example@mail.com"
                    keyChange="email"
                  />
                ) : null}

                {cv.displayWebSite ? (
                  <Inputs
                    title="Portfolio"
                    value={cv.website}
                    placeholder="Site Link without ' https:// '"
                    keyChange="website"
                  />
                ) : null}

                {cv.displayGithub ? (
                  <Inputs
                    title="Github"
                    value={cv.github}
                    placeholder="Only Username"
                    keyChange="github"
                  />
                ) : null}

                {cv.displayTwitter ? (
                  <Inputs
                    title="Twitter"
                    value={cv.twitter}
                    placeholder="Only Username without @"
                    keyChange="twitter"
                  />
                ) : null}

                {cv.displayLinkedIn ? (
                  <Inputs
                    title="LinkedIn"
                    value={cv.LinkedIn}
                    placeholder="Only Username"
                    keyChange="linkedIn"
                  />
                ) : null}

                {cv.displayInstagram ? (
                  <Inputs
                    title="Instagram"
                    value={cv.Instagram}
                    placeholder="Only Username"
                    keyChange="instagram"
                  />
                ) : null}

                {cv.displayFacebook ? (
                  <Inputs
                    title="Facebook"
                    value={cv.Facebook}
                    placeholder="Only Username"
                    keyChange="facebook"
                  />
                ) : null}
              </motion.div>
            )}
          </AnimatePresence>
        </Paper>
      </motion.div>
    </AnimatePresence>
  );
};

export default About;