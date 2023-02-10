import React from "react";
import Header from "component/custom/Header";
import {Box, useTheme, useMediaQuery} from "@mui/material";
import LogsTable from "component/table/LogsTable";

function Logs() {
    const theme = useTheme();
    const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

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
                    borderRadius="0.55rem"
                    sx={{
                        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                            color: `${theme.palette.secondary[200]} !important`
                        }
                    }}>
                    <LogsTable />
                </Box>
            </Box>
        </Box>
    );
}

export default Logs;
