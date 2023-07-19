import { BsZoomIn, BsZoomOut } from "react-icons/bs";
import { GoDownload } from "react-icons/go";
import { BiAnalyse } from "react-icons/bi";
import { useContext } from "react";
import { CvContext } from "../hooks/CvContext";
import { Button, ButtonGroup, Box, CircularProgress } from "@mui/material";

const PageButtons = () => {
    const { scaleUp, scaleDown, ifScaleUpOrDown, analyseTheResume, loading } = useContext(CvContext);

    return (
        <Box
            position="fixed"
            bottom="20px"
            right="20px"
            zIndex={1000}
            display="flex"
            justifyContent="center"
        >
            <Box className="text-neutral-500 mx-auto text-center backdrop-blur-2xl bg-white/50 border border-black/10 px-5 py-3 transition-all rounded-full">
                <ButtonGroup variant="contained" color="primary" aria-label="contained button group">
                    <Button onClick={scaleUp}>
                        <BsZoomIn className="h-8 w-8" />
                    </Button>
                    <Button onClick={scaleDown}>
                        <BsZoomOut className="h-8 w-8" />
                    </Button>
                    <Button onClick={ifScaleUpOrDown}>
                        <GoDownload className="h-8 w-8" />
                    </Button>
                    <Button onClick={analyseTheResume}>
                        {loading ? <CircularProgress color="inherit" size={24} /> : <BiAnalyse className="h-8 w-8" />}
                    </Button>
                </ButtonGroup>
            </Box>
        </Box>
    );
};

export default PageButtons;
