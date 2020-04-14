import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Card from "./components/Card.js";
import Filter from "./components/Filter.js"
import CategoryButton from "./components/Category_Button.js";
import "./App.css";
// import { categoryDataFromNavData } from "./helpers/Helper_Functions.js";
import CardDetails from './components/Card_Details.js';
import MyProjects from './components/My_Projects.js'

function App() {
  const [filters, setFilters] = useState({})
 
  return (
    // <div> 
      <Router>
      <Header />
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
            <Card type="lab" filters={filters}/>
          </Route>
          <Route exact path="/projects">
            <CategoryButton path="projects" />
           
            <Card type="project"/>
          </Route>


          <Route path="/projects/project/:id">
            <CardDetails />
          </Route>
          <Route path="/challenges/challenge/:id">
            <CardDetails />
          </Route>
          <Route path="/labs/lab/:id">
            <CardDetails />
          </Route>


          <Route path="/my-projects">
            <MyProjects />
          </Route>
          <Route path="/add-project">
            <div>Hello world</div>
          </Route>
 
        </Switch>
      </Router>
    // </div>
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
