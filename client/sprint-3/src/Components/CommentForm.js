import React from "react";
import Mohan from "../assets/Images/Mohan-muruge.jpg";
import axios from "axios";

class CommentForm extends React.Component {
  render() {
    const commentsForm = this.props.updatecoms;
    console.log(commentsForm);

    const submitHandler = event => {
      event.preventDefault();
      const commentinput = event.target;
      commentsForm(commentinput.Comment.value);
      commentinput.Comment.value = "";
    };

    return (
      <>
        <div className="form">
          <img src={Mohan} />
          <form
            onSubmit={submitHandler}
            id="myForm"
            action="submit"
            method="post"
          >
            <div className="formComment">
              <textarea
                name="Comment"
                id="Comment"
                placeholder=" That was easily the most spectacular BMX moment ever."
              />
            </div>
            <button id="Btn">COMMENT</button>
          </form>
        </div>
      </>
    );
  }
}

// function updatecomments(props) {
//   const submitHandler = event => {
//     event.preventDefault();
//     const form = event.target;

//     props.updatecomments(form.commentInput.value);
//     form.commentInput.value = "";
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <textarea
//         className="form__comment"
//         type="text"
//         name="commentInput"
//         placeholder="That was easily the most spectacular BMX moment ever."
//       />
//       <button className="form__button">COMMENT</button>
//     </form>
//   );

export default CommentForm;
