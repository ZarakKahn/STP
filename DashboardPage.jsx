// PieChart.jsx
import React from 'react';

const PieChart = ({ data }) => {
  // Here you would use a chart library like Chart.js, Recharts, etc.
  // This is a placeholder for the actual chart implementation
  return (
    <div>
      <h2>Pie Chart</h2>
      {/* Map through data and render chart */}
      {data.map((item) => (
        <div key={item.$id}>
          <p>Region: {item.Region}</p>
          <p>Sale: {item.Sale}</p>
        </div>
      ))}
    </div>
  );
};

export default PieChart;
