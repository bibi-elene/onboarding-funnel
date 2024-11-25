import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import Onboarding from "./pages/Onboarding";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/onboarding/*" element={<Onboarding />} />
    </Routes>
  </Router>
);

export default App;
