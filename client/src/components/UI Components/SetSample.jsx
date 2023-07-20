import { useContext } from "react";
import { Button } from "@mui/material";
import FeedTwoToneIcon from '@mui/icons-material/FeedTwoTone';
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
          borderRadius: "50px",
          textTransform: "capitalize",
          display: "flex",
          justifyContent: "space-between",
          gap: "5px"
        }}
        onClick={setCV}
      >
        <FeedTwoToneIcon/>
        Fill Sample Data
      </Button>
    );
  };
  
export default SetSample;
  