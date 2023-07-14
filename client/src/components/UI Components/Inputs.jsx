import { useContext, useState } from "react";
import { TextField } from "@mui/material";
import { CvContext } from "../../hooks/CvContext";

const Inputs = ({ title, value, keyChange, placeholder }) => {
  const { updateCv } = useContext(CvContext);
  const [phone, setPhone] = useState(value);
  const [phoneError, setPhoneError] = useState(false);

  const handlePhoneChange = (event) => {
    const input = event.target.value;
    const newPhone = input.replace(/[^\d+\s]/g, "");
    const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    const isValidPhone = phoneRegex.test(newPhone);
    setPhone(newPhone);
    setPhoneError(!isValidPhone);
    updateCv(keyChange, newPhone);
  };

  return (
    <div className="mt-4" style={{ margin: "2rem 0" }}>
      <TextField
        label={title}
        value={phone}
        placeholder={placeholder}
        onChange={handlePhoneChange}
        sx={{ width: "calc(100% - 20px)" }}
        size="medium"
        error={phoneError}
        helperText={phoneError ? "Invalid phone number" : ""}
      />
    </div>
  );
};

export default Inputs;