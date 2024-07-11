import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import LoginForm from "./Components/LoginForm";
import Footer from "./Components/Footer";
import Dashboard from "./Pages/Dashboard";
import HierarchyManage from "./Pages/HierarchyManage";
import TopMarketsVisits from "./Pages/TopMarketsVisits";
import MvDetailedReport from "./Pages/MvDetailedReport";
import MvStatusReport from "./Pages/MvStatusReport";
import MvWeeklyReport from "./Pages/MvWeeklyReport";
import LocationView from "./Pages/LocationView";
import VisitPlanner from "./Pages/VisitPlanner";
import DistributorView from "./Pages/DistributorView";

const Main = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route index element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/hierarchymanage" element={<HierarchyManage />} />
          <Route path="/topmarketsvisits" element={<TopMarketsVisits />} />
          <Route path="/mvdetailedreports" element={<MvDetailedReport />} />
          <Route path="/mvstatusreports" element={<MvStatusReport />} />
          <Route path="/mvweeklyreports" element={<MvWeeklyReport />} />
          <Route path="/distributorview" element={<DistributorView />} />
          <Route path="/visitplanner" element={<VisitPlanner />} />
          <Route path="/locationview" element={<LocationView />} />
        </Routes>
      </div>
      {location.pathname !== '/' && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Main />
      </div>
    </Router>
  );
};

export default App;
import React from 'react';

const Footer = () => {
  return (
    <div className="w-full">
      <div className="h-9 bg-gradient-to-br from-blue-900 to-blue-500"></div>
      <div className="h-16 bg-gradient-to-br from-red-900 to-red-500"></div>
      <div className="h-9 bg-gradient-to-br from-gray-800 to-gray-500">
        <p className="text-gray-50 text-xs font-verdana ml-20 pt-2">
          © Hi-Tech Lubricants: All rights reserved. | Designed By: Business Intelligence Team
        </p>
      </div>
    </div>
  );
};

export default Footer;
