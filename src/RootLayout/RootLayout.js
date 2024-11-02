import React from "react";
import "./RootlayOut.css";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./RootlayOut.css"

function RootLayout() {
  return (
    <div className="main-container ">
      <nav>
        <div>
     <NavBar/>
        </div>
      </nav>
      
      <main>
        <Outlet/>
      </main>

      <footer>
        <h2>@2024</h2>
      </footer>
    </div>
  );
}

export default RootLayout;
