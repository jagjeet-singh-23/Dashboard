import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Nabar from "components/Navbar";

const Layout = () => {
  return (
    <Box width={`100%`} height={`100%`}>
        <Box>
            <Nabar />
            <Outlet />
        </Box>
    </Box>
  )
};

export default Layout;
