import React from "react";

const commentsTable = [
  {
    nameIcon: "",
    commentDate: "12/18/2018",
    userName: "Micheal Lyons",
    commentInput:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
  },
  {
    nameIcon: "",
    commentDate: "12/18/2018",
    userName: "Gary Wong",
    commentInput:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
  },
  {
    nameIcon: "",
    commentDate: "11/15/2018",
    userName: "Theodore Duncan",
    commentInput:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
  }
];

function Comments() {
  return (
    <div className="comments">
      <CommentDiv />
      <CommentList comments={commentsTable} />
    </div>
  );
}

function CommentDiv() {
  return (
    <>
      <div className="comments__title">3 Comments</div>
      <Form />
    </>
  );
}

function Form() {
  return (
    <>
      <h4>JOIN THE CONVERSATION </h4>
      <div className="form">
        <img src="assets/images/Mohan-muruge.jpg" />
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
    </>
  );
}

function CommentList(props) {
  const comments = props.comments.map(function(com) {
    return (
      <Com
        nameIcon={com.nameIcon}
        commentDate={com.commentDate}
        userName={com.userName}
        commentInput={com.commentInput}
      />
    );
  });
  return <div className="comments__table">{comments}</div>;
}

function Com(props) {
  return (
    <div className="published">
      <div className="published__img">
        <div className="published__icon">{props.nameIcon}</div>
      </div>
      <div className="published__body">
        <p className="username">{props.userName}</p>
        <p className="date">{props.commentDate}</p>
        <div className="input">{props.commentInput}</div>
      </div>
    </div>
  );
}

export default Comments;
