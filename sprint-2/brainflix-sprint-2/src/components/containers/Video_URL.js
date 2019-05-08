import React, { Component } from "react";
import VideoList from "./VideoList";
import axios from "axios";

const videosUrl = "https://project-2-api.herokuapp.com/videos?api_key=labKey";

class Video_URL extends Component {
  state = {
    videosTable: []
  };

  componentDidMount() {
    axios.get(videosUrl).then(response => {
      const newVideos = response.data.map(video => {
        return {
          id: video.id,
          title: video.title,
          channel: video.channel,
          image: video.image
        };
      });

      this.setState({
        videosTable: newVideos
      });
    });
  }

  render() {
    return (
      <div>
        <h1 className="header">Videos</h1>
        <VideoList videosTable={this.state.videosTable} />
      </div>
    );
  }
}

export default Video_URL;
// return (
//   <div className="aside">
//     <label>Next video</label>
//     <VideoList videos={this.state.videosTable} />
//   </div>
// );
//   }
// }
// function VideoList(props) {
//   const videos = props.videos.map(function (vid) {
//     return (
//       <Vid
//         videoTitle={vid.videoTitle}
//         videoAuthor={vid.videoAuthor}
//         videoImage={vid.videoImage}
//       />
//     );
//   });
//   return <>{videos}</>;
// }

// function Vid(props) {
//   return (
//     <div className="video">
//       <div className="video__image">{props.videoImage}</div>
//       <div className="video__content">
//         <div className="video__title">{props.videoTitle}</div>
//         <div className="video__author">{props.videoAuthor}</div>
//       </div>
//     </div>
//   );
// }
