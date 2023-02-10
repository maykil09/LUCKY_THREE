import React from "react";
import {DataGrid} from "@mui/x-data-grid";
import DataGridCustomToolbar from "./toolbar/DataGridCustomToolbar";

function LogsTable({isDashboard = false}) {
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
            components={
                !isDashboard && {
                    Toolbar: DataGridCustomToolbar
                }
            }
        />
    );
}

export default LogsTable;
