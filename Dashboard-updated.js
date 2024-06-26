import React, { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import Select from "react-dropdown-select";
import RegionChart from "../Components/RegionChart";
import Cards from "../Components/Cards";
import TopVisitors from "../Components/TopVisitors";
import LeastVisitors from "../Components/LeastVisitors";
import TopVisitedArea from "../Components/TopVisitedArea";
import TopComplaints from "../Components/TopComplaints";

const Dashboard = ({ username }) => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11)
  });
  const [region, setRegion] = useState('All');
  const [handler, setHandler] = useState('All');
  const [team, setTeam] = useState('All');

  const options = [
    { value: 'All', label: 'All' },
    { value: 'Baluchistan', label: 'Baluchistan' },
    { value: 'Central', label: 'Central' },
    { value: 'North', label: 'North' },
    { value: 'South', label: 'South' }
  ];

  const handlers = [
    { value: 'All', label: 'All' },
    { value: 'Al-Ghani', label: 'Al-Ghani' },
    { value: 'Al-Hassan', label: 'Al-Hassan' },
    { value: 'Trade n Move', label: 'Trade n Move' },
    { value: 'Horizon Associates', label: 'Horizon Associates' }
  ];

  const teams = [
    { value: 'All', label: 'All' },
    { value: 'ASM', label: 'ASM' },
    { value: 'TSO', label: 'TSO' },
  ];

  const handleValueChange = newValue => {
    setValue(newValue);
  };

  const handleSearch = async () => {
    const from = value.startDate.toLocaleDateString('en-US');
    const to = value.endDate.toLocaleDateString('en-US');

    const response = await fetch('http://portal.mashitec.com/SalesWebApi/api/GetChartData/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        region,
        subreg: handler,
        user: username,
        team
      })
    });

    const data = await response.json();
    console.log(data);
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
              value={value}
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
            options={options}
            className="w-full p-2 border-2 border-gray-400 rounded-md"
            onChange={(values) => setRegion(values[0].value)}
          />
        </div>

        <div className="w-auto sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-2">
          <p className="mb-1 text-center">Handler:</p>
          <Select
            options={handlers}
            className="w-full p-2 border-2 border-gray-400 rounded-md"
            onChange={(values) => setHandler(values[0].value)}
          />
        </div>

        <div className="w-auto sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-2">
          <p className="mb-1 text-center">Team:</p>
          <Select
            options={teams}
            className="w-full p-2 border-2 border-gray-400 rounded-md"
            onChange={(values) => setTeam(values[0].value)}
          />
        </div>
        <div className="flex">
          <button
            className="mt-5 ml-3 w-fit h-10 flex justify-center items-center
              px-4 py-2 bg-red-700 text-white hover:bg-red-800"
            onClick={handleSearch}
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
            <RegionChart />
          </div>
          <div className="mr-28">
            <Cards />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="border border-neutral-300 w-96 h-56 mt-20 ml-28">
            <TopVisitors />
          </div>
          <div className="border border-neutral-300 w-96 h-64 mt-20 mr-28">
            <TopVisitedArea />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="border border-neutral-300 w-96 h-56 mt-20 ml-28">
            <TopComplaints />
          </div>
          <div className="border border-neutral-300 w-96 h-56 mt-20 mr-28">
            <LeastVisitors />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
