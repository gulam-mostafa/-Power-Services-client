import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './Main.css'

const Main = () => {
  return (
    <div>
      <div className="hscreen">
        <Navbar ></Navbar>
        <Outlet >
          <div className="hscreen "></div>
        </Outlet>
      </div>
      <Footer ></Footer>
    </div>
  );
};

export default Main;
