import React from "react";
import "../scss/Card.scss";
import annas from "../../assets/501.png";
import omega from "../../assets/114.png";
import peura from "../../assets/12.png";
import yorn from "../../assets/112.png";

const Card = () => {
  return (
    <div className="grid">
      <div className="div1">
        <img src={annas} alt="annas" />
      </div>
      <div className="div2">
        <img src={omega} alt="omega" />
      </div>
      <div className="div3">
        <img src={peura} />
      </div>
      <div className="div4">
        <img src={yorn} />
      </div>
    </div>
  );
};

export default Card;
