import React, { Component } from "react";

class Com extends Component {
  render() {
    const { name, comment, id, likes, timestamp } = this.props;
    return (
      <>
        <div className="published">
          <div className="published__img">
            <div className="published__icon">{""}</div>
          </div>
          <div className="published__body">
            <p className="username">{name}</p>
            <p className="date">{timestamp}</p>
            <div className="input">{comment}</div>
          </div>
        </div>
      </>
    );
  }
}

export default Com;
