import React from 'react';
import DashboardCards from './DashboardCards';


const Dashboard: React.FC = () => (
  <div>
  <h2 className="dashboard-title">Dashboard</h2>
  <hr className="dashboard-separator" />
  <DashboardCards />
  </div>
);

export default Dashboard;
