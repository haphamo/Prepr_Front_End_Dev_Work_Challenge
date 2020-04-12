import React from 'react';
import './Tags.css'

export default function Tags() {
  const fixture = ['tagOne', 'tagTwo', 'tagThree']
  const allTags = fixture.map(tag => {
    return(
      <div className="tag">
        {tag}
      </div>
    )
  })
  return(
    <div className="all-tags">
      {allTags}
    </div>
  )
    
}