import { useContext } from "react";
import { TextField } from "@mui/material";
import { CvContext } from "../../hooks/CvContext";

const TextArea = ({ title, value, keyChange, placeholder }) => {
    const { updateCv } = useContext(CvContext);
  
    return (
      <div className="mt-4">
        <TextField
          label={title}
          multiline
          rows={7}
          placeholder={placeholder}
          value={value}
          onChange={(e) => updateCv(keyChange, e.target.value)}
        />
      </div>
    );
  };
  
  export default TextArea;
  