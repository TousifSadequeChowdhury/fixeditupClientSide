import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    
  );
}

export default AppRoutes;
