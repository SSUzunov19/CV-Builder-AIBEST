import React, { useContext, useState } from "react";
import { BsZoomIn, BsZoomOut } from "react-icons/bs";
import { GoDownload } from "react-icons/go";
import { BiAnalyse } from "react-icons/bi";
import { CvContext } from "../hooks/CvContext";
import { Button, ButtonGroup, Box, CircularProgress, Tooltip, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const PageButtons = () => {
  const { cv, scaleUp, scaleDown, ifScaleUpOrDown, analyseTheResume, loading } = useContext(CvContext);
  const [hasError, setHasError] = useState(false);
  const [errorFields, setErrorFields] = useState([]);

  const fieldJokes = {
    "Name": "А resume without a name? That's like a book without a title!",
    "Location": "Еveryone needs to be somewhere, even your resume!",
    "About": "Тell us a little bit about yourself, your resume feels lonely!"
  };

  const handleSubmit = () => {
    let errors = [];
    if (cv.name.trim() === "") errors.push("Name");
    if (cv.location.trim() === "") errors.push("Location");
    if (cv.about.trim() === "") errors.push("About");

    if (errors.length > 0) {
      setHasError(true);
      setErrorFields(errors);
    } else {
      setHasError(false);
      ifScaleUpOrDown();
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ButtonGroup variant="contained" color="primary" aria-label="contained button group">
        <Tooltip title="Zoom In">
          <Button onClick={scaleUp} style={{ padding: "8px 18px" }}>
            <BsZoomIn style={{ width: "20px", height: "20px" }} />
          </Button>
        </Tooltip>
        <Tooltip title="Zoom Out">
          <Button onClick={scaleDown} style={{ padding: "8px 18px" }}>
            <BsZoomOut style={{ width: "20px", height: "20px" }} />
          </Button>
        </Tooltip>
        <Tooltip title="Download">
          <Button
            onClick={handleSubmit}
            style={{ padding: "8px 18px", ...(hasError && { backgroundColor: red[500] }) }}
            disabled={hasError}
          >
            <GoDownload style={{ width: "20px", height: "20px" }} />
          </Button>
        </Tooltip>
        <Tooltip title="Analyse">
          <Button onClick={analyseTheResume} style={{ padding: "8px 18px" }}>
            {loading ? <CircularProgress color="inherit" size={24} /> : <BiAnalyse style={{ width: "20px", height: "20px" }} />}
          </Button>
        </Tooltip>
      </ButtonGroup>
      <Dialog open={hasError} onClose={() => setHasError(false)}>
        <DialogTitle>
          <Box display="flex" alignItems="center">
            Error 
            <SentimentVeryDissatisfiedIcon fontSize="large" style={{ marginLeft: '8px' }}/>
          </Box>
        </DialogTitle>
        <DialogContent>
          {errorFields.map(field => (
            <DialogContentText key={field}>
              {`${field} is empty. ${fieldJokes[field]}`}
            </DialogContentText>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setHasError(false)}>Got it!</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PageButtons;
