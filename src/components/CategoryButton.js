import React from 'react';
import './CategoryButton.css'

export default function CategoryButton() {
  return(
    <div className="category-container">
      <div className="category">
        Challenges
      </div>
      <div className="category">
        Projects
      </div>
      <div className="category">
        Labs
      </div>
    </div>
  )
}