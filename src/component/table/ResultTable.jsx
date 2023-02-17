import React from "react";
import {DataGrid} from "@mui/x-data-grid";
import DataGridCustomToolbar from "./toolbar/DataGridCustomToolbar";

function ResultTable({isDashboard = false}) {
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
            headerName: "Rumble",
            flex: 0.5
        },
        {
            field: "draw_time",
            headerName: "Draw",
            flex: 0.5
        },
        {
            field: "username",
            headerName: "Username",
            flex: 0.5
        },
        {
            field: "date",
            headerName: "Date",
            flex: 0.5
        }
    ];
    return (
        <DataGrid
            loading={false}
            getRowId={(row) => row._id}
            rows={[
                {
                    _id: "123123123",
                    bet_id: "567123d",
                    bet_number: "123",
                    isRumbled: true,
                    draw_time: "9pm",
                    username: "john123",
                    date: "February 7, 2023"
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

export default ResultTable;
