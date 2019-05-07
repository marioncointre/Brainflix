import React from "react";

// Authentification
// const authentificationKey = axios.get(
//   "https://project-1-api.herokuapp.com/register"
// );

// authentificationKey.then(function(response) {
//   const authkey = response.data.api_key;
// });
// let comArr = axios.get(
//   "https://project-1-api.herokuapp.com/comments?api_key=authkey"
// );

class Comments extends React.Component {
  state = {
    commentsTable: [
      {
        nameIcon: "",
        commentDate: "",
        userName: "",
        commentInput: ""
      }
    ]
  };
  commentsTableFunc() {
    const { comment } = this.props.match.params;
    // get(
    //   `https://project-1-api.herokuapp.com/comments?api_key=authkey${comment}`
    // ).then(comment => {
    //   this.setState(() => ({ comment }));
    // });
  }

  render() {
    return (
      <div className="comments">
        <CommentDiv />
        <CommentList comments={this.state.commentsTable} />
      </div>
    );
  }
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
  const commentList = props.comments.map(function(com) {
    return (
      <Com
        nameIcon={com.nameIcon}
        commentDate={com.commentDate}
        userName={com.userName}
        commentInput={com.commentInput}
      />
    );
  });
  return <div className="comments__table">{commentList}</div>;
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
