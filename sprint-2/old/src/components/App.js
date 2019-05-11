import React from "react";
import Video_app from "./Video_app";
import Comments_URL from "./Comments_URL";
import Video_URL from "./Video_URL";
import Header from "./Header";
import Hero from "./Hero";
import Description from "./Description";
import Appvideo from "./Appvideo";
import Photos from "./Photos";

function App() {
  return (
    <>
      <div className="App">
        <Photos />
        {/* <Appvideo /> */}
        {/* <Header />
        <Video_app />
        <Hero />
        <div className="section">
          <div className="main">
            <Description />
            <Comments_URL />
          </div>
          <Video_URL />
        </div> */}
      </div>
    </>
  );
}

export default App;
