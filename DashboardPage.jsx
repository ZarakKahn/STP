import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA336A', '#334488'];

const CustomPieChart = ({ data }) => {
  const processedData = data.map(item => ({
    name: item.Region,
    value: item.Sale
  }));

  return (
    <div style={{ width: '100%', height: 300 }}>
      <h2 className="text-center text-lg font-medium my-4">Sales by Region</h2>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={processedData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {processedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;
