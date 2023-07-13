import { BsZoomIn, BsZoomOut } from "react-icons/bs";
import { GoDownload } from "react-icons/go";
import { useContext } from "react";
import { CvContext } from "../hooks/CvContext";
import { Button, ButtonGroup, Box } from "@mui/material";

const PageButtons = () => {
    const { scaleUp, scaleDown, ifScaleUpOrDown } = useContext(CvContext);
    return (
        <Box
            position="relative"
            width="100%"
            height="100%"
            display="flex"
            justifyContent="center"
        >
            <Box
                position="absolute"
                bottom="0"
                zIndex="tooltip"
                className="text-neutral-500 mx-auto text-center backdrop-blur-2xl bg-white/50 border border-black/10 px-5 py-3 transition-all rounded-full"
            >
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
                </ButtonGroup>
            </Box>
        </Box>
    );
};


export default PageButtons;
