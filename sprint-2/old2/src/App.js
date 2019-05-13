import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import VideoPage from "./Components/VideoPage";
import Default from "./Components/Default";
import Header from "./Components/Header";
import VideoUploader from "./Components/VideoUploader";
import VideoTest from "./VideoTest";

// import VideoList from "./VideoList";

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
    const { videosstate } = this.state.videos;
    return (
      <div className="App">
        {/* <BrowserRouter>
          <Switch>
            <Route
              path="/"
              exact
              render={() => <VideoTest videosstate={videosstate} />}
            />
            <Route
              path="/video/:videoid"
              exact
              render={props => {
                return (
                  <VideoPage
                    videoid={props.match.params.videoid}
                    videosstate={videosstate}
                  />
                );
              }}
            />
            <Route path="/upload-video" Component={VideoUploader} />
          </Switch>
        </BrowserRouter>
        <Header /> */}
        <VideoTest videosstate={videosstate} />
        {/* <Default videosstate={videosstate} /> */}
      </div>
    );
  }
}

export default App;
