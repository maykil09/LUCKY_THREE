import React, {useState} from "react";
import {Box, useMediaQuery} from "@mui/material";
import {Outlet} from "react-router-dom";
import Navbar from "component/Layout/navbar";
import Sidebar from "component/Layout/sidebar";

function Layout() {
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <Box
            display={isNonMobile ? "flex" : "block"}
            width="100vw"
            height="100%">
            <Sidebar
                drawerWidth="260px"
                isNonMobile={isNonMobile}
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
            <Box flexGrow={1}>
                <Navbar
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />
                <Outlet />
            </Box>
        </Box>
    );
}

export default Layout;
