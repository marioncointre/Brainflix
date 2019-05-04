import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Description from "./components/Description";
import Videos from "./components/Videos";
import Comments2 from "./components/Comments2";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="test">
        <div className="main">
          <Description />
          <Comments2 />
        </div>
        <Videos />
      </div>
    </div>
  );
}

export default App;
