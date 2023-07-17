import { useContext, useState } from "react";
import { CvContext } from "../../hooks/CvContext";
import { RiCloseFill } from "react-icons/ri";
import { HiChevronRight } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import AddButton from "../UI Components/AddButton";
import { Card, CardContent, Typography, TextField, Button, TextareaAutosize } from "@mui/material";

const cardStyle = {
  marginBottom: "20px",
  "&:last-child": {
    marginBottom: "30px",
  },
};

const titleStyle = {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  marginBottom: "10px",
};

const contentStyle = {
  marginTop: "10px",
  padding: "10px",
};

const Projects = () => {
  const { cv, updateCv, addProject } = useContext(CvContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        style={cardStyle}
      >
        <motion.div
          initial={false}
          onClick={() => setIsOpen(!isOpen)}
          layout
          className={titleStyle}
        >
          <Typography variant="body1" className="flex-1">
            Projects
          </Typography>
          <motion.div className="inline-block items-end">
            <HiChevronRight className="inline w-6 h-6" />
          </motion.div>
        </motion.div>
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
                  className="flex first:mt-3  mb-4 flex-col"
                >
                  <Card className="bg-gradient-to-tr from-transparent to-gray-100 rounded-xl border px-2 py-1">
                    <div className="relative">
                      <Button
                        className="deleteButton"
                        onClick={() => {
                          updateCv("projects", [
                            ...cv.projects.slice(0, index),
                            ...cv.projects.slice(index + 1),
                          ]);
                        }}
                      >
                        <RiCloseFill className="deleteButtonSVG" />
                      </Button>
                    </div>
                    <CardContent className={contentStyle}>
                      <div className="items-center mt-4">
                        <Typography variant="body2" className="text-gray-500">
                          Project Title
                        </Typography>
                        <TextField
                          type="text"
                          placeholder="Project name"
                          value={project.title}
                          onChange={(e) => {
                            const newProject = {
                              ...project,
                              title: e.target.value,
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
                        <Typography variant="body2" className="text-gray-500">
                          Project Link
                        </Typography>
                        <TextField
                          type="text"
                          placeholder="Project link"
                          value={project.link}
                          onChange={(e) => {
                            const newProject = {
                              ...project,
                              link: e.target.value,
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
                        <Typography variant="body2" className="text-gray-500">
                          Project Summary
                        </Typography>
                        <TextareaAutosize
                          rows={3}
                          placeholder="Project description"
                          value={project.summary}
                          onChange={(e) => {
                            const newProject = {
                              ...project,
                              summary: e.target.value,
                            };
                            updateCv("projects", [
                              ...cv.projects.slice(0, index),
                              newProject,
                              ...cv.projects.slice(index + 1),
                            ]);
                          }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
              <AddButton onClick={() => addProject({ title: "", link: "", summary: "" })} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default Projects;
