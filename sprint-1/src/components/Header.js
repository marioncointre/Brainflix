import React from "react";

function Header() {
  return (
    <div class="nav">
      <div className="logo">
        <img src="assets/Logo/Logo-brainflix.svg" />
      </div>
      <input type="text" name="search" id="search" placeholder="Search" />

      <div className="upload">
        <button className="button">
          <img src="../assets/Icons/SVG/Icon-upload.svg" /> UPLOAD
        </button>
        <img src="assets/Images/Mohan-muruge.jpg" className="icon" />
      </div>
    </div>
  );
}
export default Header;
