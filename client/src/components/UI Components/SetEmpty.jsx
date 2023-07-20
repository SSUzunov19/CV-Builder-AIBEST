import { useContext } from "react";
import { Button } from "@mui/material";
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone';
import { CvContext } from "../../hooks/CvContext";
import { margin } from "@mui/system";

const SetEmpty = () => {
    const { setEmptyCv } = useContext(CvContext);
  
    return (
      <Button
        variant="contained"
        color="error"
        style={{
          borderRadius: "50px",
          width: "95px",
          height: "40px",
          textTransform: "capitalize",
          display: "flex",
          justifyContent: "space-between",
          gap: "5px"
        }}
        onClick={setEmptyCv}
      >
        <RemoveCircleTwoToneIcon style={{marginLeft: "-5px"}}/>
        Reset
      </Button>
    );
  };
  
  export default SetEmpty;
  