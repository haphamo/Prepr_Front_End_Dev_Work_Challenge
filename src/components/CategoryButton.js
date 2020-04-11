import React from 'react';
import { Link } from "react-router-dom";
import { categoryDataFromNavData, randomKeyGenerator } from '../helpers/Helper_Functions.js'
import { navigationItems } from "../data/Nav_Data.js";
import './CategoryButton.css'

export default function CategoryButton(props) {
 
  const categoryButtons = navigationItems.filter(categoryDataFromNavData)

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
      
      <Link to={`/${path}`} key={randomKeyGenerator()} className={`category${active(path)}`}>
          {name}
      </Link>
    )
  })

  return(
    <div className="category-container">
      {allCategoryButtons}
    </div>
  )
}