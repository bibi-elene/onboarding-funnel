import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useNavigate } from "react-router-dom";
import ReturnButton from "../components/ReturnButton";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [metrics, setMetrics] = useState({
    visited: 0,
    started: 0,
    completed: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await fetch("http://localhost:5001/metrics");
        const data = await response.json();

        // Transform the data into an object for easier chart integration
        const metricsObj = data.reduce(
          (acc, item) => {
            acc[item.action] = item.count;
            return acc;
          },
          { visited: 0, started: 0, completed: 0 }
        );

        setMetrics(metricsObj);
      } catch (err) {
        console.error("Error fetching metrics:", err);
      }
    };

    fetchMetrics();
  }, []);

  // Chart.js data
  const data = {
    labels: ["Visited", "Started", "Completed"], // X-axis labels
    datasets: [
      {
        label: "User Actions",
        data: [metrics.visited, metrics.started, metrics.completed], // Y-axis data
        backgroundColor: ["#4CAF50", "#2196F3", "#FFC107"], // Colors for each bar
        borderColor: ["#388E3C", "#1976D2", "#FFA000"],
        borderWidth: 1,
      },
    ],
  };

  // Chart.js options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "User Engagement Metrics",
      },
    },
  };

  return (
    <div className="container mt-5">
      <ReturnButton />
      <h1 className="text-center mb-4">Dashboard</h1>
      <div className="chart-container" style={{ width: "80%", margin: "0 auto" }}>
        <Bar data={data} options={options} />
      </div>
      <div className="text-center mt-4">
        <p style={{ fontSize: "1.2rem", fontWeight: "500" }}>
          Total Users Completed Onboarding: <span style={{ color: "#4CAF50" }}>{metrics.completed}</span>
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
