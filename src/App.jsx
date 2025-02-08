import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./assets/routes/AppRoutes";
import Nav from "./assets/components/Nav";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-base-100">
        <Nav />
        <main className="flex-grow mt-16"> 
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
