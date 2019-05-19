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
// function createComment(comment) {
//   axios
//     .post("https://project-1-api.herokuapp.com/comments?api_key=authkey", {
//       name: name,
//       comment: comment
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
