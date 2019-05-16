import React from "react";
import Mohan from "../assets/Images/Mohan-muruge.jpg";
import axios from "axios";

class CommentForm extends React.Component {
  render() {
    const updatecoms = this.props.updatecoms;
    console.log(updatecoms);

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

export default CommentForm;
