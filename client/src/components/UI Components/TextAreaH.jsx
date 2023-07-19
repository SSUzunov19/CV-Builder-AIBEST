import { TextField } from "@mui/material";

const TextArea = ({ title, value, onChange, placeholder }) => {

  return (
    <div className="mt-4">
      <TextField
        label={title}
        multiline
        rows={7}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        sx={{ width: "calc(100% - 20px)" }}
      />
    </div>
  );
};

export default TextArea;
