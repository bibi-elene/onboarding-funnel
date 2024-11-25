import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Step1 = () => {
  const navigate = useNavigate();

  const handleNext = async () => {
    const userId = Cookies.get("user_id") || generateUserId();
    Cookies.set("user_id", userId, { expires: 7 }); // Set user_id for 7 days

    // Check if the user has already started onboarding
    const alreadyStarted = Cookies.get("started");
    if (!alreadyStarted) {
      Cookies.set("started", "true", { expires: 7 }); // Mark as started

      // Send "started" action to backend
      await fetch("http://localhost:5001/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: userId, action: "started" }),
      }).catch((err) => console.error("Error tracking started:", err));
    }

    navigate("/onboarding/step2");
  };

  const generateUserId = () => {
    return Math.random().toString(36).substring(2, 15); // Generate a random user ID
  };

  return (
    <div className="container d-flex align-items-center vh-100 bg-light">
      {/* Paragraph Section */}
      <div
        className="col-md-4 text-start text-muted px-4"
        style={{ fontWeight: "400", lineHeight: "1.6" }}
      >
        <p>
          Welcome to Glam! Discover how our platform can transform your journey
          into a stylish and inspiring experience. Step into the world of
          aesthetics and find out how Glam helps you express your personality
          effortlessly.
        </p>
      </div>
      {/* Video and Heading Section */}
      <div className="col-md-8 text-center">
        <h2 className="mb-3">Welcome to Glam!</h2>
        <div
          className="video-container mb-4 rounded shadow"
          style={{ width: "500px", height: "650px", overflow: "hidden" }}
        >
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
          style={{ fontWeight: "500" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step1;
