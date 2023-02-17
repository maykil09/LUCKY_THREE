import React from "react";
import {STORAGE} from "config/constant";
import {Navigate, Outlet} from "react-router-dom";

function CheckAuth() {
    const user = JSON.parse(localStorage.getItem(STORAGE.SESSION));
    console.log(user);
    return user ? <Navigate to="/dashboard" /> : <Outlet />;
}

export default CheckAuth;
