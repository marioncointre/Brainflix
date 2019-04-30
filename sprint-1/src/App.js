import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Aside />
      <CommentList />
    </div>
  );
}

function Header() {
  return (
    <nav>
      <div>
        <img src="../src/assets/Logo/Logo-brainflix.png" />
        <img src="/Users/MarionC/Desktop/Brainstation/Projects/4.Brainflix/sprint-1/src/assets/Logo//Logo-brainflix.png" />
      </div>
      <div>Searchbar</div>
      <button>Upload</button>
      <div>Image</div>
    </nav>
  );
}

function Hero() {
  return <div>video</div>;
}

/*Aside section - begins */
function Aside() {
  return (
    <div>
      <title>Next vide</title>
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  );
}

function Video() {
  return (
    <div class="video">
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
    <div>
      <Title />
      <Paragraph />
    </div>
  );
}

function Title() {
  return (
    <div>
      <div>Title</div>
      <div>Author</div>
      <div>Dates</div>
      <div>Views</div>
      <div>Likes</div>
    </div>
  );
}

function Paragraph() {
  return <div>Paragraph</div>;
}

function CommentList() {
  return (
    <div>
      <div>nb of comments</div>
      <Form />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
}

function Form() {
  return (
    <div>
      <div>title</div>
      <div>image</div>
      <div>input</div>
      <div>button</div>
    </div>
  );
}

function Comment() {
  return <div>API request</div>;
}

/*Aside section - ends */

export default App;
