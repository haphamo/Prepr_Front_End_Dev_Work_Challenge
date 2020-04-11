import React from 'react'
import './Card.css'
import { data } from '../data/Explore_Data.js'
import { shortenedSummaryForCardDisplay, getSpecificData } from '../helpers/Helper_Functions.js'

// create a function that displays a certain amount of the desc on the explore page
// have the Like (interest) button on the cards as well
// Stretch: Date 
// Come back to fix Layout flex start alignment

export default function Card({ type, filters }) {
  console.log(filters)
  // filter data for all entries with the given type
  const categoryData = getSpecificData(data, type)

  // filter again with the filters prop
  const result = categoryData.filter(function(item) {
    for (let key in filters) {

      if(item[key] === undefined || item[key] !== filters[key])
      return false

      
    }
    return true
  })

  // console.log(result)
  const displaySpecificData = result.map(element => {
    const { id, status, src, title, summary } = element
    return(
        <div className="card" id="card-section" key={id}>
          <div className="status-with-img">
            <div className="status"> {status.toUpperCase()} </div>
            <div className="img-section">
              <img id="challenge-photo" alt="img-preview" src={src}></img>
            </div>
          <div className="text-section">
            <div className="title">{title}</div>
            <div className="description"> {shortenedSummaryForCardDisplay(summary)} </div>
          </div>
        </div>
          <div className="status">View More</div>
      </div>
    )
  })


  return(
    <div className="section">
     {displaySpecificData}
    </div>
  )
}