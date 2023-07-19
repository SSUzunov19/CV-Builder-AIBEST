import { TextField } from "@mui/material";

const Inputs = ({ title, value, onChange, placeholder }) => {

  return (
    <div className="mt-4" style={{ margin: "2rem 0" }}>
      <TextField
        label={title}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        sx={{ width: "calc(100% - 20px)" }}
      />
    </div>
  );
};

export default Inputs;
