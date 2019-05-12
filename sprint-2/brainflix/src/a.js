import React from "react";
import "./App.css";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    console.log("componentDidMount");
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      console.log("Axios:", response.data);
      this.setState({
        users: response.data
      });
    });
  }

  render() {
    console.log("Render:", this.state.users);
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link> |<Link to="/about">About</Link>
        </nav>
        <Switch>
          <Route
            path="/"
            exact
            render={props => {
              console.log(props);
              return <HomePage users={this.state.users} />;
            }}
          />
          <Route path="/about/:aboutid" exact component={AboutPage} />
          <Route
            path="/user/:username"
            exact
            render={props => {
              console.log("Route /user/:username:", props);

              // Ensure that we have users before proceeding
              if (this.state.users.length === 0) {
                return <div>Loading...</div>;
              } else {
                // 1. Get username on URL from match.params
                const username = props.match.params.username;
                console.log(username);

                // 2. Look up the user in the user array in state
                const user = this.state.users.find(user => {
                  return user.username === username;
                });

                console.log(user);

                // 3. Return the UserProfile Component with the user
                // information
                return <UserProfilePage user={user} />;
              }
            }}
          />
        </Switch>
      </div>
    );
  }
}

const HomePage = props => {
  const userList = props.users.map(user => {
    return (
      <li>
        <Link to={`/user/${user.username}`}>{user.name}</Link>
      </li>
    );
  });

  return (
    <div>
      <h1>Home</h1>
      <ul>{userList}</ul>
    </div>
  );
};

const AboutPage = () => <h1>About</h1>;

const UserProfilePage = props => {
  return (
    <div>
      <h1>User Profile</h1>
      <h2>Name: {props.user.name}</h2>
      <h3>email: {props.user.email}</h3>
    </div>
  );
};

export default App;
