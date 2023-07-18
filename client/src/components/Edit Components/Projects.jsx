import { useContext, useState } from "react";
import { CvContext } from "../../hooks/CvContext";
import { RiCloseFill } from "react-icons/ri";
import { HiChevronRight } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import AddButton from "../UI Components/AddButton";
import Inputs from "../UI Components/Inputs";
import TextArea from "../UI Components/TextArea";

import { Typography, Box, Paper } from "@mui/material";

const Projects = () => {
  const { cv, updateCv, addProject } = useContext(CvContext);
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
                Projects
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
                {cv.projects.map((project, index) => (
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
                          style={{ marginTop: "1rem" }}
                          onClick={() => {
                            updateCv("projects", [
                              ...cv.projects.slice(0, index),
                              ...cv.projects.slice(index + 1),
                            ]);
                          }}
                        >
                          <RiCloseFill className="deleteButtonSVG" />
                        </button>
                      </div>

                      <div className="items-center mt-4">
                        <Inputs
                          title="Project Title"
                          type="text"
                          className="inputStyle"
                          placeholder="Project name"
                          value={project.title}
                          onChange={(value) => {
                            const newProject = {
                              ...project,
                              title: value,
                            };
                            updateCv("projects", [
                              ...cv.projects.slice(0, index),
                              newProject,
                              ...cv.projects.slice(index + 1),
                            ]);
                          }}
                        />
                      </div>
                      <div className="items-center mt-4">
                        <Inputs
                          title="Project Link"
                          type="text"
                          className="inputStyle"
                          placeholder="Project link"
                          value={project.link}
                          onChange={(value) => {
                            const newProject = {
                              ...project,
                              link: value,
                            };
                            updateCv("projects", [
                              ...cv.projects.slice(0, index),
                              newProject,
                              ...cv.projects.slice(index + 1),
                            ]);
                          }}
                        />
                      </div>
                      <div className="items-center mt-4 mb-6">
                        <TextArea
                          title="Project Summary"
                          type="textarea"
                          rows={3}
                          placeholder="Project description"
                          className="inputStyle"
                          value={project.summary}
                          onChange={(value) => {
                            const newProject = {
                              ...project,
                              summary: value,
                            };
                            updateCv("projects", [
                              ...cv.projects.slice(0, index),
                              newProject,
                              ...cv.projects.slice(index + 1),
                            ]);
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
                <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
                  <AddButton variant="contained" onClick={() => addProject({ title: "", link: "", summary: "" })}>
                    Add Project
                  </AddButton>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Paper>
      </motion.div>
    </AnimatePresence>
  );
};

export default Projects;
