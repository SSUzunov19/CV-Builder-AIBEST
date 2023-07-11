import { useContext } from "react";
import { Button } from "@mui/material";
import { CvContext } from "../../hooks/CvContext";

const SetEmpty = () => {
    const { setEmptyCv } = useContext(CvContext);
  
    return (
      <Button
        variant="contained"
        color="error"
        onClick={setEmptyCv}
      >
        Reset
      </Button>
    );
  };
  
  export default SetEmpty;
  