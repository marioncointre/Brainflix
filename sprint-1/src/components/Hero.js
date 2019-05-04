import React from "react";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__video">
        <div className="video__icons">
          <div className="play">
            <img src="assets/Icons/PNG/Icon-play.png" />
          </div>
          <div className="progressbar">
            <div className="progressbar__line" />
            <p> 0:00 /0:42</p>
          </div>
          <div className="fullscreen">
            <img src="assets/Icons/PNG/Icon-fullscreen.png" />
          </div>
          <div className="volume">
            <img src="assets/Icons/PNG/Icon-volume.png" />
          </div>
        </div>
        <div className="bigVid">
          <video width="100%" poster="assets/Images/video-list-0.jpg">
            <source
              src="assets/Video/BrainStation_Video.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}
export default Hero;
