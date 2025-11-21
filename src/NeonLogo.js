import React from "react";
import "./NeonLogo.css";

export default function NeonLogo() {
  return (
    <div className="ms-wrapper">
      <div className="ms-shield">
        {/* TOP ICONS */}
        <div className="ms-row">
          <img src="/icons/volleyball.svg" className="ms-icon" alt="" />
          <img src="/icons/run.svg" className="ms-icon" alt="" />
          <img src="/icons/tennis.svg" className="ms-icon" alt="" />
        </div>

        {/* TITLE */}
        <div className="ms-title">MOROSPORT</div>

        {/* BOTTOM ICONS */}
        <div className="ms-row">
          <img src="/icons/football.svg" className="ms-icon" alt="" />
          <img src="/icons/sprint.svg" className="ms-icon" alt="" />
          <img src="/icons/gym.svg" className="ms-icon" alt="" />
        </div>
      </div>
    </div>
  );
}
