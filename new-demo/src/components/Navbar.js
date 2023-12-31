import React from "react";
import Logo from "../images/passopen.png";

const Navbar = () => {
  return (
    <div >
    <div className="main-nav">
    <div className="nav-parts">
      <div className="logo"><img src={Logo} style={{ width: "120px",
    height: "35px"}}/></div>
      <div className="right-but">
        <div className="login">Log in</div>
        <div className="get-app">Get <span> App</span></div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Navbar;
