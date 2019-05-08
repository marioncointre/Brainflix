import React from "react";
import Comments_URL from "./containers/Comments_URL";
import Video_URL from "./containers/Video_URL";

function App() {
  return (
    <>
      <div className="App">
        <Video_URL />
        <Comments_URL />
      </div>
    </>
  );
}

export default App;
