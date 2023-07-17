import { motion, AnimatePresence } from "framer-motion";
import { Box } from '@mui/material';
import Helper from "./Edit Components/Helper";
import About from "./Edit Components/About";
<<<<<<< Updated upstream
import Skills from "./Edit Components/Skills";
=======
import Education from "./Edit Components/Education";

>>>>>>> Stashed changes
const Settings = ({resume}) => {
  return (
    <AnimatePresence>
      <motion.div layout>
        <Box sx={{ padding: '7px', position: 'relative', width: '450px' }}>
          <Helper resume={resume}/>
          <About />
<<<<<<< Updated upstream
          <Skills />
=======
          <Education />
>>>>>>> Stashed changes
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};

export default Settings;