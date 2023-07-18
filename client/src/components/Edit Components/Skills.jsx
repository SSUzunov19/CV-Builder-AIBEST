import { useContext, useState } from "react";
import { CvContext } from "../../hooks/CvContext";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { HiChevronRight } from "react-icons/hi";
import Inputs from "../UI Components/Inputs";
import { RiCloseFill } from "react-icons/ri";
import { Box, Typography, Paper } from "@mui/material";

const Skills = () => {
  const { cv, addTag, removeTag } = useContext(CvContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        animate={{ marginBottom: isOpen ? "30px" : "20px" }}
        layout
        className="cardStyle z-10 relative"
      >
        <Paper elevation={3}>
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
                Skills
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
              <>
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
                  style={{ textAlign: "center" }}
                >
                  <motion.div layout>
                    <Inputs title="Title 1" value={cv.skillTitle1} placeholder="Title 1" keyChange="skillTitle1" />
                    <motion.div
                      layout
                      className="w-full relative"
                      style={{
                        backgroundColor: "#F3F4F6",
                        borderRadius: "0.375rem",
                        padding: "0.5rem",
                        border: "1px solid #D1D5DB",
                        marginTop: "0.75rem",
                        display: "flex",
                        flexWrap: "wrap",
                      }}
                    >
                      <motion.div layout className="absolute w-1 left-1/2 h-3 bg-blue-400 -top-3"></motion.div>

                      {cv.toolsAndTechSkills.map((tag, index) => (
                        <motion.div
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="tagStyle text-blue-900 bg-blue-200/70"
                          key={index}
                          style={{
                            marginRight: "0.625rem",
                            marginBottom: "0.375rem",
                            padding: "0.25rem 0.5rem",
                            borderRadius: "0.375rem",
                            color: "#1F2937",
                            backgroundColor: "#93C5FD",
                            opacity: "0.7",
                          }}
                        >
                          <motion.p layout style={{ margin: "0" }}>
                            {tag}
                          </motion.p>

                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            className="right-1 top-0 bottom-0 absolute"
                            onClick={() => removeTag("toolsAndTechSkills", tag)}
                            style={{ border: "none", backgroundColor: "transparent", cursor: "pointer" }}
                          >
                            <RiCloseFill className="tagDeleteButton fill-blue-400 hover:fill-blue-700 hover:bg-blue-300/50" />
                          </motion.button>
                        </motion.div>
                      ))}
                      <motion.input
                        layout
                        type="text"
                        className="px-2 m-1 resize"
                        style={{
                          backgroundColor: "#F3F4F6",
                          color: "#1F2937",
                          placeholderColor: "#93C5FD",
                          outline: "none",
                          border: "2px solid #93C5FD",
                          borderRadius: "0.375rem",
                          width: "4rem",
                          marginBottom: "0.375rem",
                        }}
                        placeholder="+ Add tag"
                        onKeyDown={(e) => addTag(e, "toolsAndTechSkills", e.target.value)}
                      />
                    </motion.div>
                  </motion.div>
                  <motion.div layout="size" className=" mt-4">
                    <motion.div
                      layout
                      className="w-44 h-1 mx-auto"
                      style={{ backgroundColor: "#D1D5DB", borderRadius: "0.5rem" }}
                    ></motion.div>
                    <Inputs title="Title 2" value={cv.skillTitle2} placeholder="Title 2" keyChange="skillTitle2" />
                    <motion.div
                      layout
                      className="w-full relative"
                      style={{
                        backgroundColor: "#F3F4F6",
                        borderRadius: "0.375rem",
                        padding: "0.5rem",
                        border: "1px solid #D1D5DB",
                        marginTop: "0.75rem",
                        display: "flex",
                        flexWrap: "wrap",
                      }}
                    >
                      <motion.div layout className="absolute w-1 left-1/2 h-3 bg-violet-400 -top-3"></motion.div>

                      {cv.industryKnowledge.map((tag, index) => (
                        <motion.div
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="tagStyle text-violet-900 bg-violet-200/70"
                          key={index}
                          style={{
                            marginRight: "0.625rem",
                            marginBottom: "0.375rem",
                            padding: "0.25rem 0.5rem",
                            borderRadius: "0.375rem",
                            color: "#1F2937",
                            backgroundColor: "#FBB6CE",
                            opacity: "0.7",
                          }}
                        >
                          <motion.p layout style={{ margin: "0" }}>
                            {tag}
                          </motion.p>

                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            className="right-1 top-0 bottom-0 absolute"
                            onClick={() => removeTag("industryKnowledge", tag)}
                            style={{ border: "none", backgroundColor: "transparent", cursor: "pointer" }}
                          >
                            <RiCloseFill className="tagDeleteButton fill-violet-400 hover:fill-violet-700 hover:bg-violet-300/50" />
                          </motion.button>
                        </motion.div>
                      ))}
                      <motion.input
                        layout
                        type="text"
                        className="px-2 m-1 resize"
                        style={{
                          backgroundColor: "#F3F4F6",
                          color: "#1F2937",
                          placeholderColor: "#FBB6CE",
                          outline: "none",
                          border: "2px solid #FBB6CE",
                          borderRadius: "0.375rem",
                          width: "4rem",
                          marginBottom: "0.375rem",
                        }}
                        placeholder="+ Add tag"
                        onKeyDown={(e) => addTag(e, "industryKnowledge", e.target.value)}
                      />
                    </motion.div>
                  </motion.div>
                  <motion.div layout="size" className=" mt-4">
                    <motion.div
                      layout
                      className="w-44 h-1 mx-auto"
                      style={{ backgroundColor: "#D1D5DB", borderRadius: "0.5rem" }}
                    ></motion.div>
                    <Inputs title="Title 3" value={cv.skillTitle3} placeholder="Title 3" keyChange="skillTitle3" />
                    <motion.div
                      layout
                      className="w-full relative"
                      style={{
                        backgroundColor: "#F3F4F6",
                        borderRadius: "0.375rem",
                        padding: "0.5rem",
                        border: "1px solid #D1D5DB",
                        marginTop: "0.75rem",
                        display: "flex",
                        flexWrap: "wrap",
                      }}
                    >
                      <motion.div layout className="absolute w-1 left-1/2 h-3 bg-rose-400 -top-3"></motion.div>

                      {cv.languages.map((tag, index) => (
                        <motion.div
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="tagStyle text-rose-900 bg-rose-200/70"
                          key={index}
                          style={{
                            marginRight: "0.625rem",
                            marginBottom: "0.375rem",
                            padding: "0.25rem 0.5rem",
                            borderRadius: "0.375rem",
                            color: "#1F2937",
                            backgroundColor: "#FECACA",
                            opacity: "0.7",
                          }}
                        >
                          <motion.p layout style={{ margin: "0" }}>
                            {tag}
                          </motion.p>

                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            className="right-1 top-0 bottom-0 absolute"
                            onClick={() => removeTag("languages", tag)}
                            style={{ border: "none", backgroundColor: "transparent", cursor: "pointer" }}
                          >
                            <RiCloseFill className="tagDeleteButton fill-rose-400 hover:fill-rose-700 hover:bg-rose-300/50" />
                          </motion.button>
                        </motion.div>
                      ))}
                      <motion.input
                        layout
                        type="text"
                        className="px-2 m-1 resize"
                        style={{
                          backgroundColor: "#F3F4F6",
                          color: "#1F2937",
                          placeholderColor: "#FECACA",
                          outline: "none",
                          border: "2px solid #FECACA",
                          borderRadius: "0.375rem",
                          width: "4rem",
                          marginBottom: "0.375rem",
                        }}
                        placeholder="+ Add tag"
                        onKeyDown={(e) => addTag(e, "languages", e.target.value)}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </Paper>
      </motion.div>
    </AnimatePresence>
  );
};

export default Skills;
