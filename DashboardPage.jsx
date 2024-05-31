const fetchData = async () => {
  const { startDate, endDate } = dateRange;
  const { region, handler, team } = dropdownValues;
  try {
    const response = await axios.post(
      `http://portal.mashitec.com/SalesWebApi/api/GetChartData/?from=${startDate}&to=${endDate}&region=${region}&subreg=ALL&user=${handler}&team=${team}`
    );
    console.log("Response from API:", response.data); // Log API response
    setData(response.data);
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
};
