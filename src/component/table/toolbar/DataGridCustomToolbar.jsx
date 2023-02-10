import React from "react";
import {Search} from "@mui/icons-material";
import {
    IconButton,
    TextField,
    InputAdornment,
    Box,
    useMediaQuery
} from "@mui/material";
import {
    GridToolbarDensitySelector,
    GridToolbarContainer,
    GridToolbarColumnsButton
} from "@mui/x-data-grid";
import FlexBetween from "component/custom/FlexBetween";

function DataGridCustomToolbar() {
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    return (
        <GridToolbarContainer>
            <Box
                width="100%"
                display={isNonMobile ? "flex" : "block"}
                justifyContent="space-between">
                <FlexBetween>
                    <GridToolbarColumnsButton />
                    <GridToolbarDensitySelector />
                </FlexBetween>

                <TextField
                    label="Search..."
                    sx={{
                        mt: "0.5rem",
                        mb: "0.5rem",
                        width: isNonMobile ? "15rem" : "100%"
                    }}
                    // onChange={() => setSearchInput(e.target.value)}
                    // value={searchInput}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => {}}>
                                    <Search />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </Box>
        </GridToolbarContainer>
    );
}

export default DataGridCustomToolbar;
