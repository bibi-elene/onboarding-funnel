import React from "react";
import { useNavigate } from "react-router-dom";
import ReturnButton from "../../components/ReturnButton";

const Step2 = () => {
  const navigate = useNavigate();
  return (
    <div className="container d-flex align-items-center vh-100 bg-light">
      <ReturnButton />
      <div
        className="col-md-4 text-start text-muted px-4 d-none d-md-block"
        style={{ fontWeight: "400", lineHeight: "1.6" }}
      >
        <p>
          Share your preferences and let Glam curate a personalized style for
          you. Whether you love minimalism, bold statements, or classic
          elegance, we’re here to help you define your look.
        </p>
      </div>
      <div className="col-md-8 text-center">
        <h2 className="mb-2 pt-3 pb-md-0 mb-md-4 fs-3 text-md-start text-end">
          Match <br /> Your <br /> Aesthetic
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
              src="https://cdn.getglam.app/content/paywalls/240515_web2web_video2_v01.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <button
          className="btn btn-dark btn-lg px-5"
          onClick={() => navigate("/onboarding/step3")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
