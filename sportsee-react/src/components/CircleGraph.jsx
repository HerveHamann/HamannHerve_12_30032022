import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const CircleGraph = () => {
  const data = [
    {
      uv: 100,
      display: "none",
    },
    {
      uv: 12,
      fill: "#ff0000",
    },
  ];

  return (
    <div className="circle-graph">
      <p>Score</p>

      <div className="circlebackground">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart barSize={10} data={data} startAngle={210} endAngle={-150} innerRadius="0%" outerRadius="202%">
            <RadialBar
              minAngle={15}
              background={{ fill: "#fbfbfb" }}
              clockWise
              dataKey="uv"
              // cornerRadius={"50%"}
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="legend">
          <div className="scorevalue">12%</div>
          <div className="scoretext">
            de votre <br /> objectif
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleGraph;
