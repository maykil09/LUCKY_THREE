import React from "react";
import {
    Box,
    Avatar,
    Typography,
    Button,
    useTheme,
    useMediaQuery
} from "@mui/material";
import {LockOutlined} from "@mui/icons-material";
import CustomTextField from "component/custom/CustomTextField";
import {useNavigate} from "react-router-dom";
import {STORAGE} from "config/constant";
import {useFormik} from "formik";
import {loginSchema} from "helper/formik";
import {toast} from "react-toastify";
import {setUser} from "state";
import {useDispatch} from "react-redux";

function Login() {
    const theme = useTheme();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isNonMobile = useMediaQuery("(min-width: 600px)");

    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: loginSchema,
        onSubmit: (values, actions) => {
            console.log(values);
            // for demo purposes
            if (values.username === "admin" && values.password === "admin") {
                localStorage.setItem(
                    STORAGE.SESSION,
                    JSON.stringify({
                        name: "",
                        token: "",
                        role: values.username
                    })
                );
                dispatch(
                    setUser({
                        name: "",
                        token: "",
                        role: values.username
                    })
                );
                toast.success("Login Successful");
                navigate("/dashboard");
            }

            if (values.username === "agent" && values.password === "agent") {
                localStorage.setItem(
                    STORAGE.SESSION,
                    JSON.stringify({
                        name: "",
                        token: "",
                        role: values.username
                    })
                );
                dispatch(
                    setUser({
                        name: "",
                        token: "",
                        role: values.username
                    })
                );
                toast.success("Login Successful");
                navigate("/dashboard");
            }

            actions.resetForm();
        }
    });

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
            <Box sx={{mt: 1, width: isNonMobile ? "40vw" : "70vw"}}>
                <CustomTextField
                    label="Username"
                    name="username"
                    margin="normal"
                    fullWidth
                    value={formik.values.username}
                    handleBlur={formik.handleBlur}
                    handleChange={formik.handleChange}
                />
                {formik.errors.username && formik.touched.username && (
                    <Typography variant="p" color="red" mt="10px">
                        {formik.errors.username}
                    </Typography>
                )}
                <CustomTextField
                    label="Password"
                    name="password"
                    type="password"
                    margin="normal"
                    fullWidth
                    value={formik.values.password}
                    handleBlur={formik.handleBlur}
                    handleChange={formik.handleChange}
                />
                {formik.errors.password && formik.touched.password && (
                    <Typography variant="p" color="red" mt="10px">
                        {formik.errors.password}
                    </Typography>
                )}
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
                    onClick={formik.handleSubmit}>
                    Login
                </Button>
            </Box>
        </Box>
    );
}

export default Login;
