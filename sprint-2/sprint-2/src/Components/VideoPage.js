import React from "react";
import axios from "axios";
import Comments2 from "./Comments2";
import VideoList from "./containers/VideoList";
import "../css/app.css";
import { Link } from "react-router-dom";
import uploadIcon from "../assets/Icons/SVG/Icon-upload.svg";
import logo from "../assets/Logo/Logo-brainflix.png";
import Mohan from "../assets/Images/Mohan-muruge.jpg";
import views from "../assets/Icons/PNG/Icon-views.png";
import likes from "../assets/Icons/PNG/Icon-likes.png";

class VideoPage extends React.Component {
  state = {
    videos: [],
    singleVid: {
      title: " ",
      channel: " ",
      description: " ",
      image: " ",
      timestamp: " ",
      views: " ",
      likes: " ",
      commentsTables: []
    }
  };
  componentDidMount() {
    const newvideoidUrl = `https://project-2-api.herokuapp.com/videos/${
      this.props.videoid
    }?api_key=labKey`;

    axios.get(newvideoidUrl).then(response => {
      this.setState({
        singleVid: {
          title: response.data.title,
          channel: response.data.channel,
          description: response.data.description,
          image: response.data.image,
          timestamp: response.data.timestamp,
          views: response.data.views,
          likes: response.data.likes,
          commentsTables: response.data.comments
        }
      });
    });
  }
  render() {
    const propss = this.props.videoid;
    return (
      <>
        <div className="App">
          <div className="nav">
            <div className="logo">
              <Link to="/">
                <img src={logo} />
              </Link>
            </div>
            <input type="text" name="search" id="search" placeholder="Search" />
            <div className="upload">
              <button className="button">
                <Link to="/upload-video">
                  <img src={uploadIcon} /> UPLOAD
                </Link>
              </button>
              <img src={Mohan} className="icon" />
            </div>
          </div>
          <div className="hero">
            <div className="hero__video">
              <div className="bigVid">
                <video width="100%" poster={this.state.singleVid.image}>
                  <source src="" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="main">
              <div className="intro">
                <div className="info">
                  <h1>{this.state.singleVid.title}</h1>
                  <div className="title">
                    <div className="author">
                      <h2>{this.state.singleVid.channel}</h2>
                      <p>{this.state.singleVid.timestamp}</p>
                    </div>
                    <div className="stats">
                      <div className="views">
                        <img src={views} />
                        <p>{this.state.singleVid.views}</p>
                      </div>
                      <div className="likes">
                        <img src={likes} />
                        <p>{this.state.singleVid.likes}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="description">
                  <p>{this.state.singleVid.description}</p>
                </div>
              </div>
            </div>
          </div>
          <Comments2 commentsTable={this.state.singleVid.commentsTables} />
        </div>
        <VideoList videos={this.state.videos} />
      </>
    );
  }
}
export default VideoPage;
