import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Description from "./components/Description";
import Videos from "./components/containers/Videos";
import Comments from "./components/containers/Comments";
import VideoUploader from "./components/containers/VideoUploader";

const Nav = () => (
  <nav>
    <Link to="/">Home</Link> |<Link to="/main-video">Main Video</Link> |
    <Link to="/upload-video">Upload Video</Link>
  </nav>
);
const Home = () => (
  <div>
    <Nav />
    <h1>Home</h1>
  </div>
);
const MainVid = () => (
  <div>
    <Nav />
    <h1>Main Video Player</h1>
  </div>
);

const UploadVid = () => (
  <div>
    <Nav />
    <h1>Upload Video</h1>
  </div>
);

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/main-video" component={MainVid} />
          <Route path="/upload-video" component={VideoUploader} />
        </Switch>
      </div>

      {/* <VideoUploader /> */}
      {/* <Hero />
        <div className="section">
          <div className="main">
            <Description />
            <Comments />
          </div>
          <Videos />
        </div> */}
    </>
  );
}

export default App;
