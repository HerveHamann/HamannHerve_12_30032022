import React from "react";
import BarGraph from "../components/BarGraph";
import CircleGraph from "../components/CircleGraph";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import LineGraph from "../components/LineGraph";
import RadarGraph from "../components/RadarGraph";
import SideIcon from "../components/SideIcon";

const Home = () => {
  return (
    <div className="home">
      <Header />

      <div className="main-container">
        <div className="graf-container">
          <BarGraph />
          <div className="sub-container">
            <LineGraph />
            <RadarGraph />
            <CircleGraph />
          </div>
        </div>
        <div className="side-icon-container">
          <SideIcon type="Calories" />
          <SideIcon type="Proteines" />
          <SideIcon type="Glucides" />
          <SideIcon type="Lipides" />
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Home;
