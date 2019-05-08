import React, { Component } from "react";
import CommentList from "./CommentList";
import axios from "axios";

const commentsUrl =
  "https://project-1-api.herokuapp.com/comments?api_key=labKey";

class Comments_URL extends Component {
  state = {
    commentsTable: []
  };

  componentDidMount() {
    axios.get(commentsUrl).then(response => {
      const newComments = response.data.map(comment => {
        return {
          name: comment.name,
          comment: comment.comment,
          id: comment.id,
          likes: comment.likes,
          timestamp: comment.timestamp
        };
      });

      this.setState({
        commentsTable: newComments
      });
    });
  }

  render() {
    return (
      <div>
        <h1 className="header">Comments</h1>
        <CommentList commentsTable={this.state.commentsTable} />
      </div>
    );
  }
}

export default Comments_URL;
