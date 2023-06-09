import React from "react";
import {Route, Routes } from "react-router-dom";
import Home from "./Home";
import Interests from "./Interests";
import Admin from "./Admin";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/Home/*" element={<Home />} />
      <Route path="/Home/interests" element={<Interests />} />
      <Route path="/Home/admin" element={<Admin />} />
    </Routes>
  );
}

export default AppRoutes;

