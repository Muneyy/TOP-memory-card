import React from "react";
import { useState } from "react";
import chuu from "../Images/chuu.jpg";
import "../Styles/card.css";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const images = importAll(require.context('../Images', false, /\.(png|jpe?g|svg)$/));

const Card = ({member, name, imageUrl, onClick}) => {
    return (
        <div className="card" onClick={onClick}>
            <img src={images[imageUrl]} alt="LOTR"/>         
            <h1>{name}</h1>
        </div>
    )
}

export default Card;
