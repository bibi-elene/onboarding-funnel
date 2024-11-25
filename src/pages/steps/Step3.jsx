import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import ReturnButton from "../../components/ReturnButton";

const Step3 = () => {
  const navigate = useNavigate();

  const handleComplete = async () => {
    const userId = Cookies.get("user_id");
    if (!userId) return; // Ensure user_id exists

    // Check if the user has already completed onboarding
    const alreadyCompleted = Cookies.get("completed");
    if (!alreadyCompleted) {
      Cookies.set("completed", "true", { expires: 7 }); // Mark as completed

      // Send "completed" action to backend
      await fetch("http://localhost:5001/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: userId, action: "completed" }),
      }).catch((err) => console.error("Error tracking completed:", err));
    }

    navigate("/");
  };

  return (
    <div className="container d-flex align-items-center vh-100 bg-light">
      <ReturnButton />
      <div
        className="col-md-4 text-start text-muted px-4 d-none d-md-block"
        style={{ fontWeight: "400", lineHeight: "1.6" }}
      >
        <p>
          You’re all set! Explore endless possibilities with Glam and find your
          perfect match. Dive into our collection and discover styles that truly
          reflect you.
        </p>
      </div>
      {/* Video and Heading Section */}
      <div className="col-md-8 text-center">
        <h2 className="mb-3 fs-3 text-end text-md-start">
          Explore <br />  100+  <br /> Styles
        </h2>
        <div
          className="video-container mb-4 rounded shadow"
          style={{ maxWidth: "500px", maxHeight: "650px", overflow: "hidden" }}
        >
          <video
            autoPlay
            loop
            muted
            className="w-100 h-auto"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source
              src="https://cdn.getglam.app/content/paywalls/240515_web2web_video3_v01.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <button
          className="btn btn-outline-success btn-lg px-3 mt-4"
          style={{ fontWeight: "500" }}
          onClick={handleComplete}
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default Step3;
