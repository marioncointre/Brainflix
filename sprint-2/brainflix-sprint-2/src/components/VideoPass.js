import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Hero from "./Hero";

class VideoPass extends Component {
  render() {
    const VideloLink = this.props.videosTable.map(video => {
      return <Link to={this.props.match.url + "/" + video.id}>{video.id}</Link>;
    });

    return (
      <>
        <Switch>
          <Route path="/:vidid" component={Hero} />
        </Switch>
      </>
    );
  }
}

export default VideoPass;
