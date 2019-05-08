import React, { Component } from "react";
import Comment from "./Comment";

class CommentList extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.comments.map(comment => {
          return <Comment name={comment.name} comment={comment.comment} />;
        })}
      </div>
    );
  }
}

export default CommentList;
