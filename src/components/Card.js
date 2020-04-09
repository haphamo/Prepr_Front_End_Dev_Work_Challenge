import React from 'react'
import './Card.css'
import c1 from '../assets/c1.jpg'

export default function Card() {
  return(
    <div className="section">

      <div className="card" >
        <div className="status"> OPEN </div>
        <div className="img-section">
          <img id="challenge-photo" alt="img-preview" src={c1}></img>
        </div>
        <div className="text-section">
          <div className="title">Future Sustainability Challenge</div>
          <div className="description"> Desc: Lorem Ipsom </div>
          <div className="status">View More</div>
        </div>
      </div>

      <div className="card" >
        <div className="img-section">
          <img id="challenge-photo" alt="img-preview" src={c1}></img>
        </div>
        <div className="text-section">
          <div className="title">Front End Developer Work Challenge</div>
          <div className="description">Your task is to redesign a few key pages of the Prepr Network.
        Reimagine and create frontend webpages of the following pages (and possible sub-pages):</div>
          <div className="status">View More</div>
        </div>
      </div>

      <div className="card" >
        <div className="img-section">
          <img id="challenge-photo" alt="img-preview" src={c1}></img>
        </div>
        <div className="text-section">
          <div className="title">COVID-19 Challenge: Low-cost monitoring system for COVID-19 patients</div>
          <div className="description"> NRC is seeking a low cost system (unit cost is less than $25) that can continuously measure temperature, peripheral capillary oxygen saturation (SpO2), blood pressure (BP), pulse and respiration rates, and transmit this information wirelessly to a base station for COVID-19 patient monitoring in locales including ERs, general wards, communities and homes. </div>
          <div className="status">View More</div>
        </div>
      </div>

    </div>
  )
}