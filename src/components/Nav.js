import React from 'react';
import { navigationItems } from '../data/Nav_Data.js';
import "./Nav.css"
import { randomKeyGenerator } from '../helpers/Helper_Functions'

// map through data in NavData to get a list of all nav items
const allNavItems = navigationItems.map(nav => {
  const { name, src, alt } = nav
  return(
    <a href="www.google.ca" className="nav-item">
      <li key={randomKeyGenerator()} >
        <div className="nav-icon-">
          <img alt={alt} src={src}></img>
        </div>
        <div className="nav-title">
          {name}
        </div>
    </li>

    </a>
  )
})

export default function Nav() {

  return(
    <nav className="navigation">
        <ul>
         {allNavItems}
        </ul>
      </nav>
  )
}