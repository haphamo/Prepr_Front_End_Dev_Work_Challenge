import React from 'react';
import { Link } from "react-router-dom";
import { categoryDataFromNavData, randomKeyGenerator } from '../helpers/Helper_Functions.js'
import { navigationItems } from "../data/Nav_Data.js";
import './Category_Button.css'

export default function CategoryButton(props) {
 
  const categoryButtons = navigationItems.filter(categoryDataFromNavData)
  // Just sorts so the order of the categories, is Challenges, Labs, and Projects
  categoryButtons.sort((a, b) => {
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
  })

  const allCategoryButtons = categoryButtons.map(category => {
    const { name, src, alt, path } = category

    // function that determines active state based off the path(URL)
    const active = function(path) {
      if(props.path === path) {
        return `--selected`
      }
      return ""
    }

    return(
      // In the path name in the link of the category buttons, explore goes to '/' while labs and projects goes to /name
      <div key={randomKeyGenerator()} className={`category category${active(path)}`}>
        {name === "Challenges" ? 
          <Link to={`/${path}`}  >
            {name.toUpperCase()}
          </Link> 
          : 
          <Link to={`/${name.toLowerCase()}`} >
            {name.toUpperCase()}
          </Link>}
      </div>
    )
  })

  return(
    <div className="category-container">
      {allCategoryButtons}
    </div>
  )
}