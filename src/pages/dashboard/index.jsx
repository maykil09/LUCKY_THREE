import React from "react";
import {useSelector} from "react-redux";
import AdminDashboard from "./admin";
import AgentDashboard from "./agent";

const dashboardView = {
    admin: <AdminDashboard />,
    agent: <AgentDashboard />
};

function Dashboard() {
    const role = useSelector((state) => state.global.user.role);

    return dashboardView[role];
}

export default Dashboard;
