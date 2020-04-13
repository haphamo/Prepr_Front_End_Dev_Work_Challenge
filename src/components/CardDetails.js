import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom'; 
import { data } from '../data/Explore_Data.js';
import './CardDetails.css'
import Tags from './Tags.js'
import Button from './Button.js'

// Determine that open and closed state by finding the date and the deadline date
// the tags are a tags to view other cards

export default function CardDetails() {
  let { id } = useParams()

  const dataForCardDetails = Object.values(data).filter(item => item.id === parseInt(id))
  const { status, type, title, summary, startDate, endDate, src, createdOn } = (dataForCardDetails[0])
  return(
    <div className="card-details-container">
      <div className="top-section">
        <div className="top-section-header">
          <div id="card-details-title">{title}</div>
          {status && <div className={`status ${status}`}>{status.toUpperCase()}</div>}
          {/* <Button name={status} type="button" ></Button> */}
        </div>
        <div className="top-section-body">
          <div className="cover-photo">
            <img id="cover-photo" src={src} alt={`${type} preview cover`}></img>
          </div>
          <div className="info-card">
            <div className="summary">{summary}</div>
            {type === "challenge" && 
              <Fragment>
                <div className="start-date">Start Date: {startDate} </div>
                <div className="deadline-date">Submission Deadline Date: {endDate}</div>
                <div className="scoring"></div>
                <div className="requirements"></div>
              </Fragment>
            }
            {type === "lab" && 
              <div className="created-on">Created On: {createdOn}</div>
            }
          </div>
        </div>
        <div className="top-section-footer">
          <div className="challenge-tags">
              <Tags />
              
          </div>
        </div>
      </div>
    </div>
  )
}