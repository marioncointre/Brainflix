import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">
          <img src="assets/Logo/Logo-brainflix.svg" />
        </Link>
      </div>
      <input type="text" name="search" id="search" placeholder="Search" />

      <div className="upload">
        <button className="button">
          <Link to="/upload-video">
            <img src="../assets/Icons/SVG/Icon-upload.svg" /> UPLOAD
          </Link>
        </button>
        <img src="assets/Images/Mohan-muruge.jpg" className="icon" />
      </div>
    </div>
  );
}
export default Header;
