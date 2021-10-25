import { React, useState } from "react";
import "./Random.css";

import thelads from "../images/thelads.jpg";
import aristotleimg from "../images/aristotle.jpg";
import bertrandimg from "../images/bertrand.jpg";
import humeimg from "../images/hume.jpg";
import platoimg from "../images/plato.jpg";
import socratesimg from "../images/socrates.jpg";

const imageArray = [aristotleimg, bertrandimg, humeimg, platoimg, socratesimg];

var randomimage = imageArray[Math.floor(Math.random() * imageArray.length)];

function Random() {
  const [imageused, setimageused] = useState(thelads);

  const changeTick = () => {
    setimageused(thelads);
    setimageused(randomimage);
  };

  return (
    <div className="container_random">
      <h1>Random Image Page</h1>
      <button onClick={changeTick}>Hit me with some philosophy</button>
      <div className="random_image">
        <img src={imageused} alt="hello" className="random_image" />
      </div>
    </div>
  );
}

export default Random;
