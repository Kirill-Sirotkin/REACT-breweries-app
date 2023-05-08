import React from "react";
import { Outlet } from "react-router";
import AppBarCustom from "../components/AppBarCustom";

const Home = () => {
    return (
        <div>
            <AppBarCustom />
            <Outlet />
        </div>
    )
}

export default Home;