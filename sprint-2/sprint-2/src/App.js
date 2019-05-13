import React from "react";
import axios from "axios";
import "./css/app.css";
import Header from "./Header";
import Hero from "./Hero";
import Comments2 from "./Comments2";
import VideoList from "./VideoList";
import Description from "./Description";

class App extends React.Component {
  state = {
    videos: [],
    singleVid: {
      title: " ",
      channel: " ",
      description: " ",
      image: " ",
      timestamp: " ",
      views: " ",
      likes: " ",
      commentsTables: []
    }
  };

  componentDidMount() {
    axios
      .get(`https://project-2-api.herokuapp.com/videos?api_key=labKey`)
      .then(response => {
        const videosArray = response.data.map(videoArray => {
          return {
            id: videoArray.id,
            title: videoArray.title,
            channel: videoArray.channel,
            image: videoArray.image
          };
        });

        this.setState({
          videos: videosArray
        });

        const videoidUrl = `https://project-2-api.herokuapp.com/videos/${
          response.data[0].id
        }?api_key=labKey`;

        axios.get(videoidUrl).then(response => {
          this.setState({
            singleVid: {
              title: response.data.title,
              channel: response.data.channel,
              description: response.data.description,
              image: response.data.image,
              timestamp: response.data.timestamp,
              views: response.data.views,
              likes: response.data.likes,
              commentsTables: response.data.comments
            }
          });
        });
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.videoid !== prevProps.videoid) {
      const videoidUrl = `https://project-2-api.herokuapp.com/videos/${
        this.props.videoid
      }?api_key=labKey`;
      console.log(this.props.videoid);

      axios.get(videoidUrl).then(response => {
        this.setState({
          singleVid: {
            title: response.data.title,
            channel: response.data.channel,
            description: response.data.description,
            image: response.data.image,
            timestamp: response.data.timestamp,
            views: response.data.views,
            likes: response.data.likes,
            commentsTables: response.data.comments
          }
        });
      });
    }
  }

  render() {
    return (
      <>
        <div className="App">
          <Header />
          <Hero singleVid={this.state.singleVid} />
          <div className="section">
            <div className="main">
              <Description singleVid={this.state.singleVid} />
              <Comments2 commentsTable={this.state.singleVid.commentsTables} />
            </div>
            <VideoList videos={this.state.videos} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
