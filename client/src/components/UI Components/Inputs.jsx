import { useContext } from "react";
import { TextField } from "@mui/material";
import { CvContext } from "../../hooks/CvContext";

const Inputs = ({ title, value, keyChange, placeholder }) => {
    const { updateCv } = useContext(CvContext);
  
    return (
      <div className="mt-4">
        <TextField
          label={title}
          value={value}
          placeholder={placeholder}
          onChange={(e) => updateCv(keyChange, e.target.value)}
        />
      </div>
    );
  };
  
  export default Inputs;
  