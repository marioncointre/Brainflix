import React from "react";
import Mohan from "../assets/Images/Mohan-muruge.jpg";
import CommentForm from "./CommentForm";

class Comments extends React.Component {
  render() {
    const commentsT = this.props;
    console.log(commentsT);

    const commentsContent = this.props.commentsT;
    const commentsNb = commentsContent.length;
    const updatecoms = this.props.updatecoms;

    if (Object.keys(commentsT).length === 0) return <div>loading...</div>;

    return (
      <>
        <div className="comments">
          <div className="comments__title">
            <h2>{commentsNb} Comments</h2>
          </div>
          <div className="comments__fields">
            <CommentForm updatecoms={this.props.updatecoms} />
            <CommentList commentsContent={commentsContent} />
          </div>
        </div>
      </>
    );
  }
}
const CommentList = props => {
  const { commentsContent } = props;
  console.log(commentsContent);

  const commentslist = commentsContent.map(com => {
    let dateStamp = new Date(com.timestamp);
    dateStamp =
      dateStamp.getDate() +
      "/" +
      (dateStamp.getMonth() + 1) +
      "/" +
      dateStamp.getFullYear();
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
              <p className="date">{dateStamp}</p>
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
