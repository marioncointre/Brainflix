import React from "react";
import Video_app from "./Video_app";
import Comments_URL from "./Comments_URL";
import Video_URL from "./Video_URL";
import Header from "./Header";
import Hero from "./Hero";
import Description from "./Description";

function App() {
  return (
    <>
      <div className="App">
        {/* <Video_app /> */}
        <Header />
        <Hero />
        <div className="section">
          <div className="main">
            <Description />
            <Comments_URL />
          </div>
          <Video_URL />
        </div>
      </div>
    </>
  );
}

export default App;
