import React from "react";
import { Link } from "react-router-dom";

function VideoList(props) {
  const { videos } = props;
  const videoList = videos.map(video => {
    // filter out the video
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
  return (
    <div className="aside">
      <label>Next video</label>
      {videoList}
    </div>
  );
}
export default VideoList;
