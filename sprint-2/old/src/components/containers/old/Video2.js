import React, { Component } from "react";

class Video2 extends Component {
  render() {
    const { id, title, channel, image } = this.props;
    return (
      <div>
        <p>{id}</p>
        <p>{title}</p>
        <p>{channel}</p>
        <p>{image}</p>
      </div>
    );
  }
}

export default Video2;
