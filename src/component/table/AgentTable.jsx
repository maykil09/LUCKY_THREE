import React from "react";
import {DataGrid} from "@mui/x-data-grid";
import {
    PersonOffOutlined,
    PersonAddOutlined,
    AddCircleOutline
} from "@mui/icons-material";
import {Button, IconButton, useTheme, useMediaQuery} from "@mui/material";
import DataGridCustomToolbar from "./toolbar/DataGridCustomToolbar";
import FlexBetween from "component/custom/FlexBetween";

function AgentTable({isDashboard = false, setIsBetModalOpen}) {
    const theme = useTheme();
    const isNonMobile = useMediaQuery("(min-width: 600px)");

    // table columns
    const columns = [
        {
            field: "_id",
            headerName: "ID",
            flex: 0.5,
            hide: !isNonMobile
        },
        {
            field: "firstName",
            headerName: "First Name",
            flex: 0.5
        },
        {
            field: "lastName",
            headerName: "Last Name",
            flex: 0.5,
            hide: !isNonMobile
        },
        {
            field: "userStatus",
            headerName: "Status",
            flex: 0.5,
            renderCell: (params) => {
                return params.value ? "Active" : "Disabled";
            }
        },
        {
            field: "actions",
            headerName: "Action",
            sortable: false,
            flex: 0.5,
            renderCell: (params) => {
                return (
                    <FlexBetween gap=".5rem">
                        {isNonMobile ? (
                            <>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        color: theme.palette.secondary.light,
                                        borderColor:
                                            theme.palette.secondary.light
                                    }}>
                                    {params.row.userStatus
                                        ? "Disable"
                                        : "Activate"}
                                </Button>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        color: theme.palette.secondary.light,
                                        borderColor:
                                            theme.palette.secondary.light
                                    }}
                                    onClick={() => setIsBetModalOpen(true)}>
                                    Place Bet
                                </Button>
                            </>
                        ) : (
                            <>
                                <IconButton>
                                    {params.row.userStatus ? (
                                        <PersonOffOutlined />
                                    ) : (
                                        <PersonAddOutlined />
                                    )}
                                </IconButton>
                                <IconButton
                                    onClick={() => setIsBetModalOpen(true)}>
                                    <AddCircleOutline />
                                </IconButton>
                            </>
                        )}
                    </FlexBetween>
                );
            }
        }
    ];
    return (
        <DataGrid
            loading={false}
            getRowId={(row) => row._id}
            rows={[
                {
                    _id: "123123123",
                    firstName: "John",
                    lastName: "Doe",
                    userStatus: true
                }
            ]}
            columns={columns}
            components={
                !isDashboard && {
                    Toolbar: DataGridCustomToolbar
                }
            }
        />
    );
}

export default AgentTable;
