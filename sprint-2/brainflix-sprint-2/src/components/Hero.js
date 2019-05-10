import React from "react";

function Hero(props) {
  return (
    <div className="hero">
      <div className="hero__video">
        <div className="bigVid">
          <video width="100%" poster="assets/Images/video-list-0.jpg">
            <source src="" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
export default Hero;
