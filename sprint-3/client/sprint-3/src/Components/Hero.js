import React from "react";
import Play from "../assets/Icons/SVG/Icon-play.svg";
import Fullscreen from "../assets/Icons/SVG/Icon-fullscreen.svg";
import Volume from "../assets/Icons/SVG/Icon-volume.svg";
import Scrubber from "../assets/Icons/SVG/Icon-scrubber-control.svg";

class Hero extends React.Component {
  render() {
    const singleVid = this.props.singleVid;
    let video = document.getElementById("Player");
    function playVideo() {
      video.play();
    }
    function pauseVideo() {
      video.pause();
    }
    // event.preventDefault();
    //   if (Player.paused) {
    //     Player.play();
    //   } else {
    //     Player.pause();
    //   }
    // }
    return (
      <div className="hero">
        <div className="hero__video">
          {/* <div className="hero__container"> */}
          <div className="video__icons">
            <div className="play">
              <img src={Play} alt="Play" onClick={playVideo} />
            </div>

            <div className="progressbar">
              <img src={Scrubber} id="scrubber" alt="scrubber" />

              <div className="progressbar__line" />
              <p> 0:00 /0:42</p>
            </div>
            <div className="fullscreen">
              <img src={Fullscreen} alt="Fullscreen" />
            </div>
            <div className="volume">
              <img src={Volume} alt="Volume" />
            </div>
          </div>

          <div className="bigVid">
            <video width="100%" poster={singleVid.image} id="Player">
              <source src="" type="video/mp4" alt="video" />
            </video>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}
export default Hero;
