import React, { useState, useEffect } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import Select from 'react-dropdown-select';
import UserName from '../Components/UserName';
import Logout from '../Components/Logout';
import axios from 'axios';

const LocationView = () => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth()
  });
  const user = localStorage.getItem('email');
  // Handlers API call 
  const [handlers, setHandlers] = useState([]);

  useEffect(() => {
    const fetchHandlers = async () => {
      try {
        const response = await axios.post(`http://portal.mashitec.com/SalesWebApi/api/GetHandler/?user=${user}&region=ALL`);
        const handlerOptions = response.data.map(handler => ({ value: handler, label: handler }));
        setHandlers(handlerOptions);
      } catch (error) {
        console.error('Error fetching handlers:', error);
      }
    };

    fetchHandlers();
  }, []);

  const [dropdownValues, setDropdownValues] = useState({
    region: 'All',
    handler: 'All',
    team: 'All'
  });

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
      <div className="flex justify-between h-14 bg-blue-900 border-b-4 border-red-800">
        <h1 style={{ letterSpacing: "0.5em" }} className="font-thin text-lg text-gray-50 py-5 mx-auto sm:text-sm md:text-md hidden sm:block">LOCATION VIEW</h1>
        <h1 style={{ letterSpacing: "0.5em" }} className="font-thin text-lg text-gray-50 py-5 mx-auto sm:hidden">LOCATION</h1>
        <div  className="flex space-x-1 mr-3 mb-1 xs:hidden sm:flex">
          <UserName />
          <Logout />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center p-1 bg-gray-100">
        <div className="w-full sm:w-1/2 md:w-60 m-2">
          <p className="mb-1 text-center">Date Select:</p>
          <div className="border-2 border-gray-400 w-full">
            <Datepicker
              value={dateRange}
              onChange={handleValueChange}
              primaryColor={"red"}
              showShortcuts={true}
              placeholder={"DD-MM-YY to DD-MM-YY"}
              theme={"light"}
            />
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-60 m-2">
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
            className="w-full text-xs p-2 border-2 border-gray-400 rounded-md"
          />
        </div>

        <div className="w-full sm:w-1/2 md:w-60 m-2">
          <p className="mb-1 text-center">Handler:</p>
          <Select
           options={[{ value: 'All', label: 'All' }, ...handlers]}
           onChange={(value) => handleDropdownChange(value)}
            className="w-full text-xs p-2 border-2 border-gray-400 rounded-md"
          />
        </div>

        <div className="w-full sm:w-1/2 md:w-60 m-2">
          <p className="mb-1 text-center">Team:</p>
          <Select
            options={[
              { value: '', label: 'None' },
              { value: 'All', label: 'All' },
              { value: 'ASM', label: 'ASM' },
              { value: 'TSO', label: 'TSO' },
            ]}
            onChange={(value) => handleDropdownChange(value, 'team')}
            className="w-full text-xs p-2 border-2 border-gray-400 rounded-md"
          />
        </div>
        <div className="flex">
          <button
            className="sm:mt-2 md:mt-6 md:ml-3 w-fit h-10 flex justify-center items-center px-4 py-2 bg-red-700 text-white hover:bg-red-800"
          >
            Search
          </button>
        </div>
        <div className="w-full border px-1 border-gray-400 mt-1"></div>
      </div>
    </>
  )
}

export default LocationView
