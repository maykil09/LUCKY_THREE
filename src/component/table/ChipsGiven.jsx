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
            headerName: "Given Chips",
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
                    givenChips: "100"
                },
                {
                    _id: "890345acd2112123",
                    agent: "Mike Doe",
                    givenChips: "75"
                }
            ]}
            columns={columns}
        />
    );
}

export default ChipsGiven;
