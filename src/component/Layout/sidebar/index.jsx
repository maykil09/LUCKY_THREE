import React, {useState, useEffect} from "react";
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme
} from "@mui/material";
import {
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    PeopleAltOutlined,
    EmojiEventsOutlined,
    MonetizationOnOutlined,
    FormatListBulletedOutlined
} from "@mui/icons-material";
import {useLocation, useNavigate} from "react-router-dom";
import FlexBetween from "component/custom/FlexBetween";
import {useSelector} from "react-redux";

const navItems = [
    {
        text: "Dashboard",
        icon: <HomeOutlined />,
        permission: ["admin", "agent"]
    },
    {
        text: "Agent",
        icon: <PeopleAltOutlined />,
        permission: ["admin"]
    },
    {
        text: "Bet",
        icon: <MonetizationOnOutlined />,
        permission: ["admin", "agent"]
    },
    {
        text: "Result",
        icon: <EmojiEventsOutlined />,
        permission: ["admin", "agent"]
    },
    {
        text: "Logs",
        icon: <FormatListBulletedOutlined />,
        permission: ["admin", "agent"]
    }
];

function Sidebar({drawerWidth, isNonMobile, isSidebarOpen, setIsSidebarOpen}) {
    const user = useSelector((state) => state.global.user);
    const {pathname} = useLocation();
    const [active, setActive] = useState("");
    const navigate = useNavigate();
    const theme = useTheme();

    useEffect(() => {
        if (pathname.substring(1) === "agent" && user.role !== "admin") {
            navigate("/dashboard");
        }
        setActive(pathname.substring(1));
        if (!isNonMobile) {
            setIsSidebarOpen(isNonMobile);
        }
    }, [pathname, isNonMobile, setIsSidebarOpen, navigate, user.role]);

    return (
        <Box component="nav">
            {isSidebarOpen && (
                <Drawer
                    open={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                    variant="persistent"
                    anchor="left"
                    sx={{
                        width: drawerWidth,
                        "& .MuiDrawer-paper": {
                            color: theme.palette.secondary[200],
                            background: theme.palette.background.alt,
                            boxSizing: "border-box",
                            borderWidth: isNonMobile ? 0 : "2px",
                            width: drawerWidth
                        }
                    }}>
                    <Box width="100%">
                        <Box m="1.5rem 2rem 2rem 3rem">
                            <FlexBetween color={theme.palette.secondary.main}>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    gap="0.5rem">
                                    <Typography variant="h4" fontWeight="bold">
                                        LUCKY-THREE
                                    </Typography>
                                </Box>
                                {!isNonMobile && (
                                    <IconButton
                                        onClick={() =>
                                            setIsSidebarOpen(!isSidebarOpen)
                                        }>
                                        <ChevronLeft />
                                    </IconButton>
                                )}
                            </FlexBetween>
                        </Box>
                        <List>
                            {navItems.map(({text, icon, permission}) => {
                                if (!icon) {
                                    return (
                                        <Typography
                                            key={text}
                                            sx={{
                                                m: "2.5rem 0 1rem 3rem"
                                            }}>
                                            {text}
                                        </Typography>
                                    );
                                }

                                const lcText = text.toLowerCase();

                                return (
                                    <ListItem
                                        key={text}
                                        disablePadding
                                        sx={{
                                            display: permission.includes(
                                                user.role
                                            )
                                                ? "block"
                                                : "none"
                                        }}>
                                        <ListItemButton
                                            onClick={() => {
                                                navigate(`/${lcText}`);
                                                setActive(lcText);
                                            }}
                                            sx={{
                                                backgroundColor:
                                                    active === lcText
                                                        ? theme.palette
                                                              .secondary[300]
                                                        : "transparent",
                                                color:
                                                    active === lcText
                                                        ? theme.palette
                                                              .primary[600]
                                                        : theme.palette
                                                              .secondary[100]
                                            }}>
                                            <ListItemIcon
                                                sx={{
                                                    ml: "2rem",
                                                    color:
                                                        active === lcText
                                                            ? theme.palette
                                                                  .primary[600]
                                                            : theme.palette
                                                                  .secondary[200]
                                                }}>
                                                {icon}
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                            {active === lcText && (
                                                <ChevronRightOutlined
                                                    sx={{
                                                        ml: "auto"
                                                    }}
                                                />
                                            )}
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Box>
                </Drawer>
            )}
        </Box>
    );
}

export default Sidebar;
