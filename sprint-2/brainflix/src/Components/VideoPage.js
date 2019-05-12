import React from "react";
import axios from "axios";
import Header from "./Header";
import viewsIcon from "../assets/Icons/SVG/Icon-views.svg";
import likesIcon from "../assets/Icons/SVG/Icon-likes.svg";

class VideoPage extends React.Component {
  state = {
    videopage: {}
  };

  componentDidMount() {
    const videoidUrl = `https://project-2-api.herokuapp.com/videos/${
      this.props.videoid
    }?api_key=labKey`;

    axios.get(videoidUrl).then(response => {
      this.setState({
        videopage: response.data
      });
    });
  }

  render() {
    const { videopage } = this.state;
    if (Object.keys(videopage).length === 0) return <div>Loading...</div>;
    return (
      <>
        <Header />
        {/* MAIN CONTAINER BEGINS*/}
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

            {/* MAIN CONTAINER ENDS*/}
            {/* COMMENT LIST BEGINS*/}
            <div class="comments__table">
              <div className="published">
                <div className="published__img">
                  <div className="published__icon" />
                </div>
                <div className="published__body">
                  <p className="username">
                    {videopage.comments.name}commentname
                  </p>
                  <p className="date">
                    {videopage.comments.timestamp}commentdate
                  </p>
                  <div className="input">
                    {videopage.comments.comment}commentinput
                  </div>
                </div>
              </div>
            </div>
            {/* COMMENT LIST ENDS*/}
          </div>
          {/* VIDEO LIST BEGINS*/}
          <div className="aside">
            <label>Next video</label>
            {/* <div>{videoList}</div> */}
          </div>
          {/* VIDEO LIST ENDS*/}
        </div>
      </>
    );
  }
}
export default VideoPage;
