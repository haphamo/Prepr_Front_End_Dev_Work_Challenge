import React from 'react';
import { Link } from "react-router-dom";
import { categoryDataFromNavData, randomKeyGenerator } from '../helpers/Helper_Functions.js'
import { navigationItems } from "../data/Nav_Data.js";
import './CategoryButton.css'

export default function CategoryButton() {

  const categoryButtons = navigationItems.filter(categoryDataFromNavData)

  const sorted = categoryButtons.sort((a, b) => {
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
  })


  const allCategoryButtons = categoryButtons.map(category => {
    const { name, src, alt, path } = category
    return(
      <Link to={`/${path}`} key={randomKeyGenerator()}>
        <div className="category">
          {name}
        </div>

      </Link>
    )
  })

  return(
    <div className="category-container">
      {allCategoryButtons}
    </div>
  )
}