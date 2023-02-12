import React from "react";
import {Box, Avatar, Typography, Button, useTheme} from "@mui/material";
import {LockOutlined} from "@mui/icons-material";
import CustomTextField from "component/custom/CustomTextField";
import {useNavigate} from "react-router-dom";

function Login() {
    const theme = useTheme();
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/dashboard");
    };

    return (
        <Box
            sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
            <Avatar sx={{m: 1, bgcolor: "secondary.main"}}>
                <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box sx={{mt: 1}}>
                <CustomTextField
                    label="Username"
                    name="username"
                    margin="normal"
                    fullWidth
                />
                <CustomTextField
                    label="Password"
                    name="password"
                    type="password"
                    margin="normal"
                    fullWidth
                />
                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        mt: 3,
                        mb: 2,
                        backgroundColor: theme.palette.secondary.light,
                        color: theme.palette.background.alt,
                        fontWeight: "bold"
                    }}
                    onClick={handleLogin}>
                    Login
                </Button>
            </Box>
        </Box>
    );
}

export default Login;
