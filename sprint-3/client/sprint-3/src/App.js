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
      .get(`https://project-2-api.herokuapp.com/videos?api_key=labKey`)
      // .get(`https://localhost:8080/videos`)

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
              commentsT: response.data.comments
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
            commentsT: response.data.comments
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
