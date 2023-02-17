import React from "react";
import {DataGrid} from "@mui/x-data-grid";

function ChipsGiven({isDashboard = false}) {
    // table columns
    const columns = [
        {
            field: "_id",
            headerName: "ID",
            flex: 0.5,
            hide: isDashboard
        },
        {
            field: "agent",
            headerName: "Agent Name",
            flex: 0.5
        },
        {
            field: "givenChips",
            headerName: "Given Chips"
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
            loading={false}
            getRowId={(row) => row._id}
            rows={[
                {
                    _id: "890345acd2112",
                    agent: "John Doe",
                    givenChips: "100",
                    date: "February 7, 2023 8:37 PM"
                },
                {
                    _id: "890345acd2112123",
                    agent: "Mike Doe",
                    givenChips: "75",
                    date: "February 7, 2023 8:37 PM"
                }
            ]}
            columns={columns}
        />
    );
}

export default ChipsGiven;
