import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, Typography, Box, Grid } from '@mui/material';

import SetEmpty from "../UI Components/SetEmpty";
import SetSample from "../UI Components/SetSample";
import TemplateSwitcher from "../UI Components/TemplateSwitcher";

const Helper = ({ resume }) => {
    return (
        <AnimatePresence>
            <motion.div layout className="cardStyle" >
                <Card>
                    <CardContent>
                        <Typography variant="h3" component="div" style={{ textAlign: "center" }} >{resume?.title || 'Loading...'}</Typography>
                        <Box mt={4} style={{ display: "flex", justifyContent: "center",}}>
                            <Grid container spacing={1}>
                                <Grid item>
                                    <SetEmpty />
                                </Grid>
                                <Grid item>
                                    <SetSample />
                                </Grid>
                                <Grid item>
                                    <TemplateSwitcher id={resume?.id}/>
                                </Grid>
                            </Grid>
                        </Box>
                    </CardContent>
                </Card>
            </motion.div>
        </AnimatePresence>
    );
};

export default Helper;
