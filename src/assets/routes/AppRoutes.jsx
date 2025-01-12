import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AddService from "../pages/AddService";
import ManageService from "../pages/ManageService";
import Service from "../components/Service";
// import ProviderDashboard from "../pages/ProviderDashboard";
import ServiceDetails from "../pages/ServiceDetails";
import Privateroutes from "./Privateroutes";
import CustomerReviews from "../pages/CustomerReviews";

function AppRoutes() {
  const location = useLocation();

  // Map of route paths to titles
  const routeTitles = {
    "/": "Home - FIXEDITUP",
    "*": "Page Not Found - FIXEDITUP",
    "/login": "Login - FIXEDITUP",
    "/registration": "Register - FIXEDITUP",
    "/services": "Services - FIXEDITUP",
    "/customerevew": "Customer Reviews - FIXEDITUP",
    "/addservice": "Add Service - FIXEDITUP",
    "/manageservice": "Manage Services - FIXEDITUP",
    "/servicetodo": "Dashboard - FIXEDITUP",
  };

  useEffect(() => {
    // Get the title based on the current route
    const currentPath = location.pathname;
    const dynamicTitle = routeTitles[currentPath] || "FIXEDITUP";
    document.title = dynamicTitle;
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />

      {/* Public Routes */}
      <Route path="/services" element={<Service />} />
      <Route path="/customerevew" element={<CustomerReviews />} />

      {/* Private Routes */}
      <Route
        path="/addservice"
        element={
          <Privateroutes>
            <AddService />
          </Privateroutes>
        }
      />
      <Route
        path="/manageservice"
        element={
          <Privateroutes>
            <ManageService />
          </Privateroutes>
        }
      />
      <Route
        path="/servicetodo"
        element={
          <Privateroutes>
           <providerdeshbord/>
          </Privateroutes>
        }
      />
      <Route
        path="/services/:id"
        element={
          <Privateroutes>
            <ServiceDetails />
          </Privateroutes>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
