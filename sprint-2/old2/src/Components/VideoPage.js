import React from "react";
import axios from "axios";
import Header from "./Header";
import MainContainer from "./MainContainer";
// import VideoList from "../VideoList";
import viewsIcon from "../assets/Icons/SVG/Icon-views.svg";
import likesIcon from "../assets/Icons/SVG/Icon-likes.svg";

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
    const { videoList } = this.props;
    const { videopage } = this.state;
    if (Object.keys(videopage).length === 0) return <div>Loading...</div>;
    return (
      <>
        <Header />
        <MainContainer videopage={videopage} />
        {/* <VideoList /> */}
      </>
    );
  }
}
export default VideoPage;
