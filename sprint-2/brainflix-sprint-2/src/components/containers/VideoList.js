import React, { Component } from "react";
import Video from "./Video";

class VideoList extends Component {
  render() {
    return (
      <div>
        {this.props.videosTable.map(video => {
          return (
            <Video
              id={video.id}
              title={video.title}
              channel={video.channel}
              image={video.image}
            />
          );
        })}
      </div>
    );
  }
}

export default VideoList;
