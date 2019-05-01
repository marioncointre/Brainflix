import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
      <CommentList />
      <div className="comments-table">
        <Comments comment={commentsTable} />
      </div>
      <div className="videoList">
        <h3>Next Video</h3>
      </div>
      <VideoTest videoConst={videos} />
      <Aside />
    </div>
  );
}

function Header() {
  return (
    <nav>
      <div>
        <img src="assets/Images/Mohan-muruge.jpg" />
      </div>
      <div id="searchBar" />
      <div className="upload">
        <button className="button">Upload</button>
        <div>Image</div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <div className="hero">
      {/* <iframe src="assets/Video/BrainStation_Video.mp4" /> */}
    </div>
  );
}

/*Aside section - begins */
function Aside() {
  return (
    <>
      <title>Next video</title>
      <VideoList />
    </>
  );
}

function VideoList() {
  return (
    <div className="video">
      <div className="video__image">
        <img src="assets/Images/video-list-0.jpg" />
      </div>
      <div className="video__content">
        <div className="video__title">
          Become A Travel Pro In One Easy Lesson...
        </div>
        <div className="video__author">Scotty Cranmer</div>
      </div>
    </div>
  );
}

const videos = [
  {
    videoTitle: "Become A Travel Pro In One Easy Lesson...",
    videoAuthor: "Scotty Cranmer",
    videoImage: <img src="assets/Images/video-list-0.jpg" />
  },
  {
    videoTitle: "Become A Travel Pro In One Easy Lesson...",
    videoAuthor: "Scotty Cranmer",
    videoImage: <img src="assets/Images/video-list-0.jpg" />
  },
  {
    videoTitle: "Become A Travel Pro In One Easy Lesson...",
    videoAuthor: "Scotty Cranmer",
    videoImage: <img src="assets/Images/video-list-0.jpg" />
  },
  {
    videoTitle: "Become A Travel Pro In One Easy Lesson...",
    videoAuthor: "Scotty Cranmer",
    videoImage: <img src="assets/Images/video-list-0.jpg" />
  },
  {
    videoTitle: "Become A Travel Pro In One Easy Lesson...",
    videoAuthor: "Scotty Cranmer",
    videoImage: <img src="assets/Images/video-list-0.jpg" />
  },
  {
    videoTitle: "Become A Travel Pro In One Easy Lesson...",
    videoAuthor: "Scotty Cranmer",
    videoImage: <img src="assets/Images/video-list-0.jpg" />
  }
];

function VideoTest(props) {
  const videoConst = props.videoConst.map(function(vid) {
    return (
      <Vid2
        videoTitle={videos.videoTitle}
        videoAuthor={videos.videoAuthor}
        videoImage={videos.videoImage}
      />
    );
  });
  return <div>{videoConst}</div>;
}

function Vid2(props) {
  return (
    <div className="video">
      <div className="video__image">{videos.videoImage}</div>
      <div className="video__content">
        <div className="video__title">{videos.videoTitle}</div>
        <div className="video__author">{videos.videoAuthor}</div>
      </div>
    </div>
  );
}

/*Aside section - ends */

/*Main section - begins */

function Main() {
  return (
    <div className="main">
      <Title />
      <Paragraph />
    </div>
  );
}

function Title() {
  return (
    <div className="title">
      <h1>BMX Rampage: 201 Highlights 1</h1>
      <div className="author">
        <h2>By Red Cow</h2>
        <p>12/18/2018</p>
      </div>
      <div className="stats">
        <p>1,001,023</p>
        <p>110,985</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="description">
      On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew
      the doors off what is possible on two wheels, unleashing some of the
      biggest moments the sport has ever seen. While mother nature only allowed
      for one full run before the conditions made it impossible to ride, that
      was all that was needed for event veteran Kyle Strait, who won the event
      for the second time -- eight years after his first Red Cow Rampage title
    </div>
  );
}

function CommentList() {
  return (
    <>
      <div className="comment__title">3 Comments</div>
      <Form />
    </>
  );
}

function Form() {
  return (
    <div className="comments">
      <div className="comments__form">
        <div className="comments__form--icon">
          <img src="assets/images/Mohan-muruge.jpg" />
        </div>
        <div className="comments__input">
          <h4>Join the Conversation </h4>
          <form id="myForm" action="submit" method="post">
            <div className="formComment">
              <textarea
                name="Comment"
                id="Comment"
                rows="7"
                placeholder=" That was easily the most spectacular BMX moment ever."
              />
            </div>
            <button id="Btn" type="submit">
              Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const commentsTable = [
  {
    nameIcon: "",
    commentDate: "12/18/2018",
    userName: "Micheal Lyons",
    commentInput:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
  },
  {
    nameIcon: "",
    commentDate: "12/18/2018",
    userName: "Gary Wong",
    commentInput:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
  },
  {
    nameIcon: "",
    commentDate: "11/15/2018",
    userName: "Theodore Duncan",
    commentInput:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
  }
];

function Comments(props) {
  const comment = props.comment.map(function(com) {
    return (
      <Com
        nameIcon={com.nameIcon}
        commentDate={com.commentDate}
        userName={com.userName}
        commentInput={com.commentInput}
      />
    );
  });

  return { comment };
}

function Com(props) {
  return (
    <div className="comments__published">
      <div className="comments__img">
        <div className="comments--icon">{props.nameIcon}</div>
      </div>
      <div className="comments__body">
        <div className="username">{props.userName}</div>
        <div className="date">{props.commentDate}</div>
        <div className="input">{props.commentInput}</div>
      </div>
    </div>
  );
}

/*Aside section - ends */

export default App;
