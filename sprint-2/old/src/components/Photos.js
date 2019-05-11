import React from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";

const API_KEY =
  "ca97c068a93323c9834dc603947e06792959cee1d06a09b316bfa50ffa1c1679";
const photosUrl = `https://api.unsplash.com/photos/?client_id=${API_KEY}`;

class App extends React.Component {
  state = {
    photos: []
  };

  componentDidMount() {
    axios.get(photosUrl).then(response => {
      this.setState({
        photos: response.data
      });
    });
  }

  render() {
    const { photos } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact render={() => <Photos photos={photos} />} />
        </Switch>
      </div>
    );
  }
}

const Photos = props => {
  const { photos } = props;
  const photoList = photos.map(photo => {
    return (
      <section className="photo">
        <div className="photo__image">
          <img src={photo.urls.thumb} />
        </div>
        <div className="photo__title" />
        <div className="photo__description">
          {photo.description || photo.alt_description}
        </div>
        <div className="photo__user">{photo.user.name}</div>
      </section>
    );
  });

  return <div>{photoList}</div>;
};

class User extends React.Component {
  state = {
    user: {}
  };

  componentDidMount() {}

  render() {
    const { user } = this.state;
    if (Object.keys(user).length === 0) return <div>Loading...</div>;
    return (
      <div className="user">
        <h1>User Info</h1>
        <div>
          <label>Name:</label> {user.name}
        </div>
        <div>
          <label>Number of Followers:</label> {user.followers_count}
        </div>
        <div>
          <label>Bio:</label> {user.bio}
        </div>
        <div>
          <label>Total Photos:</label> {user.total_photos}
        </div>
      </div>
    );
  }
}

export default App;
