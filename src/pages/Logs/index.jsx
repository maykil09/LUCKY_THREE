import React from "react";
import FlexBetween from "component/custom/FlexBetween";
import Header from "component/custom/Header";
import {Box, Button, useTheme, useMediaQuery} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";

function Logs() {
    const theme = useTheme();
    const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

    const columns = [
        {
            field: "_id",
            headerName: "ID",
            sortable: false,
            flex: 0.5
        },
        {
            field: "username",
            headerName: "Username",
            sortable: false,
            flex: 0.5
        },
        {
            field: "activity",
            headerName: "Activity",
            sortable: false,
            flex: 0.5
        },
        {
            field: "date",
            headerName: "Date",
            sortable: false,
            flex: 0.5
        }
    ];

    return (
        <Box m="1.5rem 2.5rem" pb="1.5rem">
            <Header title="LOGS" subtitle="List of User Activity" />

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
                        disableColumnMenu={true}
                        loading={false}
                        getRowId={(row) => row._id}
                        rows={[
                            {
                                _id: "12312asx21",
                                username: "john123",
                                activity: "Logged in",
                                date: "February 7, 2023 8:35 PM"
                            },
                            {
                                _id: "12qwsd12",
                                username: "john123",
                                activity: "Place a bet",
                                date: "February 7, 2023 8:37 PM"
                            }
                        ]}
                        columns={columns}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default Logs;
