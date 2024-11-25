import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await fetch("http://localhost:5001/metrics");
        const data = await response.json();
        setMetrics(data);
      } catch (err) {
        console.error("Error fetching metrics:", err);
      }
    };

    fetchMetrics();
  }, []);

  return (
    <div className="container text-center">
      <h1>Dashboard</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Action</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {metrics.map((metric, index) => (
            <tr key={index}>
              <td>{metric.action}</td>
              <td>{metric.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
