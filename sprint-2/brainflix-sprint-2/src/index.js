import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import VideoUploader from "./components/containers/VideoUploader";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      {/* <Route path="/main-video" component={MainVid} /> */}
      <Route path="/upload-video" component={VideoUploader} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
