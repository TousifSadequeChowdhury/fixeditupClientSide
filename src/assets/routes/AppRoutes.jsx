import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AddService from "../pages/AddService";
import ManageService from "../pages/ManageService";
import Service from "../components/Service";
import ProviderDashboard from "../pages/ProviderDashboard ";
import ServiceDetails from "../pages/ServiceDetails";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="*" element={<NotFound/>} />
      <Route path="/login" element={<Login></Login>} />
      <Route path="/registration" element={<Registration/>} />
      <Route path="/addservice" element={<AddService/>} />
      <Route path="/manageservice" element={<ManageService/>} />
      <Route path="/services" element={<Service/>} />
      <Route path="/servicetodo" element={<ProviderDashboard/>} />
     <Route path="/services/:id" element={<ServiceDetails/>} />

    </Routes>
    
  );
}

export default AppRoutes;
