import React, { Component } from "react";
import { Link } from "react-router-dom";

import Video from "./Video";

class VideoList extends Component {
  render() {
    return (
      <div className="aside">
        <label>Next video</label>
        {this.props.videosTable.map(video => {
          return (
            <Link to={`/video/${video.id}`}>
              <Video
                id={video.id}
                title={video.title}
                channel={video.channel}
                image={video.image}
              />
            </Link>
          );
        })}
      </div>
    );
  }
}

export default VideoList;
