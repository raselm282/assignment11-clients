import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { Toaster } from "react-hot-toast";

const MainLayouts = () => {
  return (
    <div className="max-w-[90%] mx-auto">
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-292px)] py-7">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
