import React, { useState, useEffect } from "react";
import Logo from "../images/passopen.png";
import "./Navbar.css";
import Tick from "../images/tick.png";

const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [hideLoginButton, setHideLoginButton] = useState(false);

  useEffect(() => {
    // Update screenWidth state when the window is resized
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Conditionally update the logo image and hide login button based on screen width
    if (screenWidth < 600) {
      setHideLoginButton(true); // Hide login button for small screens
    } else {
      setHideLoginButton(false); // Show login button for larger screens
    }
  }, [screenWidth]);

  return (
    <div className="main-nav">
      <div className="nav-parts">
        <div className="logo">
          <picture>
            <source srcSet={Tick} media="(max-width: 600px)" />
            <img
              src={Logo}
              alt="Logo"
              style={{
                width: screenWidth < 600 ? "50px" : "135px",
                height: screenWidth < 600 ? "auto" : "40px",
              }}
            />
          </picture>
        </div>
        <div className="right-but">
          {!hideLoginButton && <div className="login">Login</div>}
          <div className="get-app">
            Get <span> App</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
