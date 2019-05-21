import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import App from "../App";
import Header from "./Header";
import preview from "../assets/Images/Upload-video-preview.jpg";

class VideoUploader extends React.Component {
  render(props) {
    return (
      <>
        <Header />
        <div className="video__uploader">
          <h1>Upload Video</h1>
          <div className="video__content">
            <VideoThumbnail />
            <VideoForm addVideo={this.props} />
          </div>
        </div>
      </>
    );
  }
}

function VideoThumbnail() {
  return (
    <div className="video__example">
      <label>VIDEO THUMBNAIL</label>
      <img src={preview} alt="preview" />
    </div>
  );
}

function VideoForm(props) {
  const home = "/";
  const submitHandler = event => {
    event.preventDefault();
    const evttitle = event.target.videotitle;
    const evtdescr = event.target.videodescription;
    axios.post("http://localhost:5000/videos/", {
      title: evttitle.value, //body of request
      description: evtdescr.value
    });
    evttitle.value = "";
    evtdescr.value = "";
    return (window.location.href = home);
  };
  const Previous = event => {
    window.location.href = home;
  };

  return (
    <>
      <form onSubmit={submitHandler} onReset={Previous}>
        <label>Title your video</label>
        <input
          type="text"
          name="videotitle"
          id="videotitle"
          placeholder="Add a title to your video"
        />
        <label>Add a video description</label>
        <textarea
          name="videodescription"
          id="videodescription"
          placeholder="Add a description of your video"
        />
        <div className="form__buttons">
          <button id="publish">PUBLISH</button>
          <button type="reset" id="cancel">
            CANCEL
          </button>
        </div>
      </form>
    </>
  );
}

export default VideoUploader;
