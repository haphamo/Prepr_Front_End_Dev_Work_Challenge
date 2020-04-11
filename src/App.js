import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Card from "./components/Card.js";
import CategoryButton from "./components/CategoryButton.js";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Nav />
        
        <Switch>
          <Route exact path="/">
            <CategoryButton path=""/>
            <Card type="challenge" />
          </Route>
          <Route path="/labs">
            <CategoryButton path="labs"/>
            <Card type="lab" />
          </Route>
          <Route path="/projects">
            <CategoryButton path="projects"/>
            <Card type="project" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

/*
Routes:
/ (explore)
/projects
/labs
/challenges
/challenges/:challengeId
 */

export default App;
