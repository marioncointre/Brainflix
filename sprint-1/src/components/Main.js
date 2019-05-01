import React from "react";

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

export default Main;
