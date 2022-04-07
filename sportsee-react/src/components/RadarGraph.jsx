import React from "react";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from "recharts";

const RadarGraph = () => {
  const data = [
    {
      subject: "Intensité",
      A: 90,
    },
    {
      subject: "Vitesse",
      A: 200,
    },
    {
      subject: "Force",
      A: 50,
    },
    {
      subject: "Endurance",
      A: 140,
    },
    {
      subject: "Energie",
      A: 120,
    },
    {
      subject: "Cardio",
      A: 80,
    },
  ];

  return (
    <div className="radar-graph">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={90} data={data}>
          <PolarGrid radialLines={false} polarRadius={[11.12, 22.25, 45, 67.5, 90]} stroke="#ffffff" />
          <PolarAngleAxis dataKey="subject" stroke="#ffffff" tickLine={false} fontSize={12} />
          <Radar name="Mike" dataKey="A" stroke="#ff0000" fill="#ff0000" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarGraph;
