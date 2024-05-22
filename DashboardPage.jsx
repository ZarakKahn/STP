import React from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
