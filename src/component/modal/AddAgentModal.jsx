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

function AddAgentModal({isModalOpen, setIsModalOpen, formik}) {
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
                    ADD AGENT
                </Typography>
            </DialogTitle>
            <DialogContent>
                <Box mb="1rem" mt="1rem" gap="10px">
                    <CustomTextField
                        label="First Name"
                        name="firstName"
                        value={formik.values.firstName}
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}
                    />
                    {formik.errors.firstName && formik.touched.firstName && (
                        <Typography variant="p" color="red" mt="10px">
                            {formik.errors.firstName}
                        </Typography>
                    )}
                </Box>
                <Box mb="1rem">
                    <CustomTextField
                        label="Last Name"
                        name="lastName"
                        value={formik.values.lastName}
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}
                    />
                    {formik.errors.lastName && formik.touched.lastName && (
                        <Typography variant="p" color="red" mt="10px">
                            {formik.errors.lastName}
                        </Typography>
                    )}
                </Box>
                <Box mb="1rem">
                    <CustomTextField
                        label="Username"
                        name="username"
                        value={formik.values.username}
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}
                    />
                    {formik.errors.username && formik.touched.username && (
                        <Typography variant="p" color="red" mt="10px">
                            {formik.errors.username}
                        </Typography>
                    )}
                </Box>
                <Box mb="1rem">
                    <CustomTextField
                        label="Password"
                        name="password"
                        value={formik.values.password}
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}
                        type="password"
                    />
                    {formik.errors.password && formik.touched.password && (
                        <Typography variant="p" color="red" mt="10px">
                            {formik.errors.password}
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

export default AddAgentModal;
