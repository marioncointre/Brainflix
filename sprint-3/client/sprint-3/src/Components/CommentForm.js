import React from "react";
import axios from "axios";
import Mohan from "../assets/Images/Mohan-muruge.jpg";

class CommentForm extends React.Component {
  videoid = this.props.videoid;
  render() {
    const submitHandler = event => {
      // event.preventDefault();
      const evtcomment = event.target.cominput;

      axios.post(`http://localhost:5000/videos/${this.props.videoid}`, {
        comment: evtcomment.value
      });
      evtcomment.value = "";
      // window.location.reload();
    };

    return (
      <div className="form">
        <div className="form__title">
          <h4>JOIN THE CONVERSATION </h4>
        </div>
        <div className="form__input">
          <img src={Mohan} alt="Mohan" />
          <form onSubmit={submitHandler} id="myForm">
            <div className="formComment">
              <textarea
                name="cominput"
                id="cominput"
                placeholder="That was easily the most spectacular BMX moment ever."
              />
            </div>
            <button id="Btn">COMMENT</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CommentForm;
