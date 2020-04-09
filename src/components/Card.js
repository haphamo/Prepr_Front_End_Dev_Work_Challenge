import React from 'react'
import './Card.css'
import c1 from '../assets/c1.jpg'
import c2 from '../assets/c2.jpg'

// create a function that displays a certain amount of the desc on the explore page

export default function Card() {
  return(
    <div className="section">

      <div className="card" >
        <div className="status"> OPEN </div>
        <div className="img-section">
          <img id="challenge-photo" alt="img-preview" src={c1}></img>
        </div>
        <div className="text-section">
          <div className="title">COVID-19 Challenge - Low-cost monitoring system for COVID-19 patients</div>
          <div className="description"> NRC is seeking a low cost system (unit cost less than $25) that can continuously measure temperature, peripheral capillary oxygen saturation (SpO2), blood pressure (BP), pulse and respiration rates, and transmit... </div>
          <div className="status">View More</div>
        </div>
      </div>

      <div className="card" >
      <div className="status"> OPEN </div>
        <div className="img-section">
          <img id="challenge-photo" alt="img-preview" src={c2}></img>
        </div>
        <div className="text-section">
          <div className="title">COVID-19 Challenge - Point of Care & Home Diagnostic Kit for COVID-19</div>
          <div className="description">The Public Health Agency of Canada (PHAC) and National Research Council (NRC) are seeking a solution that will diagnose individuals affected by COVID-19 within 3 days of the start of their symptoms using a sample, other than a nasopharyngeal 
        </div>
          <div className="status">View More</div>
        </div>
      </div>

      <div className="card" >
      <div className="status"> OPEN </div>
        <div className="img-section">
          <img id="challenge-photo" alt="img-preview" src={c1}></img>
        </div>
        <div className="text-section">
          <div className="title">COVID-19 Challenge: Low-cost monitoring system for COVID-19 patients</div>
          <div className="description"> NRC is seeking a low cost system (unit cost is less than $25) that can continuously measure temperature, peripheral capillary oxygen saturation (SpO2), blood pressure (BP), pulse and respiration rates, and transmit this information wirelessly to a base station for COVID-19 patient monitoring in locales including ERs, general wards, communities and homes. </div>
          <div className="status">View More</div>
        </div>
      </div>

      <div className="card" >
      <div className="status"> OPEN </div>
        <div className="img-section">
          <img id="challenge-photo" alt="img-preview" src={c2}></img>
        </div>
        <div className="text-section">
          <div className="title">COVID-19 Challenge - Point of Care & Home Diagnostic Kit for COVID-19</div>
          <div className="description">The Public Health Agency of Canada (PHAC) and National Research Council (NRC) are seeking a solution that will diagnose individuals affected by COVID-19 within 3 days of the start of their symptoms using a sample, other than a nasopharyngeal 
        </div>
          <div className="status">View More</div>
        </div>
      </div>

    </div>
  )
}