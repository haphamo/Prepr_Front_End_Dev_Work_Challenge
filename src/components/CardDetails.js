import React from 'react';
import { useParams } from 'react-router-dom'; 
import { data } from '../data/Explore_Data.js';
import './CardDetails.css'

export default function CardDetails() {
  let { id } = useParams()

  const dataForCardDetails = Object.values(data).filter(item => item.id === parseInt(id))
  const { status, title, summary, startDate, endDate, src } = (dataForCardDetails[0])
  return(
    <div className="card-details-container">
      <div className="top-section">
        <div className="top-section-header">
          <div id="card-details-title">{title}</div>
          <div className="status">{status.toUpperCase()}</div>
        </div>
        <div className="top-section-body">
          <div className="cover-photo">
            <img id="cover-photo" src={src} alt="cover-photo"></img>
          </div>
          <div className="info-card">
            <div className="summary">{summary}</div>
            <div className="start-date">Start Date: {startDate} </div>
            <div className="deadline-date">Submission Deadline Date: {endDate}</div>
            <div className="scoring"></div>
            <div className="requirements"></div>
          </div>

        </div>
        <div className="top-section-footer">
          <div className="challenge-tags">
              TagOne
          </div>
        </div>
      </div>
    </div>
  )
}