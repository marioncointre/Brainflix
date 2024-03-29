import React from "react";
import views from "../assets/Icons/PNG/Icon-views.png";
import likes from "../assets/Icons/PNG/Icon-likes.png";

class Description extends React.Component {
  render() {
    const singleVid = this.props.singleVid;
    let dateStamp = new Date(singleVid.timestamp);
    dateStamp =
      dateStamp.getDate() +
      "/" +
      (dateStamp.getMonth() + 1) +
      "/" +
      dateStamp.getFullYear();

    return (
        <div className="intro">
          <div className="info">
            <h1>{singleVid.title}</h1>
            <div className="title">
              <div className="author">
                <h2>{singleVid.channel}</h2>
                <p>{dateStamp}</p>
              </div>
              <div className="stats">
                <div className="views">
                  <img src={views} alt="views"/>
                  <p>{singleVid.views}</p>
                </div>
                <div className="likes">
                  <img src={likes} alt="likes"/>
                  <p>{singleVid.likes}</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="description">
            <p>{singleVid.description}</p>
          </div>
        </div>
    );
  }
}
export default Description;
