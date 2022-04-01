import React from "react";
import calories from "../assets/img/calories.svg";
import glucides from "../assets/img/glucides.svg";
import lipides from "../assets/img/lipides.svg";
import protein from "../assets/img/protein.svg";

const SideIcon = ({ type }) => {
  let imageContent = "";
  if (type === "Calories") {
    imageContent = calories;
  } else if (type === "Proteines") {
    imageContent = protein;
  } else if (type === "Glucides") {
    imageContent = glucides;
  } else if (type === "Lipides") {
    imageContent = lipides;
  }

  // A FAIRE QUAND ON AURA SORTI LES PROPS DATA
  // let amountContent = "";
  // amountContent === caloriesCount ? (amountContent = amountContent + "kCal") : amountContent + "g";
  return (
    <div className="side-icon">
      <img src={imageContent} alt={type} />
      <div className="text-content">
        <span className="amount">1,930kCal</span>
        <br />
        <span className="type">{type}</span>
      </div>
    </div>
  );
};

export default SideIcon;
