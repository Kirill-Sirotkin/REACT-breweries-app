import React from "react";
import AppBarCustom from "../components/AppBarCustom";
import Box from "@mui/material/Box";
import { Outlet } from "react-router";

const Navigation = () => {
    return (
        <Box>
            <AppBarCustom />
            <Outlet />
        </Box>
    )
}

export default Navigation;