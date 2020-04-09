import React from 'react';
import { navigationItems } from '../data/NavData.js';
import "./Nav.css"

// map through data in NavData to get a list of all nav items
const allNavItems = navigationItems.map(nav => {
  const { name, src, alt, key} = nav
  return(
    <li key={key}>
      <div className="nav-icon-">
        <img alt={alt} src={src}></img>
      </div>
      <div className="nav-title">
        {name}
      </div>
  </li>
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