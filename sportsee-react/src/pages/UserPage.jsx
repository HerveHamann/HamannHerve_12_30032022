import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BarGraph from "../components/BarGraph";
import CircleGraph from "../components/CircleGraph";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import LineGraph from "../components/LineGraph";
import Loader from "../components/Loader";
import RadarGraph from "../components/RadarGraph";
import SideIcon from "../components/SideIcon";

import { getUserData, getUserActivity, getUserSessions, getUserPerformance } from "../ApiService";

const UserPage = () => {
  const { id } = useParams();

  const [userData, setUserData] = useState([]);
  const [userActivity, setUserActivity] = useState([]);
  const [userSessions, setUserSessions] = useState([]);
  const [userPerformance, setUserPerformance] = useState([]);

  useEffect(() => {
    getUserData(id).then((response) => {
      setUserData(response);
    });
    getUserActivity(id).then((response) => {
      setUserActivity(response);
    });
    getUserSessions(id).then((response) => {
      setUserSessions(response);
    });
    getUserPerformance(id).then((response) => {
      setUserPerformance(response);
    });
  }, [id]);

  if (userData.length === 0) {
    return <Loader />;
  }
  return (
    <div className="home">
      <Header />
      <div className="main-container">
        <Navbar />
        <div className="content-container">
          <div className="title-container">
            <h1>
              Bonjour <span>{userData.userInfos.firstName}</span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏 </p>
          </div>
          <div className="info-container">
            <div className="graf-container">
              <BarGraph userActivity={userActivity} />
              <div className="sub-container">
                <LineGraph userSessions={userSessions} />
                <RadarGraph userPerformance={userPerformance} kind={userPerformance.kind} />
                <CircleGraph userData={userData} />
              </div>
            </div>
            <div className="side-icon-container">
              <SideIcon type="Calories" amount={userData.keyData.calorieCount} />
              <SideIcon type="Proteines" amount={userData.keyData.proteinCount} />
              <SideIcon type="Glucides" amount={userData.keyData.carbohydrateCount} />
              <SideIcon type="Lipides" amount={userData.keyData.lipidCount} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserPage;
