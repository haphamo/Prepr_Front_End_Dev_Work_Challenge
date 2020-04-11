import React from 'react';
import { Link } from "react-router-dom";
import { categoryDataFromNavData, randomKeyGenerator } from '../helpers/Helper_Functions.js'
import { navigationItems } from "../data/Nav_Data.js";
import './CategoryButton.css'
// import classnames from 'classnames';


export default function CategoryButton(props) {
 
  console.log(props.path)
  const categoryButtons = navigationItems.filter(categoryDataFromNavData)

  categoryButtons.sort((a, b) => {
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
  })

  const allCategoryButtons = categoryButtons.map(category => {
    const { name, src, alt, path } = category

  //   const categoryClass = classnames("category", {
  //     selected: challenge,
  //     unselected: !challenge,
  //  })
    const active = function(path) {
      if(props.path === path) {
        return `--selected`
      }
      return ""
    }
    return(
      
      <Link to={`/${path}`} key={randomKeyGenerator()} className={`category${active(path)}`}>
        {/* <div className="category"> */}
          {name}
        {/* </div> */}
      </Link>
    )
  })

  return(
    <div className="category-container">
      {allCategoryButtons}
    </div>
  )
}