import React from "react";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from "recharts";
import Loader from "./Loader";

const RadarGraph = ({ userPerformance, kind }) => {
  const TitleChange = (item) => kind[item];
  const InFrench = {
    cardio: "Cardio",
    energy: "Energie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
  };
  const TitleFrench = (item) => InFrench[TitleChange(item)];

  if (userPerformance.length === 0 && !kind) {
    return <Loader />;
  }
  return (
    <div className="radar-graph">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={90} data={userPerformance.data} startAngle={-150} endAngle={+210}>
          <PolarGrid radialLines={false} polarRadius={[11.12, 22.25, 45, 67.5, 90]} stroke="#ffffff" />
          <PolarAngleAxis dataKey="kind" stroke="#ffffff" tickLine={false} fontSize={12} tickFormatter={TitleFrench} />
          <Radar dataKey="value" stroke="#ff0000" fill="#ff0000" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarGraph;
