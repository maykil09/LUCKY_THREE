import React from "react";
import {
    LightModeOutlined,
    DarkModeOutlined,
    Menu as MenuIcon,
    Search,
    SettingsOutlined,
    ArrowDropDownOutlined
} from "@mui/icons-material";
import FlexBetween from "component/custom/FlexBetween";
import {useDispatch} from "react-redux";
import {setMode} from "state";
import {AppBar, IconButton, InputBase, Toolbar, useTheme} from "@mui/material";

function Navbar({isSidebarOpen, setIsSidebarOpen}) {
    const dispatch = useDispatch();
    const theme = useTheme();

    return (
        <AppBar
            sx={{
                position: "static",
                background: "none",
                boxShadow: "none"
            }}>
            <Toolbar
                sx={{
                    justifyContent: "space-between"
                }}>
                {/* LEFT SIDE */}
                <FlexBetween>
                    <IconButton
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <MenuIcon />
                    </IconButton>
                </FlexBetween>

                {/* RIGHT SIDE */}
                <FlexBetween gap="1.5">
                    <IconButton onClick={() => dispatch(setMode())}>
                        {theme.palette.mode === "dark" ? (
                            <DarkModeOutlined
                                sx={{
                                    fontSize: "25px"
                                }}
                            />
                        ) : (
                            <LightModeOutlined
                                sx={{
                                    fontSize: "25px"
                                }}
                            />
                        )}
                    </IconButton>
                    <IconButton>
                        <SettingsOutlined
                            sx={{
                                fontSize: "25px"
                            }}
                        />
                    </IconButton>
                </FlexBetween>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
