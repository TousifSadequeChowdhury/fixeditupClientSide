import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./assets/routes/AppRoutes";
import Nav from "./assets/components/Nav";
import Footer from "./assets/components/Footer";


function App() {
  return (
    <Router>
      <div className="flex flex-col bg-gray-100">
        <Nav></Nav>
          <main>
   <AppRoutes></AppRoutes>
        </main>
<Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
