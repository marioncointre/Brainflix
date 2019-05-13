import React from "react";
import axios from "axios";
import Header from "./Header";
import viewsIcon from "../assets/Icons/SVG/Icon-views.svg";
import likesIcon from "../assets/Icons/SVG/Icon-likes.svg";

class MainContainer extends React.Component {
  render() {
    const { videopage } = this.props;

    return (
      <>
        <div className="hero">
          <div className="hero__video">
            <div className="bigVid">
              <video width="100%" poster={videopage.image}>
                <source src="" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="main">
            <div className="intro">
              <div className="info">
                <h1>{videopage.title}</h1>
                <div className="title">
                  <div className="author">
                    <h2>{videopage.channel}</h2>
                    <p>{videopage.timestamp}</p>
                  </div>
                  <div className="stats">
                    <div className="views">
                      <img src={viewsIcon} />
                      <p>{videopage.views}</p>
                    </div>
                    <div className="likes">
                      <img src={likesIcon} />
                      <p>{videopage.likes}</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="description">
                <p>{videopage.description}</p>
              </div>
            </div>
          </div>
          {/* <VideoList /> */}
        </div>
      </>
    );
  }
}
export default MainContainer;
