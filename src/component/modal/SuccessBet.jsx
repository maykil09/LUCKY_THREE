import React from "react";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    useTheme,
    Typography
} from "@mui/material";
import FlexBetween from "component/custom/FlexBetween";

function SuccessBet({isModalOpen, setIsModalOpen, bet}) {
    const theme = useTheme();
    return (
        <Dialog
            sx={{
                "& .MuiPaper-root": {
                    background: theme.palette.background.alt
                }
            }}
            fullWidth={true}
            maxWidth="sm"
            open={isModalOpen}
            onClose={() => {
                setIsModalOpen(false);
            }}>
            <DialogTitle>
                <Typography
                    color={theme.palette.secondary[100]}
                    fontWeight="bold"
                    sx={{mb: "5px", fontSize: "30px"}}>
                    Message
                </Typography>
            </DialogTitle>
            <DialogContent>
                <FlexBetween>
                    <Typography variant="p" fontSize="20px">
                        You have successfully place a bet on{" "}
                        <Typography
                            variant="span"
                            fontWeight="bold"
                            color={theme.palette.secondary[300]}>
                            {bet.numberPicked}
                        </Typography>{" "}
                        and this is your bet ID:{" "}
                        <Typography
                            variant="span"
                            fontWeight="bold"
                            color={theme.palette.secondary[300]}>
                            {bet.id}
                        </Typography>
                    </Typography>
                </FlexBetween>
            </DialogContent>
            <DialogActions>
                <Box mb="0.5rem" display="flex">
                    <Box mr="10px">
                        <Button
                            variant="outlined"
                            sx={{
                                color: theme.palette.secondary.light,
                                borderColor: theme.palette.secondary.light
                            }}
                            onClick={() => {
                                setIsModalOpen(false);
                            }}>
                            Close
                        </Button>
                    </Box>
                </Box>
            </DialogActions>
        </Dialog>
    );
}

export default SuccessBet;
