import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class VideoList extends React.Component {
  render() {
    const props = this.props;
    console.log(props);

    return (
      <>
        <div className="aside">
          <label>Next video</label>
          <Videos videos={this.props} />
          />
        </div>
      </>
    );
  }
}
function Videos(props) {
  const { videos } = props;
  console.log(videos);
  const videoList = videos.map(video => {
    return (
      <div>
        <Link to={`/video/${video.id}`}>
          <div className="video">
            <div className="video__image">
              <img src={video.image} />
            </div>
            <div className="video__content">
              <div className="video__title">{video.title}</div>
              <div className="video__author">{video.channel}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <div>{videoList}</div>;
}
export default VideoList;
