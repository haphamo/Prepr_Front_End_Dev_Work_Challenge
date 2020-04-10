import React, { useState } from 'react'
import './Card.css'
import { data } from '../data/Explore_Data.js'
import { shortenedSummaryForCardDisplay, getSpecificData } from '../helpers/Helper_Functions.js'

// create a function that displays a certain amount of the desc on the explore page
// have the Like (interest) button on the cards as well
// Stretch: Date 
// Come back to fix Layout flex start alignment

export default function Card() {
  // this state will toggle explore views between Challenges, Projects and Labs.
  const [view, setView] = useState('challenge')

  // Depending on the view state, this will render the data from that view
  const displaySpecificData = getSpecificData(data, view).map(element => {
    const { id, type, status, src, title, summary } = element
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