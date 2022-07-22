import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
      ></div>
      <div className="rightSide">
        <h1> Vos commentaires</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Nom complet</label>
          <input name="name" placeholder="Entrez vote nom..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Entrez votre email..." type="email" />
          <label htmlFor="commentaire">Commentaire</label>
          <textarea
            rows="6"
            placeholder="Entrez votre commentaire..."
            name="commentaire"
            required
          ></textarea>
          <button type="envoyer"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
