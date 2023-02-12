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
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/agent" element={<Agent />} />
                            <Route path="/result" element={<Result />} />
                            <Route path="/bet" element={<Bet />} />
                            <Route path="/logs" element={<Logs />} />
                        </Route>
                        <Route path="/" element={<Login />} />
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
