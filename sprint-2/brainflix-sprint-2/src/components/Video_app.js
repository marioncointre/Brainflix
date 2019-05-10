import React from "react";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";

class Video_app extends React.Component {
  state = {
    videoArray: []
  };

  componentDidMount() {
    axios
      .get("https://project-2-api.herokuapp.com/videos?api_key=labKey")
      .then(response => {
        this.setState({
          videoArray: response.data
        });
      });
  }

  render() {
    return (
      <>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Switch>
          <Route
            path="/"
            exact
            render={props => {
              return <HomePage videoArray={this.state.videoArray} />;
            }}
          />
          <Route
            path="/video/:videoid"
            exact
            render={props => {
              // Ensure that we have videos before proceeding
              if (this.state.videoArray.length === 0) {
                return <div>Loading...</div>;
              } else {
                // 1. Get videoid on URL from match.params
                const videoid = props.match.params.video.id;

                // 2. Look up the video in the video array in state
                const video = this.state.videoArray.find(video => {
                  return video.id === videoid;
                });

                // 3. Return the videoProfile Component with the video
                // information
              }
            }}
          />
        </Switch>
      </>
    );
  }
}

const HomePage = props => {
  const videoList = props.videoArray.map(video => {
    return (
      <>
        <ul>
          <li>
            <Link to={`/video/${video.id}`}>{video.id}</Link>
          </li>
        </ul>
        <h1>Home</h1>
        <ul>{videoList}</ul>
        <ul>{props.video.id}</ul>
      </>
    );
  });
};
export default Video_app;
