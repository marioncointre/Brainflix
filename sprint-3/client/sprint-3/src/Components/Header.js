import React from "react";
import { Link } from "react-router-dom";
import uploadIcon from "../assets/Icons/SVG/Icon-upload.svg";
import logo from "../assets/Logo/Logo-brainflix.svg";
import Mohan from "../assets/Images/Mohan-muruge.jpg";

function Header() {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Branflix"/>
        </Link>
      </div>
      <input type="text" name="search" id="search" placeholder="Search" />
      <div className="upload">
        <button className="button">
          <Link
            to="/upload-video">
            
            <img src={uploadIcon} alt="Upload"/> UPLOAD
          </Link>
        </button>
        <img src={Mohan} className="icon" alt="Mohan"/>
      </div>
    </div>
  );
}
export default Header;
