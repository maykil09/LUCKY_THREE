import React, {useState} from "react";
import FlexBetween from "component/custom/FlexBetween";
import Header from "component/custom/Header";
import {Box, Button, Typography, useTheme, useMediaQuery} from "@mui/material";
import {
    Email,
    EmojiEventsOutlined,
    SwipeUpOutlined,
    ShowChartOutlined
} from "@mui/icons-material";
import Statbox from "component/custom/Statbox";
import AddResult from "component/modal/AddResult";
import {resultSchema} from "helper/formik";
import {useFormik} from "formik";
import BetTable from "component/table/BetTable";
import ChipsGiven from "component/table/ChipsGiven";

function Dashboard() {
    const theme = useTheme();
    const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

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
                <Header
                    title="DASHBOARD"
                    subtitle="Welcome to your dashboard"
                />
                <Box>
                    <Button
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
                <Statbox
                    title="Total Agents"
                    value="80"
                    increase="+14%"
                    description="Since last month"
                    icon={
                        <Email
                            sx={{
                                color: theme.palette.secondary[300],
                                fontSize: "26px"
                            }}
                        />
                    }
                />
                <Statbox
                    title="Total Winners"
                    value="6"
                    increase="4.44%"
                    description="Draw from 2pm"
                    icon={
                        <EmojiEventsOutlined
                            sx={{
                                color: theme.palette.secondary[300],
                                fontSize: "26px"
                            }}
                        />
                    }
                />
                <Box
                    gridColumn="span 8"
                    gridRow="span 2"
                    backgroundColor={theme.palette.background.alt}
                    p="1rem"
                    borderRadius="0.55rem">
                    <Box
                        height="100%"
                        width="100%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center">
                        <Typography variant="h1">
                            Chart (Line, Bar or Pie)
                        </Typography>
                    </Box>
                </Box>
                <Statbox
                    title="Given Chips"
                    value="1000"
                    increase="+6%"
                    description="Since last week"
                    icon={
                        <SwipeUpOutlined
                            sx={{
                                color: theme.palette.secondary[300],
                                fontSize: "26px"
                            }}
                        />
                    }
                />
                <Statbox
                    title="Sales"
                    value="120"
                    increase="+16%"
                    description="Draw from 2pm"
                    icon={
                        <ShowChartOutlined
                            sx={{
                                color: theme.palette.secondary[300],
                                fontSize: "26px"
                            }}
                        />
                    }
                />

                {/* ROW 2 */}
                <Box
                    gridColumn="span 7"
                    gridRow="span 2"
                    backgroundColor={theme.palette.background.alt}
                    p="1rem"
                    borderRadius="0.55rem">
                    <BetTable isDashboard={true} />
                </Box>
                <Box
                    gridColumn="span 5"
                    gridRow="span 2"
                    backgroundColor={theme.palette.background.alt}
                    p="1rem"
                    borderRadius="0.55rem">
                    <ChipsGiven isDashboard={true} />
                </Box>
            </Box>
        </Box>
    );
}

export default Dashboard;
