// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import PosSideBar from "../components/side_bar";

export default function PosIndexPage() {
  return (
    <div
      className="border bg-raya-light box-border p-2"
      style={{ height: "100vh" }}
    >
      <div className="flex w-full h-full">
        <PosSideBar />
        <Outlet />
      </div>
    </div>
  );
}
