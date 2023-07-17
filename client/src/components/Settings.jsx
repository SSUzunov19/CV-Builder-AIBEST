import { motion, AnimatePresence } from "framer-motion";
import { Box } from '@mui/material';
import Helper from "./Edit Components/Helper";
import About from "./Edit Components/About";
import Skills from "./Edit Components/Skills";
import Education from "./Edit Components/Education";
import Projects from "./Edit Components/Projects";
import Experiences from "./Edit Components/Experiences";
const Settings = ({resume}) => {
  return (
    <AnimatePresence>
      <motion.div layout>
        <Box sx={{ padding: '7px', position: 'relative', width: '450px' }}>
          <Helper resume={resume}/>
          <About />
          <Skills />
          <Education />
          <Projects />
          <Experiences />
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};

export default Settings;