import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const AddButton = ({ onClick }) => {
  return (
    <motion.div
      layout
      style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '1rem' }}
    >
      <Button
        variant="contained"
        style={{
          width: '80px',
          height: '40px',
          boxShadow: '0px 4px 8px rgba(51, 51, 51, 0.1), 0px 4px 16px rgba(51, 51, 51, 0.08)',
        }}
        onClick={onClick}
      >
        <AddIcon style={{ color: '#FFFFFF' }} />
      </Button>
    </motion.div>
  );
};

export default AddButton;
