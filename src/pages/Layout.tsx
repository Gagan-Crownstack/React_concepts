import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <Outlet /> {/* This is where the routed content will be rendered */}
      </div>
    </>
  );
};

export default Layout;
