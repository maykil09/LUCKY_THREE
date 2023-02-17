import React, {useState} from "react";
import {
    LightModeOutlined,
    DarkModeOutlined,
    Menu as MenuIcon,
    SettingsOutlined,
    LogoutOutlined,
    PaidOutlined
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
    ListItemIcon,
    Box,
    Typography
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {setUser} from "state";
import {STORAGE} from "config/constant";
import {useSelector} from "react-redux";

function Navbar({isSidebarOpen, setIsSidebarOpen}) {
    const user = useSelector((state) => state.global.user);
    const dispatch = useDispatch();
    const theme = useTheme();
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const handleLogout = () => {
        localStorage.removeItem(STORAGE.SESSION);
        dispatch(
            setUser({
                name: "",
                token: "",
                role: ""
            })
        );
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
                    <Box
                        display={user.role === "agent" ? "flex" : "none"}
                        justifyContent="center"
                        alignItems="center"
                        color={theme.palette.secondary[300]}>
                        <Typography fontSize="20px">100</Typography>
                        <PaidOutlined
                            sx={{
                                marginLeft: "5px",
                                fontSize: "25px"
                            }}
                        />
                    </Box>
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
                            horizontal: "left"
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
