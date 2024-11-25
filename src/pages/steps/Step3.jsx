import React from "react";
import { useNavigate } from "react-router-dom";

const Step3 = () => {
  const navigate = useNavigate();
  return (
    <div className="container d-flex align-items-center vh-100 bg-light">
      <div
        className="col-md-4 text-start text-muted px-4"
        style={{ fontWeight: "400", lineHeight: "1.6" }}
      >
        <p>
          You’re all set! Explore endless possibilities with Glam and find your
          perfect match. Dive into our collection and discover styles that truly
          reflect you.
        </p>
      </div>
      <div className="col-md-8 text-center">
        <h2 className="mb-4">Explore 100+ Styles</h2>
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
              src="https://cdn.getglam.app/content/paywalls/240515_web2web_video3_v01.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="d-flex me-5 my-5">
          <button
            className="btn btn-success btn-lg px-5"
            onClick={() => navigate("/")}
          >
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
