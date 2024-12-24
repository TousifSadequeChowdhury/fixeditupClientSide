import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="*" element={<NotFound/>} />
      <Route path="/login" element={<Login></Login>} />

    </Routes>
    
  );
}

export default AppRoutes;
