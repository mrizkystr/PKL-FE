// src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { fetchDashboardData } from '../api/dashboardApi';
import DashboardCard from '../components/DashboardCard';  // Komponen kartu informasi

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDashboardData();
        setDashboardData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="dashboard-cards">
        <DashboardCard title="Total Sales Codes" value={dashboardData.totalSalesCodes} />
        <DashboardCard title="Total Orders" value={dashboardData.totalOrders} />
        <DashboardCard title="Completed Orders" value={dashboardData.completedOrders} />
        <DashboardCard title="Pending Orders" value={dashboardData.pendingOrders} />
      </div>
      {/* Display additional data */}
      <div>
        <h2>Recent Sales Codes</h2>
        {/* Display recent sales codes here */}
      </div>
    </div>
  );
};

export default Dashboard;
