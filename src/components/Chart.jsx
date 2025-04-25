import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";
import { schemeCategory10 } from "d3-scale-chromatic";

const Chart = ({ displayBox = [] }) => {
  const colors = schemeCategory10;

  const data = displayBox.map((item) => ({
    name: item.name,
    uv: item.fee ?? 0
  }));

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}
      C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
      ${x + width / 2},${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height}
      ${x + width},${y + height}Z`;
  };

  const TriangleBar = ({ fill, x, y, width, height }) => {
    // Only render if all values are valid numbers
    if (
      typeof x !== "number" ||
      typeof y !== "number" ||
      typeof width !== "number" ||
      typeof height !== "number"
    ) {
      console.warn("Invalid TriangleBar props:", { x, y, width, height });
      return null;
    }

    return <path d={getPath(x, y, width, height)} fill={fill || "#8884d8"} stroke="none" />;
  };

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="uv"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;