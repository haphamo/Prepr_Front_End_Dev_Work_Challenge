import React from 'react'
import './Card.css'
import { data } from '../data/Explore_Data.js'

// create a function that displays a certain amount of the desc on the explore page
// have the Like (interest) button on the cards as well
// Stretch: Date Format

// get all challenges card
// console.log(data)
// console.log(Object.values(data))
const allValues = Object.values(data)
const allChallenges = allValues.filter(item => item.type === 'challenge')
// console.log(allChallenges)

const first = allChallenges[0]

const shortenedSummaryForCardDisplay = function(summary) {
  return `${first.summary.slice(0, 150)}...`
}

// console.log(shortenedSummaryForCardDisplay(first)) 

export default function Card() {
  return(
    <div className="section">
      <div className="card" id="card-section">
        <div className="status"> {first.status.toUpperCase()} </div>
        <div className="img-section">
          <img id="challenge-photo" alt="img-preview" src={first.src}></img>
        </div>
        <div className="text-section">
          <div className="title">{first.title}</div>
          <div className="description"> {shortenedSummaryForCardDisplay(first.summary)} </div>
          <div className="status">View More</div>
        </div>
      </div>
    </div>
  )
}