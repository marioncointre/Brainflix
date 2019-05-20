import React from "react";
import axios from "axios";
import Header from "./Header";
import preview from "../assets/Images/Upload-video-preview.jpg";

class VideoUploader extends React.Component {
  render(props) {
    console.log(props);
    console.log(this.props);
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
        <img src={preview} alt="preview"/>
      </div>
  );
}

function VideoForm(props) {
  const submitHandler = event => {
    event.preventDefault();
    const eventtitle = event.target.videotitle;
    const eventdescr = event.target.videodescription;
    // console.log(eventtitle.value);
    // console.log(eventdescr.value);

    axios.post("http://localhost:5000/videos/", {
      title: eventtitle.value, //body of request
      description: eventdescr.value
    });
eventtitle.value = "";
eventdescr.value = "";



  };
  return (
    <>
      <form onSubmit={submitHandler}>
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
          <button id="cancel">CANCEL</button>
        </div>
      </form>
    </>
  );
}

export default VideoUploader;
