import { motion, AnimatePresence } from "framer-motion";
import { Box } from '@mui/material';
import Helper from "./Edit Components/Helper";
import About from "./Edit Components/About";

const Settings = () => {
  return (
    <AnimatePresence>
      <motion.div layout>
        <Box sx={{ padding: '7px', position: 'relative', width: '450px' }}>
          <Helper />
          <About />
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};

export default Settings;