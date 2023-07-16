import { useContext, useState } from "react";
import { TextField } from "@mui/material";
import { CvContext } from "../../hooks/CvContext";

const Inputs = ({ title, value, keyChange, placeholder }) => {
  const { updateCv } = useContext(CvContext);
  const [inputValue, setInputValue] = useState(value);
  const [error, setError] = useState(false);

  const validationRegex = {
    name: /^[a-zA-Z\s]+$/,
    jobTitle: /^[a-zA-Z\s]+$/,
    phone: /^\+\d{1,3}\s?\d{1,4}\s?\d{1,4}\s?\d{1,4}$/,
    location: /^[a-zA-Z\s,]+$/,
    about: /^(.|\s)*[a-zA-Z]+(.|\s)*$/,
  };

  const validateInput = (value, key) => {
    const regex = validationRegex[key];
    return regex.test(value);
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    const isValid = validateInput(newValue, keyChange);

    setInputValue(newValue);
    setError(!isValid);
    updateCv(keyChange, newValue);
  };

  return (
    <div className="mt-4" style={{ margin: "2rem 0" }}>
      <TextField
        label={title}
        value={inputValue}
        placeholder={placeholder}
        onChange={handleInputChange}
        sx={{ width: "calc(100% - 20px)" }}
        size="medium"
        error={error}
        helperText={error ? "Invalid input" : ""}
      />
    </div>
  );
};

export default Inputs;
