import { useContext } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { CvContext } from "../../hooks/CvContext";

const CheckBox = ({ title, value, keyChange }) => {
    const { updateCv } = useContext(CvContext);
  
    return (
      <div className="flex items-center mt-4 mr-4">
        <FormControlLabel
          control={
            <Checkbox
              id={title}
              checked={value}
              onChange={(e) => updateCv(keyChange, e.target.checked)}
            />
          }
          label={title}
        />
      </div>
    );
  };
  
  export default CheckBox;
  