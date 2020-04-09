import React from 'react';
import Header from './components/Header.js'
import "./App.css";
import explore from './assets/explore.png'
import project from './assets/my_projects.png'
import labs from './assets/labs.png'
import challenges from './assets/challenges_icn.png'
import achievements from './assets/achievements_icn.png'
import inbox from './assets/inbox.png'
import resources from './assets/nav_resources.png'
import newsfeed from './assets/news_feed.png'
import notifications from './assets/notification.png'
import organizations from './assets/organisation.png'


function App() {
  return (
    <div>
      <Header />
      <nav className="navigation">
        <ul>
          <li>
            <div className="nav-icon">
              <img alt="explore challanges labs projects" src={explore}></img>
            </div>
            <div className="nav-title">
              Explore
            </div>
          </li>
          <li>
            <div className="nav-icon">
              <img alt="explore challanges labs projects" src={explore}></img>
            </div>
            <div className="nav-title">
              Explore
            </div>
          </li>
          <li>
            <div className="nav-icon">
              <img alt="explore challanges labs projects" src={explore}></img>
            </div>
            <div className="nav-title">
              Explore
            </div>
          </li>
          <li>
            <div className="nav-icon">
              <img alt="explore challanges labs projects" src={explore}></img>
            </div>
            <div className="nav-title">
              Explore
            </div>
          </li>
          <li>
            <div className="nav-icon">
              <img alt="explore challanges labs projects" src={explore}></img>
            </div>
            <div className="nav-title">
              Explore
            </div>
          </li>
          <li>
            <div className="nav-icon">
              <img alt="explore challanges labs projects" src={explore}></img>
            </div>
            <div className="nav-title">
              Explore
            </div>
          </li>
          <li>
            <div className="nav-icon">
              <img alt="explore challanges labs projects" src={explore}></img>
            </div>
            <div className="nav-title">
              Explore
            </div>
          </li>
          <li>
            <div className="nav-icon">
              <img alt="explore challanges labs projects" src={explore}></img>
            </div>
            <div className="nav-title">
              Explore
            </div>
          </li>
          <li>
            <div className="nav-icon">
              <img alt="explore challanges labs projects" src={explore}></img>
            </div>
            <div className="nav-title">
              Explore
            </div>
          </li>          <li>
            <div className="nav-icon">
              <img alt="explore challanges labs projects" src={explore}></img>
            </div>
            <div className="nav-title">
              Explore
            </div>
          </li>

        </ul>
      </nav>

    </div>
  );
}

export default App;
