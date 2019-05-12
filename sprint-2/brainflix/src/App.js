import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import VideoPage from "./Components/VideoPage";

import Header from "./Components/Header";

const videosUrl = `https://project-2-api.herokuapp.com/videos/?api_key=labKey`;

class App extends React.Component {
  state = {
    videos: []
  };

  componentDidMount() {
    axios.get(videosUrl).then(response => {
      this.setState({
        videos: response.data
      });
    });
  }
  // rendering the main homepage
  render() {
    const { videos } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact render={() => <Videos videos={videos} />} />
            <Route
              path="/video/:videoid"
              exact
              render={props => {
                return <VideoPage videoid={props.match.params.videoid} />;
                // return <VideoList videoList={videos} />;
              }}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
//videos containing axios props
const Videos = props => {
  const { videos } = props;
  //execution of the function mapping through videos
  const videoList = videos.map(video => {
    return (
      //returning side video list
      <Link to={`/video/${video.id}`}>
        <div className="video">
          <div className="video__image">
            <img src={video.image} />
          </div>
          <div className="video__content">
            <div className="video__title">{video.title}</div>
            <div className="video__author">{video.channel}</div>
          </div>
        </div>
      </Link>
    );
  });
  // rendering of html after function mapping
  return (
    <>
      <Header />
      {/* MAIN CONTAINER BEGINS*/}
      <div className="hero">
        <div className="hero__video">
          <div className="bigVid">
            <video width="100%" poster="assets/Images/video-list-0.jpg">
              <source src="" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="main">
          <div className="intro">
            <div className="info">
              <h1>BMX Rampage: 2018 Highlights</h1>
              <div className="title">
                <div className="author">
                  <h2>By Red Cow</h2>
                  <p>12/18/2018</p>
                </div>
                <div className="stats">
                  <div className="views">
                    <img src="public/assets/Icons/SVG/Icon-fullscreen.svg" />
                    <p>1,001,023</p>
                  </div>
                  <div className="likes">
                    <img src="assets/Icons/PNG/Icon-likes.png" />
                    <p>110,985</p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="description">
              <p>
                On a gusty day in Southern Utah, a group of 25 daring mountain
                bikers blew the doors off what is possible on two wheels,
                unleashing some of the biggest moments the sport has ever seen.
                While mother nature only allowed for one full run before the
                conditions made it impossible to ride, that was all that was
                needed for event veteran Kyle Strait, who won the event for the
                second time -- eight years after his first Red Cow Rampage title
              </p>
            </div>
          </div>

          {/* MAIN CONTAINER ENDS*/}
          {/* COMMENT LIST BEGINS*/}
          <div class="comments__table">
            <div className="published">
              <div className="published__img">
                <div className="published__icon">{""}</div>
              </div>
              <div className="published__body">
                <p className="username">{"name"}content</p>
                <p className="date">{"timestamp"}</p>
                <div className="input">{"comment"}</div>
              </div>
            </div>
          </div>
          {/* COMMENT LIST ENDS*/}
        </div>
        {/* VIDEO LIST BEGINS*/}
        <div className="aside">
          <label>Next video</label>
          <div>{videoList}</div>
        </div>
        {/* VIDEO LIST ENDS*/}
      </div>
    </>
  );
};

export default App;
