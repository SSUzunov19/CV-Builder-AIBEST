import { useContext } from "react";
import { Button } from "@mui/material";
import { CvContext } from "../../hooks/CvContext";

const TemplateSwitcher = ({ value }) => {
    const { selectTemplate } = useContext(CvContext);
  
    return (
      <div>
        <Button
          variant="outlined"
          size="small"
          sx={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "gray.100",
            borderColor: "gray.300",
            transition: "all 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              borderColor: "blue.500",
              backgroundColor: "sky.100",
            },
            "&:active": {
              transform: "scale(0.95)",
              borderColor: "blue.500",
              backgroundColor: "sky.100",
            },
          }}
          value={value}
          onClick={selectTemplate}
        >
          {value}
        </Button>
      </div>
    );
  };
  
  export default TemplateSwitcher;
  