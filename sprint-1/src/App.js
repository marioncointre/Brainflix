import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Videos from "./components/Videos";
import Comments from "./components/Comments";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
      <Comments />
      <Videos />
    </div>
  );
}

export default App;
