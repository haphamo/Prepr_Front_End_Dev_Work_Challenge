import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { data } from './data/Explore_Data.js'
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Card from "./components/Card.js";
import Filter from "./components/Filter.js"
import CategoryButton from "./components/CategoryButton.js";
import "./App.css";
import { categoryDataFromNavData } from "./helpers/Helper_Functions.js";

function App() {
  // const initialFilterState = {
  //   status: undefined,
  //   privacy: undefined,
  //   category: undefined,
  // }
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
          <Route path="/labs">
            <CategoryButton path="labs" />
            <Card type="lab"/>
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
