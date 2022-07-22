import React, { useState } from "react";
import Logo from "../assets/logo.JPG";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/football"> Football </Link>
          <Link to="/basketball"> Basketball </Link>
          <Link to="/Contact"> Commentaires </Link>
          <Link to="/rendez"> Rendez-vous </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/football"> Football </Link>
        <Link to="/basketball"> Basketball </Link>
        <Link to="/Contact"> Commentaires </Link>
        <Link to="/rendez"> Rendez-vous </Link>
        <button onClick={toggleNavbar}>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
