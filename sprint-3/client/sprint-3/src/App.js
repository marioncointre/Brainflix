import React from "react";
import axios from "axios";
import "./css/app.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Comments from "./Components/Comments";
import VideoList from "./Components/containers/VideoList";
import Description from "./Components/Description";

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
      commentsT: []
    }
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/`)

      .then(response => {
        console.log(response.data);
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

        axios
          .get(`http://localhost:5000/videos/1af0jruup5gu`)
          .then(response => {
            this.setState({
              singleVid: {
                title: response.data[0].title,
                channel: response.data[0].channel,
                description: response.data[0].description,
                image: response.data[0].image,
                timestamp: response.data[0].timestamp,
                views: response.data[0].views,
                likes: response.data[0].likes,
                commentsT: response.data[0].comments
              }
            });
          });
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.videoid !== prevProps.videoid) {
      axios
        .get(`http://localhost:5000/videos/${this.props.videoid}`)
        .then(response => {
          this.setState({
            singleVid: {
              title: response.data[0].title,
              channel: response.data[0].channel,
              description: response.data[0].description,
              image: response.data[0].image,
              timestamp: response.data[0].timestamp,
              views: response.data[0].views,
              likes: response.data[0].likes,
              commentsT: response.data[0].comments
            }
          });
        });
    }
  }

  updatecoms = comment => {
    const newComment = {
      comment: comment,
      id: "",
      likes: 0,
      name: "Mohan"
      // timestamp: new Date()
    };
    this.state.singleVid.commentsT.push(newComment);

    return this.setState({
      singleVid: {
        ...this.state.singleVid,
        commentsT: this.state.singleVid.commentsT
      }
    });
  };

  render() {
    console.log(this.state.singleVid);

    return (
      <>
        <div className="App">
          <Header />
          <Hero singleVid={this.state.singleVid} />
          <div className="section">
            <div className="main">
              <Description singleVid={this.state.singleVid} />
              <Comments
                commentsT={this.state.singleVid.commentsT}
                updatecoms={this.updatecoms}
              />
            </div>
            <VideoList
              videos={this.state.videos}
              videoid={this.state.singleVid.videoid}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
