import React from "react";
import Mohan from "../assets/Images/Mohan-muruge.jpg";

class CommentForm extends React.Component {
  render() {
    const updatecoms = this.props.updatecoms;

    const submitHandler = event => {
      event.preventDefault();
      const commentinput = event.target;
      updatecoms(commentinput.Comment.value);
      commentinput.Comment.value = "";
    };

    return (
      <>
        <div className="form">
          <div className="form__title">
            <h4>JOIN THE CONVERSATION </h4>
          </div>
          <div className="form__input">
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
        </div>
      </>
    );
  }
}
// function createComment(comment) {
//   axios
//     .post(`http://localhost:5000/videos/${this.props.videoid}` {
//       comment: comment,
//     })
//     .then(response => {
//       comments.push(response.data);
//       document.getElementById("myForm").reset();
//       displayComments(comments);
//     })
//     .catch(error => {
//       console.log("404 error");
//     });
// }

export default CommentForm;
