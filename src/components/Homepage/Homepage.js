import React from "react";
import "./Homepage.css";

import thelads from "../images/thelads.jpg";
import aristotleimg from "../images/aristotle.jpg";
import bertrandimg from "../images/bertrand.jpg";
import humeimg from "../images/hume.jpg";
import platoimg from "../images/plato.jpg";
import socratesimg from "../images/socrates.jpg";

function Homepage() {
  return (
    <div className="container">
      <h1>Philosogram</h1>
      <div className="container_card">
        <h2>Aristotle</h2>
        <img src={aristotleimg} alt="hello" className="container_card_image" />
      </div>
      <div className="container_card">
        <h2>Plato</h2>
        <img src={platoimg} alt="hello" className="container_card_image" />
      </div>
    </div>
  );
}

export default Homepage;
