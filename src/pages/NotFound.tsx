import React from "react";
import AppBarCustom from "../components/AppBarCustom";
import Box from "@mui/material/Box";
import { Outlet } from "react-router";

const NotFound = () => {
    return (
        <Box>
            <AppBarCustom></AppBarCustom>
            <Outlet></Outlet>
            <div>Whoops! Page not found.</div>
        </Box>
    )
}

export default NotFound;