import React from "react";
import CircleGraph from "../components/CircleGraph";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import SideIcon from "../components/SideIcon";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Navbar />
      <div className="side-icon-container">
        <SideIcon type="Calories" />
        <SideIcon type="Proteines" />
        <SideIcon type="Glucides" />
        <SideIcon type="Lipides" />
      </div>
      <CircleGraph />
    </div>
  );
};

export default Home;
