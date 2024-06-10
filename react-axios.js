import React, { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import Select from "react-dropdown-select";
import RegionChart from "../Components/RegionChart";
import Cards from "../Components/Cards";
import TopVisitors from "../Components/TopVisitors";
import LeastVisitors from "../Components/LeastVisitors";
import TopVisitedArea from "../Components/TopVisitedArea";
import TopComplaints from "../Components/TopComplaints";
import axios from "axios";

const Dashboard = () => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11)
  });

  const [dropdownValues, setDropdownValues] = useState({
    region: 'All',
    handler: 'All',
    team: 'All'
  });

  const [data, setData] = useState(null);
  const [topVisitors, setTopVisitors] = useState(null);
  const [leastVisitors, setLeastVisitors] = useState(null);
  const [topComplaints, setTopComplaints] = useState(null);
  const [topVisitedAreas, setTopVisitedArea] = useState(null);
  const user = localStorage.getItem('email');
  const [handlerOption , setHandlerOption] = useState([]);
  const [selectedHandler, setSelectedHandler] = useState('All');

  // API call for handlers
  const getHandlers = async () => {
    try {
      const response = await axios.post(`http://portal.mashitec.com/SalesWebApi/api/GetHandler/?user=${user}&region=ALL`);
      const options = response.data.map(handler => ({ value: handler, label: handler }));
      setHandlerOption(options);
    } catch (error) {
      console.error("Error fetching handlers:", error);
    }
  };

  useEffect(() => {
    getHandlers();
  }, []);

  // Data calling for pie chart and cards
  const getChartData = async () => {
    const { startDate, endDate } = dateRange;
    const { region, handler, team } = dropdownValues;
    try {
      const response = await axios.post(
        `http://portal.mashitec.com/SalesWebApi/api/GetChartData/?from=${startDate}&to=${endDate}&region=${region}&subreg=${handler}&user=${user}&team=${team}`
      );
      console.log("Response from API:", response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  // Data calling for top 10 visitors
  const getTopVisitors = async () => {
    const { startDate, endDate } = dateRange;
    const { region, handler, team } = dropdownValues;
    try {
      const response = await axios.post(
        `http://portal.mashitec.com/SalesWebApi/api/Gettopvisits/?from=${startDate}&to=${endDate}&region=${region}&subreg=${handler}&user=${user}&team=${team}`
      );
      console.log("Response from API:", response.data);
      setTopVisitors(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  // Least visitors
  const getLeastVisitors = async () => {
    const { startDate, endDate } = dateRange;
    const { region, handler, team } = dropdownValues;
    try {
      const response = await axios.post(
        ` http://portal.mashitec.com/SalesWebApi/api/Getleastvisits/?from=${startDate}&to=${endDate}&region=${region}&subreg=${handler}&user=${user}&team=${team}`
      );
      console.log("Response from API:", response.data);
      setLeastVisitors(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  // Top visited areas
  const getTopAreas = async () => {
    const { startDate, endDate } = dateRange;
    const { region, handler, team } = dropdownValues;
    try {
      const response = await axios.post(
        `http://portal.mashitec.com/SalesWebApi/api/Gettoparea/?from=${startDate}&to=${endDate}&region=${region}&handler=${handler}&user=${user}&team=${team}`
      );
      console.log("Response from API:", response.data);
      setTopVisitedArea(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  // Top complaints
  const getTopComplaints = async () => {
    const { startDate, endDate } = dateRange;
    const { region, handler, team } = dropdownValues;
    try {
      const response = await axios.post(
        `http://portal.mashitec.com/SalesWebApi/api/GetComplaints/?from=${startDate}&to=${endDate}&region=${region}&handler=${handler}&user=${user}&team=${team}`
      );
      console.log("Response from API:", response.data);
      setTopComplaints(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const handleValueChange = newValue => {
    console.log("newValue:", newValue);
    setDateRange(newValue);
  };

  const handleDropdownChange = (selectedOption, field) => {
    setDropdownValues(prevState => ({
      ...prevState,
      [field]: selectedOption[0].value
    }));
  };

  const fetchData = async () => {
    await getChartData();
    await getTopVisitors();
    await getLeastVisitors();
    await getTopAreas();
    await getTopComplaints();
  };

  return (
    <>
      <div className="text-center h-16 bg-blue-900 border-b-4 border-red-800">
        <h1 className="font-thin text-lg text-gray-50 py-5 tracking-widest">SALES VISITS DASHBOARD</h1>
      </div>

      <div className="h-auto flex flex-wrap items-center justify-center p-5 bg-gray-100 w-auto">
        <div className="w-auto sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-2">
          <p className="mb-1 text-center">Date Select:</p>
          <div className="border-2 border-gray-400 w-full">
            <Datepicker
              value={dateRange}
              onChange={handleValueChange}
              primaryColor={"red"}
              showShortcuts={true}
              placeholder={"DD-MM-YY to DD-MM-YY"}
            />
          </div>
        </div>

        <div className="w-auto sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-2">
          <p className="mb-1 text-center">Region:</p>
          <Select
            options={[
              { value: 'All', label: 'All' },
              { value: 'Baluchistan', label: 'Baluchistan' },
              { value: 'Central', label: 'Central' },
              { value: 'North', label: 'North' },
              { value: 'South', label: 'South' }
            ]}
            onChange={(value) => handleDropdownChange(value, 'region')}
            className="w-full text-sm border-2 border-gray-400 rounded-md"
          />
        </div>

        <div className="w-auto sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-2">
          <p className="mb-1 text-center">Handler:</p>
          <Select
            options={handlerOption}
            onChange={(value) => handleDropdownChange(value, 'handler')}
            value={handlerOption.find(option => option.value === selectedHandler)}
            className="w-full h-auto text-sm border-2 border-gray-400 rounded-md"
          />
        </div>

        <div className="w-auto sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-2">
          <p className="mb-1 text-center">Team:</p>
          <Select
            options={[
              { value: 'All', label: 'All' },
              { value: 'ASM', label: 'ASM' },
              { value: 'TSO', label: 'TSO' },
            ]}
            onChange={(value) => handleDropdownChange(value, 'team')}
            className="w-full text-sm border-2 border-gray-400 rounded-md"
          />
        </div>
        <div className="flex
