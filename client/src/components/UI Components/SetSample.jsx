import { useContext } from "react";
import { Button } from "@mui/material";
import { CvContext } from "../../hooks/CvContext";

const SetSample = () => {
    const { setCV } = useContext(CvContext);
  
    return (
      <Button
        variant="contained"
        color="success"
        className="transition-all"
        sx={{
          height: "40px",
          backgroundColor: "emerald.500",
          "&:active": {
            backgroundColor: "emerald.500",
            opacity: 0.9,
          },
        }}
        onClick={setCV}
      >
        Fill Sample Data
      </Button>
    );
  };
  
  export default SetSample;
  