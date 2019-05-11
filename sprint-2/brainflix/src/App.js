import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import VideoPage from "./Components/VideoPage";
import Video from "./Components/Video";
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
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact render={() => <Videos videos={videos} />} />
            <Route
              path="/video/:videoid"
              exact
              render={props => {
                return <VideoPage videoid={props.match.params.videoid} />;
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
      <Link to={`/video/${video.id}`}>
        {/* <Video
          id={video.id}
          title={video.title}
          channel={video.channel}
          image={video.image}
        /> */}
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
      <div className="aside">
        <label>Next video</label>
        <div>{videoList}</div>
      </div>
    </>
  );
};

export default App;
