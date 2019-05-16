import React from "react";
import Mohan from "../assets/Images/Mohan-muruge.jpg";
import CommentForm from "./CommentForm";

class Comments extends React.Component {
  render() {
    const commentsT = this.props;
    const commentsNb = commentsT.length;
    const commentsContent = this.props.commentsT;
    const updatecoms = this.props.updatecoms;
    console.log(this.props);

    if (Object.keys(commentsT).length === 0) return <div>loading...</div>;

    return (
      <>
        <div className="comments">
          <div className="comments__title">{commentsNb} Comments</div>
          <h4>JOIN THE CONVERSATION </h4>
          <CommentForm updatecoms={this.props.updatecoms} />
          <CommentList commentsContent={commentsContent} />
        </div>
      </>
    );
  }
}
const CommentList = props => {
  const { commentsContent } = props;
  console.log(commentsContent);
  const commentslist = commentsContent.map(com => {
    if (Object.keys(CommentList).length !== 0);
    return (
      <>
        <div className="comments__table">
          <div className="published">
            <div className="published__img">
              <div className="published__icon">{""}</div>
            </div>
            <div className="published__body">
              <p className="username">{com.name}</p>
              <p className="date">{com.timestamp}</p>
              <div className="input">{com.comment}</div>
            </div>
          </div>
        </div>
      </>
    );
  });
  return <div>{commentslist}</div>;
};

export default Comments;
