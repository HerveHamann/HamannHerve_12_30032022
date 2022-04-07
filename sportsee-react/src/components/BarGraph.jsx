import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  {
    day: "2020-07-01",
    kilogram: 80,
    calories: 240,
  },
  {
    day: "2020-07-02",
    kilogram: 80,
    calories: 220,
  },
  {
    day: "2020-07-03",
    kilogram: 81,
    calories: 280,
  },
  {
    day: "2020-07-04",
    kilogram: 81,
    calories: 290,
  },
  {
    day: "2020-07-05",
    kilogram: 80,
    calories: 160,
  },
  {
    day: "2020-07-06",
    kilogram: 78,
    calories: 162,
  },
  {
    day: "2020-07-07",
    kilogram: 76,
    calories: 390,
  },
];

const formatDay = (item) => new Date(item).getDate();
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <span className="label">{` ${payload[0].value}kg `}</span>
        <span className="label">{` ${payload[1].value}Kcal `}</span>
      </div>
    );
  }
  return null;
};
const BarGraph = () => {
  return (
    <div className="bar-graph">
      <p>Activité quotidienne</p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 24, bottom: 23, left: 32, right: 0 }} barGap={8}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="day" tickLine={false} tickFormatter={formatDay} tickMargin={16} />
          <YAxis
            yAxisId="kilogram"
            domain={["dataMin-1", "dataMax+2"]}
            tickCount={3}
            orientation="right"
            axisLine={false}
            tickLine={false}
            tickMargin={5}
          />
          <YAxis
            yAxisId="calories"
            orientation="right"
            axisLine={false}
            tickLine={false}
            hide
            domain={["dataMin-100", "dataMax+100"]}
            tickCount={3}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "#C4C4C4", width: 56, transform: "translate(28)" }} />

          <Legend
            verticalAlign="top"
            align="right"
            iconType={"circle"}
            iconSize={8}
            formatter={(value) =>
              value === "kilogram" ? (
                <span className="LegendWeight">Poids (kg)</span>
              ) : (
                <span className="LegendCalory"> Calories brûlées (kCal)</span>
              )
            }
            height={100}
          />
          <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282d30" barSize={7} radius={[5, 5, 0, 0]} />
          <Bar yAxisId="calories" dataKey="calories" fill=" #e60000" barSize={7} radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarGraph;