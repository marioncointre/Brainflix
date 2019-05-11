import React from "react";
import axios from "axios";

class VideoPage extends React.Component {
  state = {
    videopage: {}
  };

  componentDidMount() {
    const videoidUrl = `https://project-2-api.herokuapp.com/videos/${
      this.props.videoid
    }?api_key=labKey`;

    axios.get(videoidUrl).then(response => {
      this.setState({
        videopage: response.data
      });
    });
  }

  render() {
    const { videopage } = this.state;
    if (Object.keys(videopage).length === 0) return <div>Loading...</div>;
    return (
      <div className="user">
        <h1>User Info</h1>
        <div>
          <label>Name:</label> {videopage.title}
        </div>
      </div>
    );
  }
}
export default VideoPage;
