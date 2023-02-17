import React, {useEffect} from "react";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {useMemo} from "react";
import {themeSettings} from "theme";
import {useSelector} from "react-redux";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "component/Layout";
import Dashboard from "pages/dashboard";
import Agent from "pages/agent";
import Result from "pages/result";
import Bet from "pages/bet";
import Logs from "pages/Logs";
import Login from "pages/login";
import ProtectedRoute from "component/auth/ProtectedRoute";
import CheckAuth from "component/auth/CheckAuth";

// toast
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify";

// state
import {setUser} from "state";
import {useDispatch} from "react-redux";

import {STORAGE} from "config/constant";

function App() {
    const mode = useSelector((state) => state.global.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem(STORAGE.SESSION));

    useEffect(() => {
        if (user) {
            dispatch(setUser(user));
        }
    }, [user, dispatch]);

    return (
        <div className="app">
            <ToastContainer />
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Routes>
                        <Route element={<ProtectedRoute />}>
                            <Route element={<Layout />}>
                                <Route
                                    path="/dashboard"
                                    element={<Dashboard />}
                                />
                                <Route path="/agent" element={<Agent />} />
                                <Route path="/result" element={<Result />} />
                                <Route path="/bet" element={<Bet />} />
                                <Route path="/logs" element={<Logs />} />
                            </Route>
                        </Route>
                        <Route element={<CheckAuth />}>
                            <Route path="/" element={<Login />} />
                            <Route path="/login" element={<Login />} />
                        </Route>
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
