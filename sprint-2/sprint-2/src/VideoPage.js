import React from "react";
import axios from "axios";
import Header from "./Header";
import Hero from "./Hero";
// import Comments2 from "./Comments2";
import VideoList from "./VideoList";
import Description from "./Description";
import "./css/app.css";
// import VideoList from "../VideoList";
// import viewsIcon from "../assets/Icons/SVG/Icon-views.svg";
// import likesIcon from "../assets/Icons/SVG/Icon-likes.svg";

class VideoPage extends React.Component {
  state = {
    videoid: this.props.videoid,
    singleVid: this.props.singleVid
  };

  componentDidMount() {
    const newvideoidUrl = `https://project-2-api.herokuapp.com/videos/${
      this.props.newvideoid
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
    return (
      <>
        <div className="App">
          <Header />
          <Hero singleVid={this.state.singleVid} />
          <div className="section">
            <div className="main">
              <Description singleVid={this.state.singleVid} />
              {/* <Comments2 commentsTable={this.state.singleVid.commentsTables} /> */}
            </div>
            <VideoList videos={this.state.videos} />
            <VideoPage videos={this.state.singleVid} />
          </div>
        </div>
      </>
    );
  }
}
export default VideoPage;
