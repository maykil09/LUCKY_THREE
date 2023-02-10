import React from "react";
import {DataGrid} from "@mui/x-data-grid";
import DataGridCustomToolbar from "./toolbar/DataGridCustomToolbar";

function BetTable({isDashboard = false}) {
    // table columns
    const columns = [
        {
            field: "_id",
            headerName: "ID",
            flex: 0.5,
            hide: isDashboard
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
            headerName: "Rumble",
            flex: 0.5
        },
        {
            field: "agent",
            headerName: "Agent Name",
            flex: 0.5,
            hide: isDashboard
        }
    ];
    return (
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
            components={
                !isDashboard && {
                    Toolbar: DataGridCustomToolbar
                }
            }
        />
    );
}

export default BetTable;
