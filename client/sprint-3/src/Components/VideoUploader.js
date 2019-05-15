import React from "react";
import Header from "./Header";
import preview from "../assets/Images/Upload-video-preview.jpg";

class VideoUploader extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="video__uploader">
          <h1>Upload Video</h1>
          <div className="video__content">
            <VideoThumbnail />
            <VideoForm />
          </div>
        </div>
      </>
    );
  }
}

function VideoThumbnail() {
  return (
    <>
      <div className="video__example">
        <label>VIDEO THUMBNAIL</label>
        <img src={preview} />
      </div>
    </>
  );
}

function VideoForm() {
  return (
    <>
      <form>
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
          <button type="button" id="publish">
            PUBLISH
          </button>
          <button type="button" id="cancel">
            CANCEL
          </button>
        </div>
      </form>
    </>
  );
}

export default VideoUploader;
