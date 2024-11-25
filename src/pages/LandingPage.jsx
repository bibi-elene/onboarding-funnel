import React, { useEffect } from "react";
import Cookies from "js-cookie";
import "../styles/landing.scss";

export const LandingPage = () => {
  useEffect(() => {
    const userId = Cookies.get("user_id") || generateUserId();
    Cookies.set("user_id", userId, { expires: 7 });

    // Check if the user has already been marked as visited
    const alreadyVisited = Cookies.get("visited");
    if (!alreadyVisited) {
      Cookies.set("visited", "true", { expires: 7 }); // Mark as visited

      // Send "visited" action to the backend
      fetch("http://localhost:5001/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: userId, action: "visited" }),
      }).catch((err) => console.error("Error tracking visit:", err));
    }
  }, []);

  const generateUserId = () => {
    return Math.random().toString(36).substring(2, 15); // Simple random string
  };

  return (
    <div className="container text-center vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1 style={{ fontFamily: "Inter" }} className="mb-5">
        Let's onboard with GlamAI.
      </h1>
      <a href="/onboarding/step1" className="btn btn-lg px-5 btn-outline-primary">
        Get Started
      </a>
      <a href="/dashboard" className="btn mt-3 btn-lg px-4 btn-outline-secondary">
        View Dashboard
      </a>
    </div>
  );
};
