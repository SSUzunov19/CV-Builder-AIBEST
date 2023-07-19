import { useContext, useState } from "react";
import { CvContext } from "../../hooks/CvContext";
import { RiCloseFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronRight } from "react-icons/hi";
import AddButton from "../UI Components/AddButton";
import Inputs from "../UI Components/InputsH";
import TextArea from "../UI Components/TextAreaH";
import { Box, Typography, Paper } from "@mui/material";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
const Experiences = () => {
  const { cv, updateCv, addExperience } = useContext(CvContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AnimatePresence>
      <motion.div
        layout
        className="cardStyle"
        animate={{ marginBottom: isOpen ? "30px" : "20px" }}
      >
        <Paper elevation={3} style={{ textAlign: "center" }}>
          <Box
            initial={false}
            onClick={() => setIsOpen(!isOpen)}
            layout
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            className="w-full cursor-pointer text-lg"
            style={{ color: "#555555", fontSize: "1rem", padding: "1rem" }}
          >
            <Box textAlign="center">
              <Typography variant="h6" style={{ textAlign: "center" }}>
                Experiences
              </Typography>
            </Box>
            <motion.div
              className="inline-block items-end"
              animate={{ rotate: isOpen ? 90 : 0 }}
              style={{ display: "flex" }}
            >
              <HiChevronRight className="inline w-6 h-6" />
            </motion.div>
          </Box>
          <AnimatePresence>
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
                {cv.experiences.map((experience, index) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={index}
                    className="flex first:mt-3 mb-4 flex-col"
                  >
                    <div className="bg-gradient-to-tr from-transparent to-gray-100 rounded-xl border px-2 py-1">
                      <div className="relative">
                        <button
                          className="deleteButton"
                          onClick={() => {
                            updateCv("experiences", [
                              ...cv.experiences.slice(0, index),
                              ...cv.experiences.slice(index + 1),
                            ]);
                          }}
                        >
                          <RiCloseFill className="deleteButtonSVG" />
                        </button>
                      </div>

                      <div className="items-center mt-4">
                      <GrammarlyEditorPlugin clientId="REACT_APP_GRAMMARLY_CLIENT_ID">
                        <Inputs
                          title = "Position"
                          type="text"
                          placeholder="Your position"
                          value={experience.title}
                          onChange={(value) => {
                            const newExperience = {
                              ...experience,
                              title: value,
                            };
                            updateCv("experiences", [
                              ...cv.experiences.slice(0, index),
                              newExperience,
                              ...cv.experiences.slice(index + 1),
                            ]);
                          }}
                        />
                        </GrammarlyEditorPlugin>
                      </div>
                      <div className="items-center mt-4">
                        <Inputs
                          title = "Company Name"
                          type="text"
                          placeholder="Company Name"
                          value={experience.company}
                          onChange={(value) => {
                            const newExperience = {
                              ...experience,
                              company: value,
                            };
                            updateCv("experiences", [
                              ...cv.experiences.slice(0, index),
                              newExperience,
                              ...cv.experiences.slice(index + 1),
                            ]);
                          }}
                        />
                      </div>
                      <div className="items-center mt-4">
                      <GrammarlyEditorPlugin clientId="REACT_APP_GRAMMARLY_CLIENT_ID">
                        <TextArea
                          title = "Summary"
                          rows={7}
                          placeholder="Brief information of 3-4 sentences about what you do in the company."
                          value={experience.summary}
                          onChange={(value) => {
                            const newExperience = {
                              ...experience,
                              summary: value,
                            };
                            updateCv("experiences", [
                              ...cv.experiences.slice(0, index),
                              newExperience,
                              ...cv.experiences.slice(index + 1),
                            ]);
                          }}
                        />
                        </GrammarlyEditorPlugin>
                      </div>
                      <div className="items-center mt-4">
                        <Inputs
                          title = "Start date"
                          type="text"
                          placeholder="When did you start this job?"
                          value={experience.startDate}
                          onChange={(value) => {
                            const newExperience = {
                              ...experience,
                              startDate: value,
                            };
                            updateCv("experiences", [
                              ...cv.experiences.slice(0, index),
                              newExperience,
                              ...cv.experiences.slice(index + 1),
                            ]);
                          }}
                        />
                      </div>
                      <div className="items-center mt-4 mb-6">
                        <Inputs
                          title = "End date"
                          type="text"
                          placeholder="Did you quit this job or is it still going?"
                          value={experience.endDate}
                          onChange={(value) => {
                            const newExperience = {
                              ...experience,
                              endDate: value,
                            };
                            updateCv("experiences", [
                              ...cv.experiences.slice(0, index),
                              newExperience,
                              ...cv.experiences.slice(index + 1),
                            ]);
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
                <AddButton
                  onClick={() =>
                    addExperience({
                      title: "",
                      company: "",
                      summary: "",
                      startDate: "",
                      endDate: "",
                    })
                  }
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Paper>
      </motion.div>
    </AnimatePresence>
  );
};

export default Experiences;
