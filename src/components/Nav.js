import React from "react";
import { Link } from "react-router-dom";
import { navigationItems } from "../data/Nav_Data.js";
import "./Nav.css";
import { randomKeyGenerator, filteredNav } from "../helpers/Helper_Functions";
import Card from "./Card.js";

// Stretch: Create a toggle nav for mobile version
// map through data in NavData to get a list of all nav items

export default function Nav() {

  const filteredNavData = navigationItems.filter(filteredNav)

  const allNavItems = filteredNavData.map((nav) => {
    const { name, src, alt, path } = nav;
    return (
      <Link to={`/${path}`} key={randomKeyGenerator()}>
        <li key={randomKeyGenerator()}>
          <div className="nav-icon-">
            <img alt={alt} src={src}></img>
          </div>
          <div className="nav-title">{name}</div>
        </li>
      </Link>
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
