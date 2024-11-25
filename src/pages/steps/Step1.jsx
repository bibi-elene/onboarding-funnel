import React from "react";
import { useNavigate } from "react-router-dom";

const Step1 = () => {
  const navigate = useNavigate();
  return (
    <div className="container d-flex align-items-center vh-100 bg-light">
      <div className="col-md-4 text-start text-muted px-4" style={{ fontWeight: "400", lineHeight: "1.6" }}>
        <p>
          Welcome to Glam! Discover how our platform can transform your journey
          into a stylish and inspiring experience. Step into the world of
          aesthetics and find out how Glam helps you express your personality
          effortlessly.
        </p>
      </div>
      <div className="col-md-8 text-center">
        <h2 className="mb-4">Welcome to Glam!</h2>
        <div className="video-container mb-4 rounded shadow" style={{ width: "500px", height: "650px", overflow: "hidden" }}>
          <video
            autoPlay
            loop
            muted
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source
              src="https://cdn.getglam.app/content/paywalls/240515_web2web_video1_v04.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <button
          className="btn btn-dark btn-lg px-5"
          onClick={() => navigate("/onboarding/step2")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step1;
