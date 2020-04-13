import React from "react";
import { Link } from "react-router-dom";
import { navigationItems } from "../data/Nav_Data.js";
import "./Nav.css";
import { randomKeyGenerator, filteredNav } from "../helpers/Helper_Functions";

// Stretch: Create a toggle nav for mobile version
// Make Sticky, and add active state styles

export default function Nav() {

  const filteredNavData = navigationItems.filter(filteredNav)

  const allNavItems = filteredNavData.map((nav) => {
    const { name, src, alt, path } = nav;
    return (
      <div className="nav-container" key={randomKeyGenerator()}>
      {name === "Explore" ? <Link to="">
          <li className="nav-list-item">
            <div className="nav-icon-">
              <img alt={alt} src={src}></img>
            </div>
            <div className="nav-title">{name}</div>
          </li>
        </Link> :
        <Link to={`/${name.toLowerCase()}`}>
          <li className="nav-list-item">
            <div className="nav-icon-">
              <img alt={alt} src={src}></img>
            </div>
            <div className="nav-title">{name}</div>
          </li>
        </Link> }
      </div>
    );
  });

  return (
    <div>
      <nav className="navigation">
        <ul>{allNavItems}</ul>
      </nav>
    </div>
  );
}
