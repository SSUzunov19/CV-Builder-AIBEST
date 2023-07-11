import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { motion } from 'framer-motion';

const AddButton = ({ onClick }) => {
  return (
    <motion.div
      layout
      className="w-fit  text-white transition-all scale-100 hover:scale-105 mx-auto"
    >
      <Button
        variant="contained"
        className="group flex justify-center items-center h-14 w-14 rounded-full bg-zinc-500 group hover:shadow-lg hover:shadow-emerald-300 hover:bg-emerald-500 overflow-hidden relative flex-1"
        onClick={onClick}
      >
        <motion.div
          layout
          className="border-t-4 border-r-4 h-14 w-14 rounded-full border-zinc-400 group-hover:border-emerald-400 top-0 right-0 blur-[2px] transition-all absolute"
        ></motion.div>
        <AddIcon
          className="w-8 h-8 transition-all scale-100 group-hover:scale-105 drop-shadow-md"
        />
        <motion.div
          layout
          className="border-b-4 border-l-4 h-14 w-14 rounded-full border-zinc-600 group-hover:border-emerald-600 top-0 right-0 blur-[2px] transition-all absolute"
        ></motion.div>
      </Button>
    </motion.div>
  );
};

export default AddButton;