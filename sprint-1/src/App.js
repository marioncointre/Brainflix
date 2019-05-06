import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Description from "./components/Description";
import Videos from "./components/containers/Videos";
import Comments from "./components/containers/Comments";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="section">
        <div className="main">
          <Description />
          <Comments />
        </div>
        <Videos />
      </div>
    </div>
  );
}

export default App;
