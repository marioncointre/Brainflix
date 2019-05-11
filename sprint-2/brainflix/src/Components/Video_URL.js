import React, { Component } from "react";
import VideoList from "./containers/VideoList";
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
        <VideoList videosTable={this.state.videosTable} />
      </div>
    );
  }
}

export default Video_URL;
