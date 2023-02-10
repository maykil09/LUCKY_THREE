import React, {useState} from "react";
import FlexBetween from "component/custom/FlexBetween";
import Header from "component/custom/Header";
import {Box, Button, useTheme, useMediaQuery} from "@mui/material";

import AddAgentModal from "component/modal/AddAgentModal";
import AddBet from "component/modal/AddBet";
import {useFormik} from "formik";
import {agentSchema, numberPickedSchema} from "helper/formik";
import SuccessBet from "component/modal/SuccessBet";
import AgentTable from "component/table/AgentTable";

const addNewAgent = (values, actions) => {
    console.log(values);
    console.log("submitted");
    actions.resetForm();
};

function Agent() {
    const theme = useTheme();
    const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

    const agentFormik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            username: "",
            password: ""
        },
        validationSchema: agentSchema,
        onSubmit: addNewAgent
    });

    const betFormik = useFormik({
        initialValues: {
            number: ""
        },
        validationSchema: numberPickedSchema,
        onSubmit: (values, actions) => {
            console.log(values);
            console.log("submitted");
            setBet({numberPicked: values.number, id: "8jkasd13"});
            setIsSuccessModal(true);
            setIsBetModalOpen(false);
            actions.resetForm();
        }
    });

    // States
    const [isAgentModalOpen, setIsAgentModalOpen] = useState(false);
    const [isBetModalOpen, setIsBetModalOpen] = useState(false);
    const [isSuccessModal, setIsSuccessModal] = useState(false);
    const [bet, setBet] = useState({
        numberPicked: "",
        id: ""
    });

    return (
        <Box m="1.5rem 2.5rem" pb="1.5rem">
            <FlexBetween>
                <Header title="AGENT" subtitle="List of Agents" />
                <Box>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: theme.palette.secondary.light,
                            color: theme.palette.background.alt,
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "5px 10px"
                        }}
                        onClick={() => setIsAgentModalOpen(true)}>
                        {" "}
                        Add Agent
                    </Button>
                    <AddAgentModal
                        isModalOpen={isAgentModalOpen}
                        setIsModalOpen={setIsAgentModalOpen}
                        formik={agentFormik}
                    />
                    <AddBet
                        isModalOpen={isBetModalOpen}
                        setIsModalOpen={setIsBetModalOpen}
                        formik={betFormik}
                    />
                    <SuccessBet
                        isModalOpen={isSuccessModal}
                        setIsModalOpen={setIsSuccessModal}
                        bet={bet}
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
                    <AgentTable setIsBetModalOpen={setIsBetModalOpen} />
                </Box>
            </Box>
        </Box>
    );
}

export default Agent;
