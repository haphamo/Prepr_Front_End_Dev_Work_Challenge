import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header.js'
import Nav from './components/Nav.js'
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Nav />
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
