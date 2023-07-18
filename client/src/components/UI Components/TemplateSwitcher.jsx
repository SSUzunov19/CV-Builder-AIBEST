import { useContext } from "react";
import { Button } from "@mui/material";
import { CvContext } from "../../hooks/CvContext";

const TemplateSwitcher = () => {
  const { selectTemplate } = useContext(CvContext);

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

      onClick={selectTemplate}
    >
      Template
    </Button>
  );
};

export default TemplateSwitcher;
