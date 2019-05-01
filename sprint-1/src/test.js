import React from "react";
import "./App.css";

function App() {
  const appTitle = "Jonathan's App";
  const appLinks = ["Home", "Blog", "About", "Contact"];
  const users = [
    {
      firstName: "John",
      lastName: "Smith",
      age: 25
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      age: 35
    },
    {
      firstName: "Suzanne",
      lastName: "Smith",
      age: 45
    },
    {
      firstName: "Suzanne",
      lastName: "Smith",
      age: 45
    },
    {
      firstName: "Suzanne",
      lastName: "Smith",
      age: 45
    }
  ];

  return (
    <div className="App">
      <Header title={appTitle} links={appLinks} />
      <PeopleList people={users} />
    </div>
  );
}

function PeopleList(props) {
  const people = props.people.map(function(person) {
    return (
      <Person
        firstName={person.firstName}
        lastName={person.lastName}
        age={person.age}
      />
    );
  });

  return <div>{people}</div>;
}

function Person(props) {
  return (
    <div>
      {props.firstName} {props.lastName} is {props.age} years old.
    </div>
  );
}

function Header(props) {
  console.log(props);
  const navLinks = props.links.map(function(link) {
    return <a>{link}</a>;
  });
  return (
    <header>
      <h1>{props.title}</h1>
      <nav>{navLinks}</nav>
    </header>
  );
}

export default App;
