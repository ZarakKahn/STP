import React, { useState } from 'react';
import logo from '../Images/logo.png';
import Logout from './Logout';
import UserName from './UserName';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    if (location.pathname === '/') {
        return null;
    }
    return (
        <>
            <header className="flex flex-col border-b border-gray-300 bg-gray-200 text-black px-6 py-4">
                <div className="flex-grow flex justify-between items-center">
                    <div className=" w-40 h-15">
                        <Link to="/Dashboard">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="relative flex justify-start mr-auto mb-2 sm:mb-0">
                        <h1 className="font-sans text-xl text-red-800 ml-16">SALES TRAVELING PORTAL</h1>
                    </div>
                    <nav className="relative">
                        <button
                            className="lg:hidden p-2"
                            onClick={() => document.getElementById('navbar-links').classList.toggle('hidden')}
                        >
                            <FiMenu />
                        </button>
                        <div id="navbar-links" className="hidden lg:flex flex-col lg:flex-row lg:space-x-3 lg:items-center">
                            <ul className="space-y-2 lg:space-y-0 lg:flex lg:space-x-3 object-right">
                                <li>
                                    <Link to="/dashboard" className="text-blue-900 text-xs font-sans">
                                        DASHBOARD
                                    </Link>
                                </li>
                                <div className="group relative">
                                    <button className="text-blue-900 text-xs font-sans">REPORTS</button>
                                    <div className="dropdown-menu absolute hidden group-hover:block bg-blue-900">
                                        <ul className="list-reset">
                                            <li>
                                                <Link
                                                    to="/topmarketsvisits"
                                                    className="block px-4 py-2 text-sm text-gray-50 hover:bg-blue-500"
                                                >
                                                    Top Market Visitors/Area
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/mvdetailedreports"
                                                    className="block px-4 py-2 text-sm text-gray-50 hover:bg-blue-500"
                                                >
                                                    MV Detailed Report
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/mvstatusreport"
                                                    className="block px-4 py-2 text-sm text-gray-50 hover:bg-blue-500"
                                                >
                                                    MV Status Report
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/mvweeklyreport"
                                                    className="block px-4 py-2 text-sm text-gray-50 hover:bg-blue-500"
                                                >
                                                    MVR APP Weekly Summary Report
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <li>
                                    <Link to="/visitplanner" className="text-blue-900 text-xs font-sans">
                                        VISIT PLANNER
                                    </Link>
                                </li>
                                <li>
                                    <Link to="locationview" className="text-blue-900 text-xs font-sans">
                                        LOCATION VIEW
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/hierarchy" className="text-blue-900 text-xs font-sans">
                                        HIERARCHY MANAGEMENT
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

            </header>
            <div className="flex justify-end space-x-1 mr-3 mb-1">
                <UserName />
                <Logout />
            </div>
        </>
    );
};

export default Navbar;
