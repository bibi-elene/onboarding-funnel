import React from 'react';

export const LandingPage = () => {
  const startOnboarding = () => {
    window.location.href = '/onboarding';
  };

  return (
    <div className="page-container d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <h1 className="display-4 mb-5">Onboarding To GlamAI</h1>
      <button className="btn btn-dark btn-lg" onClick={startOnboarding}>
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
