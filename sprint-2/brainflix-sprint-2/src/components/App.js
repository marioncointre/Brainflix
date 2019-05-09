import React from "react";
import Comments_URL from "./Comments_URL";
import Video_URL from "./Video_URL";
import Header from "./Header";
import Hero from "./Hero";
import Description from "./Description";
import Videos from "./containers/old/Videos";
import Comments from "./containers/old/Comments";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Hero />
        <div className="section">
          <div className="main">
            <Description />
            <Comments_URL />
            {/* <Comments /> */}
          </div>
          {/* <Videos /> */}
          <Video_URL />
        </div>
      </div>
      {/* <Video_URL />
        <Comments_URL /> */}
    </>
  );
}

export default App;
