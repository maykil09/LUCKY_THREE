import React, {useState} from "react";
import FlexBetween from "component/custom/FlexBetween";
import Header from "component/custom/Header";
import {Box, Button, useTheme, useMediaQuery} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import AddAgentModal from "component/modal/AddAgentModal";
import {useFormik} from "formik";
import {agentSchema} from "helper/formik";

const onSubmit = (values, actions) => {
    console.log(values);
    console.log("submitted");
    actions.resetForm();
};

function Agent() {
    const theme = useTheme();
    const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            username: "",
            password: ""
        },
        validationSchema: agentSchema,
        onSubmit
    });

    // States
    const [isModalOpen, setIsModalOpen] = useState(false);

    // table columns
    const columns = [
        {
            field: "_id",
            headerName: "ID",
            flex: 0.5
        },
        {
            field: "firstName",
            headerName: "First Name",
            flex: 0.5
        },
        {
            field: "lastName",
            headerName: "Last Name",
            flex: 0.5
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
                    <FlexBetween gap="0.5rem">
                        <Button
                            variant="outlined"
                            sx={{
                                color: theme.palette.secondary.light,
                                borderColor: theme.palette.secondary.light
                            }}>
                            {params.row.userStatus ? "Disable" : "Activate"}
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{
                                color: theme.palette.secondary.light,
                                borderColor: theme.palette.secondary.light
                            }}>
                            Place Bet
                        </Button>
                    </FlexBetween>
                );
            }
        }
    ];
    return (
        <Box m="1.5rem 2.5rem" pb="1.5rem">
            <FlexBetween>
                <Header title="AGENT" subtitle="List of Agents" />
                <Box>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: theme.palette.secondary.light,
                            color: theme.palette.background.alt,
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "5px 10px"
                        }}
                        onClick={() => setIsModalOpen(true)}>
                        {" "}
                        Add Agent
                    </Button>
                    <AddAgentModal
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        formik={formik}
                    />
                </Box>
            </FlexBetween>
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
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default Agent;
