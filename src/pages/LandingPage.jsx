import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import StatsSection from "../components/StatsSection";
import Footer from "../components/Footer";
import { fetchStats } from "../api/api";

const LandingPage = () => {
  const [stats, setStats] = useState({
    totalSalesCodes: 0,
    totalOrders: 0,
    completedOrders: 0,
    pendingOrders: 0,
  });

  useEffect(() => {
    fetchStats().then(setStats).catch(console.error);
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <StatsSection stats={stats} />
      <Footer />
    </>
  );
};

export default LandingPage;
