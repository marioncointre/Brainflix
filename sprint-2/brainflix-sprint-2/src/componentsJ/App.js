import React, { Component } from "react";
import CommentList from "./CommentList";
import axios from "axios";

class App extends Component {
  state = { comments: [] };
  componentDidMount() {
    axios
      .get("https://project-1-api.herokuapp.com/comments?api_key=labKey")
      .then(response => {
        console.log(response.data);
        this.setState({
          comments: response.data
        });
      });
  }

  render() {
    return (
      <div>
        <h1 className="header">Comments</h1>
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default App;
