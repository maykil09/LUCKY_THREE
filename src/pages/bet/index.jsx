import React, {useState} from "react";
import {Box, Button, useTheme, useMediaQuery} from "@mui/material";
import FlexBetween from "component/custom/FlexBetween";
import Header from "component/custom/Header";
import AddBet from "component/modal/AddBet";
import {numberPickedSchema} from "helper/formik";
import {useFormik} from "formik";

import BetTable from "component/table/BetTable";
import SuccessBet from "component/modal/SuccessBet";

// const onSubmit = (values, actions) => {};

function Bet() {
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
                <Header title="BET" subtitle="List of Bets" />
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
                        onClick={() => setIsModalOpen(true)}>
                        {" "}
                        PLACE BET
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
                        // "& .MuiDataGrid-columnHeaders": {
                        //     backgroundColor: theme.palette.background.alt,
                        //     color: theme.palette.secondary[100],
                        //     borderBottom: "none"
                        // },
                        // "& .MuiDataGrid-footerContainer": {
                        //     backgroundColor: theme.palette.background.alt,
                        //     color: theme.palette.secondary[100],
                        //     borderTop: "none"
                        // },
                        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                            color: `${theme.palette.secondary[200]} !important`
                        }
                    }}>
                    <BetTable />
                </Box>
            </Box>
        </Box>
    );
}

export default Bet;
