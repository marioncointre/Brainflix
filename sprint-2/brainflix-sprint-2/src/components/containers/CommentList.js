import React from "react";
import Com_form from "./Com_form";
import Com from "./Com";

class CommentList extends React.Component {
  render() {
    return (
      <>
        <div className="comments">
          <Com_form />
        </div>
        <div>
          {this.props.commentsTable.map(comment => {
            return (
              <Com
                name={comment.name}
                comment={comment.comment}
                id={comment.id}
                channel={comment.channel}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default CommentList;
