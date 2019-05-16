import React from "react";

class Hero extends React.Component {
  render() {
    const singleVid = this.props.singleVid;
    return (
      <>
        <div className="hero">
          <div className="hero__video">
            <div className="bigVid">
              <video width="100%" poster={singleVid.image}>
                <source src="" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Hero;
