import React from "react";
import logo from "../../assets/img/logo.svg";
const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <ul>
        <li>Acceuil</li>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </div>
  );
};

export default Header;
