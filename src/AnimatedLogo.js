import React from "react";
import "./AnimatedLogo.css";

function AnimatedLogo() {
  return (
    <div className="ms-logo-wrapper">
      {/* soft background glow */}
      <div className="ms-aura" />

      {/* orbit with icons */}
      <div className="ms-logo-orbit">
        {/* 1 – top */}
        <div className="ms-ball ms-ball-1">
          <div className="ms-icon-circle ms-green">
            {/* football */}
            <svg viewBox="0 0 64 64" className="ms-icon">
              <circle cx="32" cy="32" r="26" />
              <polygon points="32,16 42,26 38,40 26,40 22,26" />
            </svg>
          </div>
        </div>

        {/* 2 – top-right */}
        <div className="ms-ball ms-ball-2">
          <div className="ms-icon-circle ms-blue">
            {/* basketball */}
            <svg viewBox="0 0 64 64" className="ms-icon">
              <circle cx="32" cy="32" r="26" />
              <path d="M10 32h44M32 10v44M16 16c12 10 20 10 32 0M16 48c12-10 20-10 32 0" />
            </svg>
          </div>
        </div>

        {/* 3 – right */}
        <div className="ms-ball ms-ball-3">
          <div className="ms-icon-circle ms-purple">
            {/* volleyball */}
            <svg viewBox="0 0 64 64" className="ms-icon">
              <circle cx="32" cy="32" r="26" />
              <path d="M20 12c18 8 26 18 28 40M12 44c8-10 26-12 40-4M10 28c14-2 30 4 40 16" />
            </svg>
          </div>
        </div>

        {/* 4 – bottom-right */}
        <div className="ms-ball ms-ball-4">
          <div className="ms-icon-circle ms-yellow">
            {/* tennis */}
            <svg viewBox="0 0 64 64" className="ms-icon">
              <circle cx="32" cy="32" r="26" />
              <path d="M10 24c16 0 20 20 30 20M54 24c-16 0-20 20-30 20" />
            </svg>
          </div>
        </div>

        {/* 5 – bottom */}
        <div className="ms-ball ms-ball-5">
          <div className="ms-icon-circle ms-orange">
            {/* boxing glove */}
            <svg viewBox="0 0 64 64" className="ms-icon">
              <path d="M18 40c-4-12 4-18 12-18s16 4 16 12-8 14-16 14-12-4-12-8z" />
              <rect x="18" y="40" width="28" height="12" rx="4" />
            </svg>
          </div>
        </div>

        {/* 6 – bottom-left */}
        <div className="ms-ball ms-ball-6">
          <div className="ms-icon-circle ms-gold">
            {/* dumbbell */}
            <svg viewBox="0 0 64 64" className="ms-icon">
              <rect x="8" y="28" width="12" height="8" />
              <rect x="44" y="28" width="12" height="8" />
              <rect x="20" y="30" width="24" height="4" />
            </svg>
          </div>
        </div>

        {/* 7 – left */}
        <div className="ms-ball ms-ball-7">
          <div className="ms-icon-circle ms-pink">
            {/* running */}
            <svg viewBox="0 0 64 64" className="ms-icon">
              <circle cx="32" cy="16" r="6" />
              <path d="M26 28l8 4 8-2M30 32l-6 10-8 6M38 32l4 8 8 6" />
            </svg>
          </div>
        </div>

        {/* 8 – top-left */}
        <div className="ms-ball ms-ball-8">
          <div className="ms-icon-circle ms-teal">
            {/* whistle (referee) */}
            <svg viewBox="0 0 64 64" className="ms-icon">
              <circle cx="44" cy="30" r="6" />
              <path d="M12 30h22v10c0 6-4 10-10 10h-6" />
              <path d="M18 20h10v6" />
            </svg>
          </div>
        </div>
      </div>

      {/* center core */}
      <div className="ms-logo-core">
        <div className="ms-logo-ring" />
        <span className="ms-logo-text">
          <span className="ms-logo-text-main">MOROSPORT</span>
        </span>
      </div>
    </div>
  );
}

export default AnimatedLogo;
