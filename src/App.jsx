import React from "react";
import { Route, Routes } from "react-router-dom";
import NorthStarThemeProvider from "@aws-northstar/ui/components/NorthStarThemeProvider";
import AppLayout from "./components/AppLayout";
import Dashboard from "./components/Dashboard";
import OrderForm from "./components/OrderForm";

const App = () => {
  return (
    <NorthStarThemeProvider>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/createOrder" element={<OrderForm />} />
        </Routes>
      </AppLayout>
    </NorthStarThemeProvider>
  );
};

export default App;
