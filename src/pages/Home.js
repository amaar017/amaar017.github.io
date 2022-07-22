import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/messi.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Sports News </h1>
        <p> Tous le sport en un seul endroit.</p>
        <Link to="/rendez-vous">
          <button> Prendre un rendez-vous </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
