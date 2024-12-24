import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="*" element={<NotFound/>} />
      <Route path="/login" element={<Login></Login>} />
      <Route path="/registration" element={<Registration/>} />

    </Routes>
    
  );
}

export default AppRoutes;
