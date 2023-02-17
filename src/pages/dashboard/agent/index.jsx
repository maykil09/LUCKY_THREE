import React, {useState} from "react";
import FlexBetween from "component/custom/FlexBetween";
import Header from "component/custom/Header";
import {Box, Button, Typography, useTheme, useMediaQuery} from "@mui/material";
import BetTable from "component/table/BetTable";
import {EmojiEventsOutlined, SwipeUpOutlined} from "@mui/icons-material";
import Statbox from "component/custom/Statbox";
import ReceivedChipsTable from "component/table/ReceivedChipsTable";

import {numberPickedSchema} from "helper/formik";
import {useFormik} from "formik";
import SuccessBet from "component/modal/SuccessBet";
import AddBet from "component/modal/AddBet";

function AgentDashboard() {
    const theme = useTheme();
    const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

    const formik = useFormik({
        initialValues: {
            number: ""
        },
        validationSchema: numberPickedSchema,
        onSubmit: (values, actions) => {
            console.log(values);
            console.log("submitted");
            setBet({numberPicked: values.number, id: "8jkasd13"});
            setIsSuccess(true);
            setIsModalOpen(false);
            actions.resetForm();
        }
    });

    //States
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [bet, setBet] = useState({
        numberPicked: "",
        id: ""
    });

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
                            padding: "5px 10px"
                        }}
                        onClick={() => setIsModalOpen(true)}>
                        {" "}
                        PlACE BET
                    </Button>
                    <AddBet
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        formik={formik}
                    />
                    <SuccessBet
                        isModalOpen={isSuccess}
                        setIsModalOpen={setIsSuccess}
                        bet={bet}
                    />
                </Box>
            </FlexBetween>
            <Box
                mt="20px"
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="130px"
                gap="20px"
                sx={{
                    "& > div": {
                        gridColumn: isNonMediumScreens ? undefined : "span 12"
                    }
                }}>
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
                    gridColumn="span 10"
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
                    title="Received Chips"
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
                    <ReceivedChipsTable isDashboard={true} />
                </Box>
            </Box>
        </Box>
    );
}

export default AgentDashboard;
