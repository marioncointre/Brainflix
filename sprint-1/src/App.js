import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
      <CommentList />
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
      <title>Next vide</title>
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </>
  );
}

function Video() {
  return (
    <div className="video">
      <div>image</div>
      <div>video title</div>
      <div>video author</div>
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
      <Comment />
      <Comment />
      <Comment />
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
      <div className="comments-table" />
    </div>
  );
}

function Comment() {
  return <>API request</>;
}

/*Aside section - ends */

export default App;
