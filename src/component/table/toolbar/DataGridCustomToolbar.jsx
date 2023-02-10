import React from "react";
import {Search} from "@mui/icons-material";
import {IconButton, TextField, InputAdornment, Box} from "@mui/material";
import {
    GridToolbarDensitySelector,
    GridToolbarContainer,
    GridToolbarColumnsButton
} from "@mui/x-data-grid";
import FlexBetween from "component/custom/FlexBetween";

function DataGridCustomToolbar() {
    return (
        <GridToolbarContainer>
            <Box width="100%" display="flex" justifyContent="space-between">
                <FlexBetween>
                    <GridToolbarColumnsButton />
                    <GridToolbarDensitySelector />
                </FlexBetween>

                <TextField
                    label="Search..."
                    sx={{
                        mb: "0.5rem",
                        width: "15rem"
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
