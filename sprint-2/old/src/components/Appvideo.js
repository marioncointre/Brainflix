import React from "react";
import axios from "axios";
// import Hero from "./Hero";
import { Switch, Route, Link } from "react-router-dom";

const videodefault = "1ae5jruuoc4q";

const videoUrl = `https://project-2-api.herokuapp.com/videos/?api_key=labKey`;

class Appvideo extends React.Component {
  state = {
    video: []
  };

  componentDidMount() {
    axios.get(videoUrl).then(response => {
      this.setState({
        video: response.data
      });
    });
  }

  render() {
    return (
      <>
        <Route
          path="/videos/:videoid"
          render={props => {
            console.log(props);
            return <Hero videoid={props.match.params.videoid} />;
          }}
        />
      </>
    );
  }
}

class Hero extends React.Component {
  state = {
    videoid: {}
  };

  componentDidMount() {
    console.log(this.props);
    const userUrl = `https://project-2-api.herokuapp.com/videos/${
      this.props.video.id
    }?api_key=labKey`;

    axios.get(userUrl).then(response => {
      console.log(response.data);
      this.setState({
        user: response.data
      });
    });
  }

  render() {
    const { user } = this.state;
    if (Object.keys(user).length === 0) return <div>Loading...</div>;

    return (
      <div className="hero">
        <div className="hero__video">
          <div className="bigVid">
            <video width="100%" poster="assets/Images/video-list-0.jpg">
              <source src="" type="video/mp4" />
            </video>
          </div>
        </div>
        <div>{this.state.video.id}</div>
        <div>{this.state.video.title}</div>
        <div>{this.state.video.channel}</div>
        <div>{this.state.video.description}</div>
        <div>{this.state.video.image}</div>
        <div>{this.state.video.id}</div>
      </div>
    );
  }
}

export default Appvideo;
