import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";

const Onboarding = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/onboarding/step1" />} />
    <Route path="/step1" element={<Step1 />} />
    <Route path="/step2" element={<Step2 />} />
    <Route path="/step3" element={<Step3 />} />
  </Routes>
);

export default Onboarding;
