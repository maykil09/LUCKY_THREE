import React, {useState} from "react";
import FlexBetween from "component/custom/FlexBetween";
import Header from "component/custom/Header";
import {Box, Button, useTheme, useMediaQuery, Typography} from "@mui/material";
import AddResult from "component/modal/AddResult";
import {resultSchema} from "helper/formik";
import {useFormik} from "formik";
import ResultTable from "component/table/ResultTable";
import {useSelector} from "react-redux";

function Result() {
    const user = useSelector((state) => state.global.user);
    const theme = useTheme();
    const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
    const isNonMobile = useMediaQuery("(min-width: 600px)");

    const formik = useFormik({
        initialValues: {
            result: ""
        },
        validationSchema: resultSchema,
        onSubmit: (values, actions) => {
            console.log(values);
            console.log("submitted");
            setIsModalOpen(false);
            actions.resetForm();
        }
    });

    //States
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Box m="1.5rem 2.5rem" pb="1.5rem">
            <FlexBetween>
                <Header title="Result" subtitle="List of Results" />
                <Box display={user.role === "admin" ? "block" : "none"}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: theme.palette.secondary.light,
                            color: theme.palette.background.alt,
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "5px 10px"
                        }}
                        onClick={() => setIsModalOpen(true)}>
                        {" "}
                        Post Result
                    </Button>
                    <AddResult
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        formik={formik}
                    />
                </Box>
            </FlexBetween>
            <Box
                mt="20px"
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="160px"
                gap="20px"
                sx={{
                    "& > div": {
                        gridColumn: isNonMediumScreens ? undefined : "span 12"
                    }
                }}>
                {/* ROW 1 */}
                <Box
                    display={user.role === "admin" ? "block" : "none"}
                    gridColumn="span 5"
                    gridRow="span 1"
                    backgroundColor={theme.palette.background.alt}
                    p="1rem"
                    borderRadius="0.55rem">
                    <Box height="100%" width="100%">
                        <Typography
                            variant={isNonMobile ? "h2" : "h3"}
                            color={theme.palette.secondary[100]}>
                            Result of 9pm draw
                        </Typography>
                        <Box
                            height="100%"
                            width="100%"
                            display="flex"
                            justifyContent="center"
                            alignItems="center">
                            <Typography
                                variant={isNonMobile ? "h2" : "h3"}
                                color={theme.palette.secondary[100]}
                                fontWeight="bold">
                                NO RESULT POSTED
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box
                    display={user.role === "admin" ? "block" : "none"}
                    gridColumn="span 7"
                    gridRow="span 1"
                    backgroundColor={theme.palette.background.alt}
                    p="1rem"
                    borderRadius="0.55rem"></Box>
                <Box
                    gridColumn="span 12"
                    gridRow="span 3"
                    backgroundColor={theme.palette.background.alt}
                    p="1rem"
                    borderRadius="0.55rem"
                    sx={{
                        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                            color: `${theme.palette.secondary[200]} !important`
                        }
                    }}>
                    <ResultTable />
                </Box>
            </Box>
        </Box>
    );
}

export default Result;
