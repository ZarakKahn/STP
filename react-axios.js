import React from 'react';

const VisitDetailReport = ({ isOpen, setIsOpen }) => {
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

                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle max-w-fit">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">

                            <div className="text-center h-16 bg-blue-900 border-b-4 border-red-800">
                                <h1 className="font-thin text-lg text-gray-50 py-5 tracking-widest">VISIT REPORT DETAIL</h1>
                            </div>
                            <div className="w-full border px-1 border-gray-400 mt-4"></div>

                            <div className="grid grid-cols-4 gap-4 mt-3">
                                <div className="card bg-blue-200 p-4 rounded-lg">
                                    <i className="icon">...</i>
                                    <p>SALES VOLUME</p>
                                </div>
                                <div className="card bg-green-200 p-4 rounded-lg">
                                    <i className="icon">...</i>
                                    <p>RECOVERY</p>
                                </div>
                                <div className="card bg-yellow-200 p-4 rounded-lg">
                                    <i className="icon">...</i>
                                    <p>NEW SHOP VISITS</p>
                                </div>
                                <div className="card bg-red-200 p-4 rounded-lg">
                                    <i className="icon">...</i>
                                    <p>EXISTING SHOP VISITS</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12 max-w-xl mx-auto overflow-x-auto">
                            <table className="mt-4 w-full min-w-max">
                                <thead className="bg-blue-500 text-white">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium">SHOP</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium">DISTRIBUTOR</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium">SE NAME</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium">SE NUMBER</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium">VISIT TYPE</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium">PURPOSE</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium">RECOVERY</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium">SALE VOLUME</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium">COMPLAINT</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium">REMARKS</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium">DATE</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium">LOCATION</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-4 py-3 whitespace-nowrap">Shop 1</td>
                                        <td className="px-4 py-3 whitespace-nowrap">Distributor 1</td>
                                        <td className="px-4 py-3 whitespace-nowrap">SE Name 1</td>
                                        <td className="px-4 py-3 whitespace-nowrap">SE Number 1</td>
                                        <td className="px-4 py-3 whitespace-nowrap">Visit Type 1</td>
                                        <td className="px-4 py-3 whitespace-nowrap">Purpose 1</td>
                                        <td className="px-4 py-3 whitespace-nowrap">Recovery 1</td>
                                        <td className="px-4 py-3 whitespace-nowrap">Sale Volume 1</td>
                                        <td className="px-4 py-3 whitespace-nowrap">Complaint 1</td>
                                        <td className="px-4 py-3 whitespace-nowrap">Remarks 1</td>
                                        <td className="px-4 py-3 whitespace-nowrap">Date 1</td>
                                        <td className="px-4 py-3 whitespace-nowrap">Location 1</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 whitespace-nowrap">Shop 2</td>
                                        <td className="px-4 py-3 whitespace-nowrap">Distributor 2</td>
                                        <td className="px-4 py-3 whitespace-nowrap">SE Name 2</td>
                                        <td className="px-4 py-3 whitespace-nowrap">SE Number 2</td>
                                        <td className="px-4 py-3 whitespace-nowrap">Visit Type 2</td>
                                        <td className="px-4 py-3 whitespace-nowrap">Purpose 2</td>
                                        <td className="px-4 py-3 whitespace-nowrap">Recovery 2</td>
                                        <td className="px-4 py-3 whitespace-nowrap">Sale Volume 2</td>
                                        <td className="px-4 py-3 whitespace-nowrap">Complaint 2</td>
                                        <td className="px-4 py-3 whitespace-nowrap">Remarks 2</td>
                                        <td className="px-4 py-3 whitespace-nowrap">Date 2</td>
                                        <td className="px-4 py-3 whitespace-nowrap">Location 2</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 whitespace-nowrap">Shop 2</td>
                                        <td className="px-4 py-3 whitespace-nowrap">Distributor 2</td>
                                        <td className="px-4 py-3 whitespace-nowrap">SE Name 2</td>
                                        <td className="px-4 py-3 whitespace-nowrap">SE Number 2</td>
                                        <td className="px-4 py-3 whitespace-nowrap">Visit Type 2</td>
                                        <td className="px-4 py-3 whitespace-nowrap">Purpose 2</td>
                                        <td className="px-4 py-3 whitespace-nowrap">Recovery 2</td>
                                        <td className="px-4 py-3 whitespace-nowrap">Sale Volume 2</td>
                                        <td className="px-4 py-3 whitespace-nowrap">Complaint 2</td>
                                        <td className="px-4 py-3 whitespace-nowrap">Remarks 2</td>
                                        <td className="px-4 py-3 whitespace-nowrap">Date 2</td>
                                        <td className="px-4 py-3 whitespace-nowrap">Location 2</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
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
            </div>

        </>
    )
}

export default VisitDetailReport

the table coulumns are not fitting they are at the middle of the div i want to fit it wrt the cards div
