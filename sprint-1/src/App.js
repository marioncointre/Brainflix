import React from "react";
import "./App.css";

function App() {
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

  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
      <div className="comments">
        <CommentDiv />
        <CommentList comments={commentsTable} />
      </div>
      <div class="aside">
        <h2>Next video</h2>
        <VideoList videos={videosTable} />
      </div>
    </div>
  );
}

function Header() {
  return (
    <nav>
      <div class="logo">
        <img src="assets/Logo/Logo-brainflix.svg" />
      </div>
      <div id="searchBar">
        <img src="assets/Icons/PNG/Icon-search.png" />
        <input type="text" name="search" id="search" placeholder="Search" />
      </div>
      <div className="upload">
        <button className="button">+ Upload</button>
        <div class="icon">
          <img src="assets/Images/Mohan-muruge.jpg" />
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <div className="hero">
      <div className="hero__video">
        <img src="assets/Images/video-list-0.jpg" />
      </div>
      <div className="play">
        <img src="assets/Icons/PNG/Icon-play.png" />
      </div>
      <div className="scrubber">
        <img src="assets/Icons/PNG/Icon-scrubber-control.png" />
      </div>
      <div className="fullscreen">
        <img src="assets/Icons/PNG/Icon-fullscreen.png" />
      </div>
      <div className="volume">
        <img src="assets/Icons/PNG/Icon-volume.png" />
      </div>
    </div>
  );
}

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
        <div className="views">
          <img src="assets/Icons/PNG/Icon-views.png" />
          <p>1,001,023</p>
        </div>
        <div className="likes">
          <img src="assets/Icons/PNG/Icon-likes.png" />

          <p>110,985</p>
        </div>
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

function CommentDiv() {
  return (
    <>
      <div className="comment__title">3 Comments</div>
      <Form />
    </>
  );
}

function Form() {
  return (
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
  );
}

function CommentList(props) {
  const comments = props.comments.map(function(com) {
    return (
      <Com
        nameIcon={com.nameIcon}
        commentDate={com.commentDate}
        userName={com.userName}
        commentInput={com.commentInput}
      />
    );
  });
  return <div class="comments-table">{comments}</div>;
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

/*Aside section - ends */

export default App;
