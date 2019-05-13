import React from "react";
import { Link } from "react-router-dom";
import uploadIcon from "../assets/Icons/SVG/Icon-upload.svg";

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
            <img src={uploadIcon} /> UPLOAD
          </Link>
        </button>
        <img src="assets/Images/Mohan-muruge.jpg" className="icon" />
      </div>
    </div>
  );
}
export default Header;
