import { BsZoomIn, BsZoomOut } from "react-icons/bs";
import { GoDownload } from "react-icons/go";
import { BiAnalyse } from "react-icons/bi";
import { useContext } from "react";
import { CvContext } from "../hooks/CvContext";
import { Button, ButtonGroup, Box, CircularProgress, Tooltip } from "@mui/material";

const PageButtons = () => {
    const { scaleUp, scaleDown, ifScaleUpOrDown, analyseTheResume, loading } = useContext(CvContext);

    return (
        <Box
            sx={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                zIndex: 1000,
                display: "flex",
                justifyContent: "center"
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
                    <Button onClick={ifScaleUpOrDown} style={{ padding: "8px 18px" }}>
                        <GoDownload style={{ width: "20px", height: "20px" }} />
                    </Button>
                </Tooltip>
                <Tooltip title="Analyse">
                    <Button onClick={analyseTheResume} style={{ padding: "8px 18px" }}>
                        {loading ? <CircularProgress color="inherit" size={24} /> : <BiAnalyse style={{ width: "20px", height: "20px" }} />}
                    </Button>
                </Tooltip>
            </ButtonGroup>
        </Box>
    );
};

export default PageButtons;
