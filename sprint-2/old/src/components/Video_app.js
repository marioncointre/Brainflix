import React from "react";
import axios from "axios";
import App from "./App";

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
        <Switch>
          <Route
            path="/video/:videoid"
            exact
            render={props => {
              // Ensure that we have videos before proceeding
              if (this.state.videoArray.length === 0) {
                return <div>Loading...</div>;
              } else {
                const VideoLists = props => {
                  const videoList = props.videoArray.map(video => {
                    return (
                      <>
                        <div className="hero">
                          <div className="hero__video">
                            <div className="bigVid">
                              <video
                                width="100%"
                                poster="assets/Images/video-list-0.jpg"
                              >
                                <source
                                  src={this.props.match + "/" + video.id}
                                  type="video/mp4"
                                />
                              </video>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  });
                };
              }
            }}
          />
        </Switch>
      </>
    );
  }
}

export default Video_app;
