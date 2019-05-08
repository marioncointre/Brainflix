import React, { Component } from "react";

class Com_form extends Component {
  render() {
    return (
      <>
        <div className="comments__title">3 Comments</div>
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
}
export default Com_form;
