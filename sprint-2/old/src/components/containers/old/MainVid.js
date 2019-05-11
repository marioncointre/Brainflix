import React, { Component } from "react";
import VideoList from "./VideoList";
import axios from "axios";

class MainVid extends Component {
  state = {
    videos: []
  };

  componentDidMount() {
    axios
      .get("https://project-2-api.herokuapp.com/videos?api_key=authkey")
      .then(response => {
        console.log(response.data);

        const newvideos = response.data.map(video => {
          return {
            id: response.data.id,
            title: response.data.title,
            channel: response.data.channel,
            image: response.data.image
          };
        });

        this.setState({
          videos: newvideos
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.videos} />
        {/* <VideoList videos={this.state.videos} /> */}
      </div>
    );
  }
}

export default MainVid;
