import {CssBaseline, ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {useMemo} from "react";
import {themeSettings} from "theme";
import {useSelector} from "react-redux";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Layout from "component/Layout";
import Dashboard from "pages/dashboard";
import Agent from "pages/agent";
import Result from "pages/result";
import Bet from "pages/bet";
import Logs from "pages/Logs";

function App() {
    const mode = useSelector((state) => state.global.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return (
        <div className="app">
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Routes>
                        <Route element={<Layout />}>
                            <Route
                                path="/"
                                element={<Navigate to={"/dashboard"} replace />}
                            />

                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/agent" element={<Agent />} />
                            <Route path="/result" element={<Result />} />
                            <Route path="/bet" element={<Bet />} />
                            <Route path="/logs" element={<Logs />} />
                        </Route>
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
