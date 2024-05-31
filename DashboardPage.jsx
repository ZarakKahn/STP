const RegionChart = ({ data }) => {
  console.log("Data in RegionChart:", data); // Add this line
  const processedData = data.map(item => ({
    name: item.Region,
    value: item.Sale
  }));

  // Rest of your component code...
};
