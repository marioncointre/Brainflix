import React, { Link, Component } from "react";
import Video from "./Video";

class VideoList extends Component {
  render() {
    return (
      <div className="aside">
        <label>Next video</label>
        {this.props.videosTable.map(video => {
          return (
            <>
              <Link to={this.props.match.url + "/" + video.id}>
                <Video
                  id={video.id}
                  title={video.title}
                  channel={video.channel}
                  image={video.image}
                />
              </Link>
            </>
          );
        })}
      </div>
    );
  }
}

export default VideoList;
