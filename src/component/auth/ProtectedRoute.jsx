import React from "react";
import {STORAGE} from "config/constant";
import {Navigate, Outlet} from "react-router-dom";

function ProtectedRoute() {
    const user = JSON.parse(localStorage.getItem(STORAGE.SESSION));

    return user ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
