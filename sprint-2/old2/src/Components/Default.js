import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class Default extends React.Component {
  render() {
    const videos = this.props;
    return (
      <>
        aaaaaaa
        <div>{videos.name}</div>;
      </>
    );
  }
}

export default Default;
