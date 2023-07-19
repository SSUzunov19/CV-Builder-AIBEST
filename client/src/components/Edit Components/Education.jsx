import { useContext, useState } from "react";
import { CvContext } from "../../hooks/CvContext";
import { RiCloseFill } from "react-icons/ri";
import { HiChevronRight } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Inputs from "../UI Components/InputsH";
import AddButton from "../UI Components/AddButton";
import { Box, Typography, Paper } from "@mui/material";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
const Education = () => {
  const { cv, updateCv, addEducation } = useContext(CvContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        layout
        className="cardStyle"
        animate={{ marginBottom: isOpen ? "30px" : "20px" }}
        style={{ backgroundColor: "white" }}
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
                Education
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
                {cv.education.map((education, index) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={index}
                    className="flex first:mt-3 mb-4 flex-col"
                  >
                    <div
                      className="bg-gradient-to-tr from-transparent to-gray-100 rounded-xl border px-2 py-1"
                      style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
                    >
                      <div className="relative">
                        <button
                          className="deleteButton"
                          onClick={() => {
                            updateCv("education", [
                              ...cv.education.slice(0, index),
                              ...cv.education.slice(index + 1),
                            ]);
                          }}
                        >
                          <RiCloseFill className="deleteButtonSVG" />
                        </button>
                      </div>
                      <div className="items-center mt-4 transition-all">
                      <GrammarlyEditorPlugin clientId="client_AYbwa9RF7qiSdH5ncrXRAi">
                        <Inputs
                          title="Field of study"
                          type="text"
                          className="inputStyle"
                          placeholder="Ex: Computer Science"
                          value={education.title}
                          keyChange="field of study"
                          onChange={(value) => {
                            const newEducation = {
                              ...education,
                              title: value,
                            };
                            updateCv("education", [
                              ...cv.education.slice(0, index),
                              newEducation,
                              ...cv.education.slice(index + 1),
                            ]);
                          }}
                        />
                        </GrammarlyEditorPlugin>
                      </div>
                      <div className="items-center mt-4">
                        <Inputs
                          title="School"
                          type="text"
                          className="inputStyle"
                          placeholder="School Name"
                          value={education.school}
                          onChange={(value) => {
                            const newEducation = {
                              ...education,
                              school: value,
                            };
                            updateCv("education", [
                              ...cv.education.slice(0, index),
                              newEducation,
                              ...cv.education.slice(index + 1),
                            ]);
                          }}
                        />
                      </div>
                      <div className="items-center mt-4">
                        <Inputs
                          title="Start date"
                          type="text"
                          className="inputStyle"
                          placeholder="When did you start school?"
                          value={education.startDate}
                          onChange={(value) => {
                            const newEducation = {
                              ...education,
                              startDate: value,
                            };
                            updateCv("education", [
                              ...cv.education.slice(0, index),
                              newEducation,
                              ...cv.education.slice(index + 1),
                            ]);
                          }}
                        />
                      </div>
                      <div className="items-center mt-4 mb-6">
                        <Inputs
                          title="End date"
                          type="text"
                          placeholder="When did you graduate from school?"
                          className="inputStyle"
                          value={education.endDate}
                          onChange={(value) => {
                            const newEducation = {
                              ...education,
                              endDate: value,
                            };
                            updateCv("education", [
                              ...cv.education.slice(0, index),
                              newEducation,
                              ...cv.education.slice(index + 1),
                            ]);
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}

                <AddButton
                  onClick={() =>
                    addEducation({
                      title: "",
                      school: "",
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

export default Education;
