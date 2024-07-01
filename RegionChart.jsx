import React, { useState, useEffect } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import Select from 'react-dropdown-select';
import axios from 'axios';
import VisitDetailReport from '../Components/VisitDetailReport';
import UserName from '../Components/UserName';
import Logout from '../Components/Logout';

const TopMarketsVisits = () => {

  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth()
  });

  const [topVisitors, setTopVisitors] = useState([]);
  const [topVisitedAreas, setTopVisitedArea] = useState([]);
  const [leastVisitedAreas, setleastVisitedArea] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const user = localStorage.getItem('email');
  // handlers call
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
  // top visitors
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

  useEffect(() => {
    getTopVisitors();
  }, [dateRange, dropdownValues]);

  const fetchData = async () => {
    await Promise.all([getTopVisitors()]);
  };
  return (
    <>
      <div className="flex justify-between h-16 bg-blue-900 border-b-4 border-red-800">
        <h1 style={{ letterSpacing: "0.5em" }} className="font-thin text-lg text-gray-50 py-5 mx-auto">TOP MARKET VISITS/AREA</h1>
        <div className="flex space-x-1 mr-3 mb-1">
          <UserName />
          <Logout />
        </div>
      </div>
      {/* selection lists */}
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
            className="w-full text-sm p-2 border-2 border-gray-400 rounded-md"
          />
        </div>

        <div className="w-auto sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-2">
          <p className="mb-1 text-center">Handler:</p>
          <Select
            options={[{ value: 'All', label: 'All' }, ...handlers]}
            onChange={(value) => handleDropdownChange(value)}
            className="w-full text-sm p-2 border-2 border-gray-400 rounded-md"
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
            className="w-full text-sm p-2 border-2 border-gray-400 rounded-md"
          />
        </div>
        <div className="flex">
          <button
            onClick={fetchData}
            className="mt-5 ml-3 w-fit h-10 flex justify-center items-center px-4 py-2 bg-red-700 text-white hover:bg-red-800"
          >
            Search
          </button>
        </div>
        <div className="w-full border px-1 border-gray-400 mt-4"></div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-8">
          {/* top visiters */}
          {topVisitors.length > 0 && <div className="w-full mt-1 shadow-lg rounded-lg">
            <h1 className="text-center font-sans bg-teal-800 text-white p-3">TOP VISITORS</h1>
            <table className="w-full rounded-lg">
              <thead className="bg-teal-800 border-b-2 text-white">
                <tr>
                  <th className="text-sm p-2 font-light">VISITOR NAME</th>
                  <th className="text-sm p-2 font-light">VISITS</th>
                  <th className="text-sm p-2 font-light"></th>
                </tr>
              </thead>
              <tbody>
                {topVisitors.map((visitor, index) => (
                  <tr key={index} className="odd:bg-gray-200 even:bg-white">
                    <td className="p-3 text-sm text-gray-700">{visitor.Visitor_Name}</td>
                    <td className="p-3 text-sm text-gray-700">{visitor.Total}</td>
                    <button className="w-20 h-6 px-3 mt-2 bg-red-700 text-white hover:bg-red-800 rounded-sm"
                      onClick={() => setIsOpen(true)}>
                      Details</button>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <VisitDetailReport isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default TopMarketsVisits;
        
i am calling an api in the above code to which i am applying dates ranges to and from. and the below code has also to and from dates in the api. now i am passing dynamic dates to the above api and i want to give the same date ranges that is given to the above api in the below to and from dates remem ber both thes are two different components
        
import React, { useEffect, useState } from 'react';
import sale from '../Images/sale.png';
import recovery from '../Images/recovery.png';
import new1 from '../Images/new1.png';
import existing from '../Images/existing.png';
import axios from 'axios';


const VisitDetailReport = ({ isOpen, setIsOpen }) => {
    const user = localStorage.getItem('email');
    const [det, setDet] = useState([]);

    useEffect(() => {
        const fetchDetails = async () => {
            const response = await axios.post(`http://portal.mashitec.com/SalesWebApi/api/Getdetails/?from=06/01/2024&to=06/29/2024&visitor=kafait&user=${user}`);
            setDet(response.data);
        };
        fetchDetails();
    }, [])
    if (!isOpen) {
        return null;
    }
    return (
        <>
            <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>

                    <div className="inline-block align-bottom bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-5xl w-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">

                            <div className="text-center h-16 bg-blue-900 border-b-4 border-red-800">
                                <h1 style={{ letterSpacing: "0.5em" }} className="font-thin text-lg text-gray-50 py-5 mx-auto">VISIT REPORT DETAIL</h1>
                            </div>
                            <div className="w-full border px-1 border-gray-400 mt-4"></div>

                            <div className="grid grid-cols-4 gap-4 mt-3">
                                <div className="card bg-blue-200 p-4 rounded-lg flex flex-col items-center">
                                    <img src={sale} alt="sale" className="h-16 w-16 " />
                                    <p className="font-sans text-sm text-center  pt-4 ">SALES VOLUME</p>
                                    <p className="font-semibold text-center text-sm  pt-4 ">Value</p>
                                </div>
                                <div className="card bg-green-200 p-4 rounded-lg flex flex-col items-center">
                                    <img src={recovery} alt="recovery" className="h-16 w-16" />
                                    <p className="font-sans text-sm text-center  pt-4 ">RECOVERY</p>
                                    <p className="font-semibold text-center text-sm  pt-4 ">Value</p>
                                </div>
                                <div className="card bg-yellow-200 p-4 rounded-lg flex flex-col items-center">
                                    <img src={new1} alt="new1" className="h-16 w-16" />
                                    <p className="font-sans text-sm text-center  pt-4 ">NEW SHOP VISITS</p>
                                    <p className="font-semibold text-center text-sm  pt-4 ">Value</p>
                                </div>
                                <div className="card bg-red-200 p-4 rounded-lg flex flex-col items-center">
                                    <img src={existing} alt="existing" className="h-16 w-16" />
                                    <p className="font-sans text-sm text-center pt-4 ">EXISTING SHOP VISITS</p>
                                    <p className="font-semibold text-center text-sm  pt-4 ">Value</p>
                                </div>
                            </div>

                            <div className="overflow-x-auto mt-4 h-96">
                                <table className="w-full">
                                    <thead className="bg-blue-500 text-white">
                                        <tr>
                                            <th className="px-6 py-3 text-xs font-medium">SHOP</th>
                                            <th className="px-6 py-3 text-xs font-medium">DISTRIBUTOR</th>
                                            <th className="px-6 py-3 text-xs font-medium">SE NAME</th>
                                            <th className="px-6 py-3 text-xs font-medium">SE NUMBER</th>
                                            <th className="px-6 py-3 text-xs font-medium">VISIT TYPE</th>
                                            <th className="px-6 py-3 text-xs font-medium">PURPOSE</th>
                                            <th className="px-6 py-3 text-xs font-medium">RECOVERY</th>
                                            <th className="px-6 py-3 text-xs font-medium">SALE VOLUME</th>
                                            <th className="px-6 py-3 text-xs font-medium">COMPLAINT</th>
                                            <th className="px-6 py-3 text-xs font-medium">REMARKS</th>
                                            <th className="px-6 py-3 text-xs font-medium">DATE</th>
                                            <th className="px-6 py-3 text-xs font-medium">LOCATION</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                    {det.map((visitor, index) => (
                                        <tr key={index}>                                   
                                        <td className="px-2 py-2 text-xs">{visitor.Cust_Name}</td>
                                        <td className="px-2 py-2 text-xs">{visitor.Distributor}</td>
                                        <td className="px-2 py-2 text-xs">{visitor.Visitor_Name}</td>
                                        <td className="px-2 py-2 text-xs">{visitor.Visitor_Num}</td>
                                        <td className="px-2 py-2 text-xs">{visitor.VisitType}</td>
                                        <td className="px-2 py-2 text-xs">{visitor.Purpose}</td>
                                        <td className="px-2 py-2 text-xs">{visitor.Recovery}</td>
                                        <td className="px-2 py-2 text-xs">{visitor.SalesVolume}</td>
                                        <td className="px-2 py-2 text-xs">{visitor.Complaint}</td>
                                        <td className="px-2 py-2 text-xs">{visitor.Remarks}</td>
                                        <td className="px-2 py-2 text-xs">{visitor.VisitDatetime}</td>
                                        <td className="px-2 py-2 text-xs">{visitor.Location}</td>
                                    </tr>
                                ))}
                                    </tbody>
                                </table>
                            </div>

                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="w-20 h-6 px-3 mt-2 bg-red-700 text-white hover:bg-red-800 rounded-sm justify-center">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default VisitDetailReport;
