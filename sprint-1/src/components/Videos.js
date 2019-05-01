import React from "react";

const videosTable = [
  {
    videoTitle: "Become A Travel Pro In One Easy Lesson...",
    videoAuthor: "Scotty Cranmer",
    videoImage: <img src="assets/Images/video-list-1.jpg" />
  },
  {
    videoTitle: "Les Houches The Hidden Gem Of The...",
    videoAuthor: "Scotty Cranmer",
    videoImage: <img src="assets/Images/video-list-2.jpg" />
  },
  {
    videoTitle: "Travel Health Useful Medical Information...",
    videoAuthor: "Scotty Cranmer",
    videoImage: <img src="assets/Images/video-list-3.jpg" />
  },
  {
    videoTitle: "Cheap Airline Tickets Great Ways To Save",
    videoAuthor: "Emily Harper",
    videoImage: <img src="assets/Images/video-list-4.jpg" />
  },
  {
    videoTitle: "Take A Romantic Break In A Boutique Hotel",
    videoAuthor: "Ethan Owen",
    videoImage: <img src="assets/Images/video-list-5.jpg" />
  },
  {
    videoTitle: "Choose The Perfect Accommodations",
    videoAuthor: "Lydia Perez",
    videoImage: <img src="assets/Images/video-list-6.jpg" />
  },
  {
    videoTitle: "Cruising Destination Ideas",
    videoAuthor: "Timothy Austin",
    videoImage: <img src="assets/Images/video-list-7.jpg" />
  },
  {
    videoTitle: "Train Travel On Track For Safety",
    videoAuthor: "Scotty Cranmer",
    videoImage: <img src="assets/Images/video-list-8.jpg" />
  }
];

function Videos() {
  return (
    <div className="aside">
      <h2>Next video</h2>
      <VideoList videos={videosTable} />
    </div>
  );
}
function VideoList(props) {
  const videos = props.videos.map(function(vid) {
    return (
      <Vid
        videoTitle={vid.videoTitle}
        videoAuthor={vid.videoAuthor}
        videoImage={vid.videoImage}
      />
    );
  });
  return <>{videos}</>;
}

function Vid(props) {
  return (
    <div className="video">
      <div className="video__image">{props.videoImage}</div>
      <div className="video__content">
        <div className="video__title">{props.videoTitle}</div>
        <div className="video__author">{props.videoAuthor}</div>
      </div>
    </div>
  );
}

export default Videos;
