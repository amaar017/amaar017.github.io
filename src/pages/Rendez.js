import React from "react";
import "../styles/Contact.css";

function Rendez() {
  return (
    <div className="rendez">
      <div
        className="leftSide"
      ></div>
      <div className="rightSide">
        <h1> Prendre un rendez-vous</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Nom complet</label>
          <input name="name" placeholder="Entrez vote nom..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Entrez votre email..." type="email" />
          <label htmlFor="date">Votre date convenable</label>
          <textarea
            rows="6"
            placeholder="Entrez votre date convenable..."
            name="Date"
            required
          ></textarea>
          <button type="envoyer"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Rendez;
