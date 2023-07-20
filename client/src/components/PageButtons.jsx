import React, { useContext, useState } from "react";
import { BsZoomIn, BsZoomOut } from "react-icons/bs";
import { GoDownload } from "react-icons/go";
import { BiAnalyse } from "react-icons/bi";
import { CvContext } from "../hooks/CvContext";
import { Button, ButtonGroup, Box, CircularProgress, Tooltip, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

const PageButtons = () => {
  const { cv, scaleUp, scaleDown, ifScaleUpOrDown, analyseTheResume, loading } = useContext(CvContext);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = () => {
    if (cv.name.trim() === "" || cv.location.trim() === "" || cv.about.trim() === "") {
      setHasError(true);
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
            onClick={() => {
              handleSubmit();
            }}
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
        <DialogTitle>Error</DialogTitle>
        <DialogContent>
          <DialogContentText>Can't leave required fields blank!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setHasError(false)}>OK</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PageButtons;
