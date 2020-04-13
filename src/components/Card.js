import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./Card.css";
import { data } from "../data/Explore_Data.js";
import {
  shortenedSummaryForCardDisplay,
  getSpecificData,
} from "../helpers/Helper_Functions.js";
// import CardDetails from './CardDetails.js'

// create a function that displays a certain amount of the desc on the explore page
// have the Like (interest) button on the cards as well
// Stretch: Date
// Come back to fix Layout flex start alignment
// add the remaining footer items in browse challenges
// only display open items ?? 

export default function Card({ type, filters }) {
    let { url } = useRouteMatch();
  // filter data for all entries with the given type
  const categoryData = getSpecificData(data, type);

  // filter again with the filters prop
  const result = categoryData.filter(function (item) {
    for (let key in filters) {
      // console.log(key)
      // console.log(item)
      // console.log(item[key])
      // console.log(filters[key])
      if (item[key] === undefined || item[key] !== filters[key]) return false;
    }
    return true;
  });

  const displaySpecificData = result.map((element) => {
    const { id, status, src, title, summary, type, privacy } = element;
    return (
      <div className="card" id="card-section" key={id}>
        <div className="status-with-img">
          <div className={`card-status ${status}`}>{status.toUpperCase()} </div>
          <div className="img-section">
            <img id="challenge-photo" alt="img-preview" src={src}></img>
          </div>
          <div className="text-section">
            <div className="title">{title}</div>
            <div className="description">
              {shortenedSummaryForCardDisplay(summary)}
            </div>
          </div>
        </div>
        {type === 'challenge' ?  
                                <Link to={`/${type}s/challenge/${id}`}>
                                  <div className="view-more">View More</div>
                                </Link> :         
                                <Link to={`${url}/${type}/${id}`}>
                                  <div className="view-more">View More</div>
                                </Link>
        }

      </div>
    );
  });

  // console.log('path',path)
  // console.log('url',url)
  return (
    <div>
      <div>
        {result.length > 0 ?  <div className="section">{displaySpecificData}</div> : <div>There are no {`${type}s`} available!</div>}
      </div>
    </div>
  )
}
