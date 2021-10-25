import { React, useState } from "react";
import "./Random.css";

import thelads from "../images/thelads.jpg";
import aristotleimg from "../images/aristotle.jpg";
import bertrandimg from "../images/bertrand.jpg";
import humeimg from "../images/hume.jpg";
import platoimg from "../images/plato.jpg";
import socratesimg from "../images/socrates.jpg";

const imageArray = [aristotleimg, bertrandimg, humeimg, platoimg, socratesimg];

// var randomimage = imageArray[Math.floor(Math.random() * imageArray.length)];

function Random() {
  const [imageused, setimageused] = useState(thelads);

  const changeTick = () => {
    //PLACING THE RANDOM IMAGE VARIABLE IN HERE DOESN'T WORK
    setimageused(imageArray[Math.floor(Math.random() * imageArray.length)]);
  };

  return (
    <div className="container_random">
      <h1>Random Image Page</h1>
      <div className="random_image">
        <img src={imageused} alt="hello" className="random_image" />
      </div>
      <button onClick={changeTick}>Hit me with some philosophy</button>
    </div>
  );
}

export default Random;
