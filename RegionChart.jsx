import React, { useEffect, useState } from 'react';
import sale from '../Images/sale.png';
import recovery from '../Images/recovery.png';
import new1 from '../Images/new1.png';
import existing from '../Images/existing.png';
import axios from 'axios';

const DetailedReport =  ({ isOpen, setIsOpen, startDate, endDate, visitor }) => {
    const user = localStorage.getItem('email');
    const [det, setDet] = useState([]);
    const [count, setCount] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const filteredData = det && Array.isArray(det) ? det.filter(visitor =>
        visitor.Cust_Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        visitor.Purpose.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];

    // table data
    useEffect(() => {
        const fetchDetails = async () => {
            const response = await axios.post(`http://portal.mashitec.com/SalesWebApi/api/Getdetails/?from=${startDate}&to=${endDate}&visitor=${visitor}&user=${user}`);
            setDet(response.data);
        };
        fetchDetails();
    }, [startDate, endDate, visitor]);

    // total counts 
    useEffect(() => {
        const fetchDetail = async () => {
            const response = await axios.post(`http://portal.mashitec.com/SalesWebApi/api/Getcount/?from=${startDate}&to=${endDate}&visitor=${visitor}&user=${user}`);
            setCount(response.data);
        };
        fetchDetail();
    }, [startDate, endDate, visitor]);

    function openLocation(lat, long) {
        window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${long}`, "_blank");
    }

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
                                    <p className="font-lucida text-sm text-center  pt-4 ">SALES VOLUME</p>
                                    {count.map((visitor, index) => (
                                        <p key={index} className="font-tahoma text-center text-lg pt-2">{visitor.SalesVolume}</p>
                                    ))}
                                </div>
                                <div className="card bg-green-200 p-4 rounded-lg flex flex-col items-center">
                                    <img src={recovery} alt="recovery" className="h-16 w-16" />
                                    <p className="font-lucida text-sm text-center  pt-4 ">RECOVERY</p>
                                    {count.map((visitor, index) => (
                                        <p key={index} className="font-tahoma text-center text-lg pt-2">{visitor.Recovery}</p>
                                    ))}
                                </div>
                                <div className="card bg-yellow-200 p-4 rounded-lg flex flex-col items-center">
                                    <img src={new1} alt="new1" className="h-16 w-16" />
                                    <p className="font-lucida text-sm text-center  pt-4 ">NEW SHOP VISITS</p>
                                    {count.map((visitor, index) => (
                                        <p key={index} className="font-tahoma text-center text-lg pt-2">{visitor.Existing}</p>
                                    ))}
                                </div>
                                <div className="card bg-red-200 p-4 rounded-lg flex flex-col items-center">
                                    <img src={existing} alt="existing" className="h-16 w-16" />
                                    <p className="font-lucida text-sm text-center pt-4 ">EXISTING SHOP VISITS</p>
                                    {count.map((visitor, index) => (
                                        <p key={index} className="font-tahoma text-center text-lg pt-2">{visitor.New}</p>
                                    ))}
                                </div>
                            </div>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                                className="w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline text-sm border-2 border-gray-500 shadow-sm mt-2"
                            />
                            <div className="overflow-x-auto mt-4 h-96">
                                <table className="w-full">
                                    <thead className="bg-blue-700 text-white">
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
                                        {filteredData.map((visitor, index) => (
                                            <tr key={index} className="odd:bg-gray-200 even:bg-white">
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
                                                <td className="px-2 py-2 text-xs">
                                                    <button onClick={() => openLocation(visitor.Location.split(",")[0], visitor.Location.split(",")[1])}
                                                        className="w-20 h-8 px-3 mr-1 mt-2 bg-blue-700 text-white hover:bg-blue-800">
                                                        Location </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="w-20 h-10 px-3 mt-2 bg-red-700 text-white hover:bg-red-800 rounded-sm justify-center">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div >

        </>
    );
};

export default DetailedReport;

i am getting this error in the console
count.map is not a function
