import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <>
      <Header />
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
}
