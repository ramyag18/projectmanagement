import React from "react";
import { Link } from "react-router-dom";
import "./Team.css";

const Team = () => {
  return (
    <div className="team-container">
      {/* Navbar */}
      <nav className="team-navbar">
        <div>Project Management Dashboard</div>
        <Link to="/" className="home-link">Home</Link>
      </nav>

      {/* Team Section - Aligned to Right */}
      <div className="team-layout">
        <div className="team-content">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-card card-blue">
              <div className="profile-box">
                <img src="https://icon-library.com/images/computer-engineer-icon/computer-engineer-icon-29.jpg" alt="" className="profile-image" />
              </div>
              <h3>Sanjeetha G</h3>
              <p>727723EUEC176</p>
            </div>
            <div className="team-card card-green">
              <div className="profile-box">
                <img src="https://icon-library.com/images/computer-engineer-icon/computer-engineer-icon-29.jpg" alt="" className="profile-image" />
              </div>
              <h3>Ramya G</h3>
              <p>727723EUEC154</p>
            </div>
            <div className="team-card card-red">
              <div className="profile-box">
                <img src="https://icon-library.com/images/computer-engineer-icon/computer-engineer-icon-29.jpg" alt="" className="profile-image" />
              </div>
              <h3>Rakshidha R</h3>
              <p>727723EUEC150</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="team-footer">
        © 2025 Project Management Dashboard. All rights reserved.
      </footer>
    </div>
  );
};

export default Team;
