import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./assets/routes/AppRoutes";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div >
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
