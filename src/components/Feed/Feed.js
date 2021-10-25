import React from "react";
import "./Feed.css";

// import thelads from "../images/thelads.jpg";
import aristotleimg from "../images/aristotle.jpg";
// import bertrandimg from "../images/bertrand.jpg";
import humeimg from "../images/hume.jpg";
import platoimg from "../images/plato.jpg";
// import socratesimg from "../images/socrates.jpg";

function Feed() {
  return (
    <div className="feed_container">
      <div className="container_card">
        <img src={aristotleimg} alt="hello" className="container_card_image" />
        <b>Aristotle</b>
        <p>Felt cute, might delete</p>
      </div>
      <div className="container_card">
        <h2>Plato</h2>
        <img src={platoimg} alt="hello" className="container_card_image" />
      </div>
      <div className="container_card">
        <h2>Hume</h2>
        <img src={humeimg} alt="hello" className="container_card_image" />
      </div>
    </div>
  );
}

export default Feed;
