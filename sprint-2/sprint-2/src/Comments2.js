import React from "react";
import Mohan from "./assets/Images/Mohan-muruge.jpg";

class Comments2 extends React.Component {
  render() {
    const commentsTable = this.props;
    console.log(commentsTable);
    const commentsNb = commentsTable.commentsTable.length;
    console.log(commentsNb);
    const commentsContent = this.props.commentsTable;
    console.log(commentsContent);

    if (Object.keys(commentsTable).length === 0) return <div>loading...</div>;

    return (
      <>
        <div className="comments">
          <div className="comments__title">{commentsNb} Comments</div>
          <h4>JOIN THE CONVERSATION </h4>
          <div className="form">
            <img src={Mohan} />
            <form id="myForm" action="submit" method="post">
              <div className="formComment">
                <textarea
                  name="Comment"
                  id="Comment"
                  placeholder=" That was easily the most spectacular BMX moment ever."
                />
              </div>
              <button id="Btn" type="submit">
                COMMENT
              </button>
            </form>
          </div>
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
        <div class="comments__table">
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

export default Comments2;
