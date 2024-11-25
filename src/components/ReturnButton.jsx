import React from "react";
import { useNavigate } from "react-router-dom";

const ReturnButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="btn btn-outline-dark position-absolute top-0 start-0 m-3"
      onClick={() => navigate(-1)} // Navigate to the previous page
      style={{ zIndex: 10 }}
    >
      {`<-`} Go Back
    </button>
  );
};

export default ReturnButton;
