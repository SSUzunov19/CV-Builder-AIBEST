import { Button } from "@mui/material";
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
      }}
      onClick={() => {
        navigate(`/builder/${id}/template`);  // Navigate on button click using navigate
      }}
    >
      Template
    </Button>
  );
};

export default TemplateSwitcher;
