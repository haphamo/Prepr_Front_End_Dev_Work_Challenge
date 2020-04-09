import React from 'react';
import PreprLogo from './assets/Prepr-Logo.png'
import searchIcon from './assets/search_icon.png'
import user from './assets/default-user.png'
import "./App.css";

function App() {
  return (
    <div className='header-container'>
      <div className="logo-section">
        <img id="preprLogo" alt="prepr-logo" src={PreprLogo}></img>
      </div>
      <div className="header-right-section">
        <div className="search">
          <img id="search-icon" alt="search-icon" src={searchIcon}></img>
          <form>
            <input id="search-input" type="search" autoFocus="true"></input>
          </form>
        </div>
        <div className="profile">
          <img alt="profile" src={user} id="profile"></img>
        </div>

      </div>

    </div>
  );
}

export default App;
