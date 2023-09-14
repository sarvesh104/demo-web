import React from "react";
import Logo from "../images/passopen.png";

const Navbar = () => {
  return (
    <div >
    <div className="main-nav">
    <div className="nav-parts">
      <div className="logo"><img src={Logo} style={{    width: "135px",
    height: "40px"}}/></div>
      <div className="right-but">
        <div className="login">Login</div>
        <div className="get-app">Get <span> App</span></div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Navbar;
