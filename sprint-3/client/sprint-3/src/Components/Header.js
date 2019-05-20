import React from "react";
import { Link } from "react-router-dom";
import uploadIcon from "../assets/Icons/SVG/Icon-upload.svg";
import logo from "../assets/Logo/Logo-brainflix.svg";
import Mohan from "../assets/Images/Mohan-muruge.jpg";

function Header(props) {
  console.log(props);
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <input type="text" name="search" id="search" placeholder="Search" />
      <div className="upload">
        <button className="button">
          <Link
            to="/upload-video"
            videos={props.videos}
            addVideo={props.addVideo}
            >
            
            <img src={uploadIcon} /> UPLOAD
          </Link>
        </button>
        <img src={Mohan} className="icon" />
      </div>
    </div>
  );
}
export default Header;
