import React from "react";
import SpaceBetween from "@cloudscape-design/components/space-between";
import OrdersTable from "./components/OrdersTable";
import Overview from "./components/Overview";

const Dashboard = () => {
  return (
    <SpaceBetween direction="vertical" size="l">
      <Overview />
      <OrdersTable />
    </SpaceBetween>
  );
};

export default Dashboard;
