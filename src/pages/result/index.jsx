import React, {useState} from "react";
import FlexBetween from "component/custom/FlexBetween";
import Header from "component/custom/Header";
import {Box, Button, useTheme, useMediaQuery, Typography} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import AddResult from "component/modal/AddResult";
import {resultSchema} from "helper/formik";
import {useFormik} from "formik";

const onSubmit = (values, actions) => {
    console.log(values);
    console.log("submitted");
    actions.resetForm();
};

function Result() {
    const theme = useTheme();
    const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
    const isNonMobile = useMediaQuery("(min-width: 600px)");

    const formik = useFormik({
        initialValues: {
            result: ""
        },
        validationSchema: resultSchema,
        onSubmit
    });

    //States
    const [isModalOpen, setIsModalOpen] = useState(false);

    // table columns
    const columns = [
        {
            field: "_id",
            headerName: "ID",
            flex: 0.5
        },
        {
            field: "bet_id",
            headerName: "Bet ID",
            flex: 0.5
        },
        {
            field: "bet_number",
            headerName: "Number Picked",
            flex: 0.5
        },
        {
            field: "isRumbled",
            headerName: "Rumble",
            flex: 0.5
        },
        {
            field: "draw_time",
            headerName: "Draw",
            flex: 0.5
        },
        {
            field: "username",
            headerName: "Username",
            flex: 0.5
        },
        {
            field: "date",
            headerName: "Date",
            flex: 0.5
        }
    ];
    return (
        <Box m="1.5rem 2.5rem" pb="1.5rem">
            <FlexBetween>
                <Header title="Result" subtitle="List of Results" />
                <Box>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: theme.palette.secondary.light,
                            color: theme.palette.background.alt,
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px"
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
                    borderRadius="0.55rem">
                    <DataGrid
                        loading={false}
                        getRowId={(row) => row._id}
                        rows={[
                            {
                                _id: "123123123",
                                bet_id: "567123d",
                                bet_number: "123",
                                isRumbled: true,
                                draw_time: "9pm",
                                username: "john123",
                                date: "February 7, 2023"
                            }
                        ]}
                        columns={columns}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default Result;
