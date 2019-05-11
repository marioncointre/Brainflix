import React, { Component } from "react";

class Video extends Component {
  render() {
    const { id, title, channel, image } = this.props;
    return (
      <>
        <div className="video">
          <div className="video__image">
            <img src={image} />
          </div>
          <div className="video__content">
            <div className="video__title">{title}</div>
            <div className="video__author">{channel}</div>
          </div>
        </div>
      </>
    );
  }
}

export default Video;
