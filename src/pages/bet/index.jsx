import React from "react";
import {Box, Button, useTheme, useMediaQuery} from "@mui/material";
import FlexBetween from "component/custom/FlexBetween";
import Header from "component/custom/Header";
import {DataGrid} from "@mui/x-data-grid";

function Bet() {
    const theme = useTheme();
    const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

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
            headerName: "Rambolito",
            flex: 0.5
        },
        {
            field: "agent",
            headerName: "Agent Name",
            flex: 0.5
        }
    ];

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
                        }}>
                        {" "}
                        PLACE BET
                    </Button>
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
                    borderRadius="0.55rem">
                    <DataGrid
                        loading={false}
                        getRowId={(row) => row._id}
                        rows={[
                            {
                                _id: "123md12e12",
                                bet_id: "652asd123akka",
                                bet_number: "235",
                                isRumbled: false,
                                agent: "John Doe"
                            },
                            {
                                _id: "890345acd2112",
                                bet_id: "1237823asd2",
                                bet_number: "125",
                                isRumbled: true,
                                agent: "John Doe"
                            }
                        ]}
                        columns={columns}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default Bet;
