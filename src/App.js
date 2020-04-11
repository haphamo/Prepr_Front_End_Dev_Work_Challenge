import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Card from "./components/Card.js";
import Filter from "./components/Filter.js"
import CategoryButton from "./components/CategoryButton.js";
import "./App.css";
import { categoryDataFromNavData } from "./helpers/Helper_Functions.js";
import CardDetails from './components/CardDetails.js';

function App() {
  const [filters, setFilters] = useState({})
 
  return (
    <div>
      <Header />
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <CategoryButton path=""/>
            <Filter filters={filters} setFilters={setFilters}/>
            <Card type="challenge" filters={filters}/>
          </Route>
          <Route exact path="/labs">
            <CategoryButton path="labs" />
            <Filter filters={filters} setFilters={setFilters}/>
            <Card type="lab"/>
          </Route>
          <Route exact path="/projects">
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
