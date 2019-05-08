import React, { Component } from "react";
import Video2 from "./Video2";

class VideoList extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.videos.map(video => {
          return (
            <Video2
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
