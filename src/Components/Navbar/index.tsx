import React, { useEffect, useState } from "react";
import "./style.scss";

import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../../assets/dp.jpg"

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  const [dp, setDp] = useState<boolean>(true);
  const [sideMenu, setSideMenu] = useState<boolean>(true);

  const openProfile = (e: React.MouseEvent) => {
    setDp(false);
    console.log(dp);
    e.stopPropagation();
  };

  const settingDp = (e: React.MouseEvent) => {
    setDp(true);
    console.log(dp);
    e.stopPropagation();
  };

  const sidefunc = (e: React.MouseEvent) => {
    setSideMenu(!sideMenu);
    e.stopPropagation();
  };

  useEffect(() => {
    if (!sideMenu) {
      const func = () => {
        setSideMenu(true);
        console.log("i am from use effect", sideMenu);
      };
      document.addEventListener("click", func);
      return () => {
        document.removeEventListener("click", func);
      };
    }
  });

  return (
    <nav
      className="navbar"
      onClick={(e: React.MouseEvent) => {
        console.log("nav bar propagation");
        e.stopPropagation();
      }}
    >
      <div className="logo">
        {dp ? (
          <div className="logo-img" onClick={openProfile}>
            <img
              className="dp"
              src={Logo}
              alt="profile"
            />
          </div>
        ) : (
          <div className="profile" onClick={settingDp}>
            <img
              className="profile-dp"
              src={Logo}
              alt="profile"
            />
          </div>
        )}
      </div>

      <div className="lists">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#project">Project</a>
      </div>
      <div className="social-media">
        <a href="https://github.com/shri214">
          <FontAwesomeIcon className="social-icons" icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/shriram-kushwaha-0a4048243">
          <FontAwesomeIcon className="social-icons" icon={faLinkedinIn} />
        </a>
      </div>
      <div className="menu" onClick={sidefunc}>
        <div className={!sideMenu ? "first" : ""}></div>
        <div className={!sideMenu ? "second" : ""}></div>
        <div className={!sideMenu ? "third" : ""}></div>
      </div>
      {!sideMenu && (
        <div className="menuBar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#project">Project</a>

          <a href="https://github.com/shri214">
            <FontAwesomeIcon className="socials-icons" icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/shriram-kushwaha-0a4048243">
            <FontAwesomeIcon className="socials-icons" icon={faLinkedinIn} />
          </a>
        </div>
      )}
    </nav>
  );
};
