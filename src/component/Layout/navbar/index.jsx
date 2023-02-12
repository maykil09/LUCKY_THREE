import React, {useState} from "react";
import {
    LightModeOutlined,
    DarkModeOutlined,
    Menu as MenuIcon,
    SettingsOutlined,
    LogoutOutlined
} from "@mui/icons-material";
import FlexBetween from "component/custom/FlexBetween";
import {useDispatch} from "react-redux";
import {setMode} from "state";
import {
    AppBar,
    IconButton,
    Toolbar,
    useTheme,
    Menu,
    MenuList,
    MenuItem,
    ListItemText,
    ListItemIcon
} from "@mui/material";
import {useNavigate} from "react-router-dom";

function Navbar({isSidebarOpen, setIsSidebarOpen}) {
    const dispatch = useDispatch();
    const theme = useTheme();
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const handleLogout = () => {
        navigate("/");
    };

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
                    <IconButton onClick={handleClick}>
                        <SettingsOutlined
                            sx={{
                                fontSize: "25px"
                            }}
                        />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={isOpen}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "bottom"
                        }}>
                        <MenuList>
                            <MenuItem onClick={handleLogout}>
                                <ListItemIcon>
                                    <LogoutOutlined />
                                </ListItemIcon>
                                <ListItemText>Logout</ListItemText>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </FlexBetween>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
