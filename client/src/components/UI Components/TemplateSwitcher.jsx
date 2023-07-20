import { Button } from "@mui/material";
import FileCopyTwoToneIcon from '@mui/icons-material/FileCopyTwoTone';
import { useNavigate } from "react-router-dom";

const TemplateSwitcher = ({ id }) => {
  const navigate = useNavigate();  // Using useNavigate instead of useHistory

  return (
    <Button
      variant="contained"
      className="transition-all"
      sx={{
        height: "40px",
        backgroundColor: "emerald.500",
        "&:active": {
          backgroundColor: "emerald.500",
          opacity: 0.9,
        },
        borderRadius: "50px",
          textTransform: "capitalize",
          display: "flex",
          justifyContent: "space-between",
          gap: "5px"
      }}
      onClick={() => {
        navigate(`/builder/${id}/template`);  // Navigate on button click using navigate
      }}
    >
      <FileCopyTwoToneIcon/>
      Template
    </Button>
  );
};

export default TemplateSwitcher;
