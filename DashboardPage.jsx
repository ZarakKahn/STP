// dashboard

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

  const handleValueChange = newValue => {
    console.log("newValue:", newValue);
    setDateRange(newValue);
  };

  const handleDropdownChange = (value, field) => {
    setDropdownValues(prevState => ({
      ...prevState,
      [field]: value[0].value
    }));
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
            className="w-full p-2 border-2 border-gray-400 rounded-md"
          />
        </div>

        <div className="w-auto sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-2">
          <p className="mb-1 text-center">Handler:</p>
          <Select
            options={[
              { value: 'All', label: 'All' },
              { value: 'Al-Ghani', label: 'Al-Ghani' },
              { value: 'Al-Hassan', label: 'Al-Hassan' },
              { value: 'Trade n Move', label: 'Trade n Move' },
              { value: 'Horizon Associates', label: 'Horizon Associates' }
            ]}
            onChange={(value) => handleDropdownChange(value, 'handler')}
            className="w-full p-2 border-2 border-gray-400 rounded-md"
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
            className="w-full p-2 border-2 border-gray-400 rounded-md"
          />
        </div>
        <div className="flex">
          <button
            className="mt-5 ml-3 w-fit h-10 flex justify-center items-center px-4 py-2 bg-red-700 text-white hover:bg-red-800"
            onClick={fetchData}
          >
            Search
          </button>
        </div>
        <div className="w-full border px-1 border-gray-400 mt-4"></div>
      </div>
      
      {/* dashboard elements */}
      <div className="justify-center items-center">
        <div className="flex justify-between items-center">
          <div className="border border-neutral-300 w-96 h-56 ml-24">
            {data ? <RegionChart data={data} /> : <p>no data</p>}
          </div>
          <div className="mr-28">
            <Cards data={data} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="border border-neutral-300 w-96 h-56 mt-20 ml-28">
            <TopVisitors data={data} />
          </div>
          <div className="border border-neutral-300 w-96 h-64 mt-20 mr-28">
            <TopVisitedArea data={data} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="border border-neutral-300 w-96 h-56 mt-20 ml-28">
            <TopComplaints data={data} />
          </div>
          <div className="border border-neutral-300 w-96 h-56 mt-20 mr-28">
            <LeastVisitors data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

// regionchart
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RegionChart = ({ data }) => {
  console.log("Data in RegionChart:", data); // Add this line
  const processedData = data.map(item => ({
    name: item.Region,
    value: item.Sale
  }));

  return (
    
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
  );
};

export default RegionChart;

// cards

import React from 'react'


const Cards = () => {
    return (
        <>
            <div className="grid grid-cols-5 gap-1 border border-gray-800">
                <div className="m-2 border border-black text-center h-12 w-auto bg-red-300">Total Visits</div>
                <div className="m-2 border border-black text-center h-12 w-auto bg-pink-300">Central</div>
                <div className="m-2 border border-black text-center h-12 w-auto bg-green-300">North</div>
                <div className="m-2 border border-black text-center h-12 w-auto bg-orange-300">South</div>
                <div className="m-2 border border-black text-center h-12 w-auto bg-blue-300">Baluchistan</div>
            </div>
            <div className="grid grid-cols-4 gap-1 border border-gray-800">
                <div className="m-2 border border-black text-center h-12 w-auto bg-green-300">Total Recovery</div>
                <div className="m-2 border border-black text-center h-12 w-auto bg-blue-300">Total Sales</div>
                <div className="m-2 border border-black text-center h-12 w-auto bg-green-300">Existing Shops</div>
                <div className="m-2 border border-black text-center h-12 w-auto bg-blue-300">New Shops</div>
            </div>
        </>

    );
};
export default Cards;
