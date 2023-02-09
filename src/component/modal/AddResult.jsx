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
import CustomTextField from "component/custom/CustomTextField";

function AddResult({isModalOpen, setIsModalOpen, formik}) {
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
                formik.resetForm();
            }}>
            <DialogTitle>
                <Typography
                    color={theme.palette.secondary[100]}
                    fontWeight="bold"
                    sx={{mb: "5px", fontSize: "30px"}}>
                    POST RESULT
                </Typography>
            </DialogTitle>
            <DialogContent>
                <Box mt="1rem">
                    <CustomTextField
                        type="number"
                        name="result"
                        label="Result"
                        value={formik.values.result}
                        handleBlur={formik.handleBlur}
                        handleChange={formik.handleChange}
                    />
                    {formik.errors.result && formik.touched.result && (
                        <Typography variant="p" color="red" mt="10px">
                            {formik.errors.result}
                        </Typography>
                    )}
                </Box>
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
                                formik.resetForm();
                            }}>
                            Cancel
                        </Button>
                    </Box>
                    <Button
                        variant="outlined"
                        sx={{
                            backgroundColor: theme.palette.secondary.light,
                            color: theme.palette.background.alt,
                            fontWeight: "bold"
                        }}
                        onClick={formik.handleSubmit}>
                        Save
                    </Button>
                </Box>
            </DialogActions>
        </Dialog>
    );
}

export default AddResult;
