import React from "react";

function Header() {
  return (
    <nav>
      <div className="logo">
        <img src="assets/Logo/Logo-brainflix.svg" />
      </div>
      <div class="searchBar">
        <div class="searchIcon">
          <img src="assets/Icons/PNG/Icon-search.png" />
        </div>
        <div class="searchInput">
          <input type="text" name="search" id="search" placeholder="Search" />
        </div>
      </div>
      <div className="upload">
        <button className="button">+ Upload</button>
        <div className="icon">
          <img src="assets/Images/Mohan-muruge.jpg" />
        </div>
      </div>
    </nav>
  );
}
export default Header;
