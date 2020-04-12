import React, { useState } from "react";
import './Filter.css'

// create button to remove all filters

export default function Filter({ filters, setFilters }) {

  const [filterCategoryValue, setFilterCategoryValue] = useState()
  const [filterPrivacyValue, setFilterPrivacyValue] = useState()
  const [filterLocationValue, setFilterLocationValue] = useState()


  const onFilterCategoryChange = (evt) => {
    setFilterCategoryValue(evt.target.value)
  }
  const onFilterPrivacyChange = (evt) => {
    setFilterPrivacyValue(evt.target.value)
  }
  const onFilterLocationChange = (evt) => {
    setFilterLocationValue(evt.target.value)
  }

  const handleSubmit = function(evt) {
    evt.preventDefault()
    const allFilters = {}

    if(filterCategoryValue) {
      allFilters['category'] = filterCategoryValue
    } 
    if(filterPrivacyValue) {
      allFilters['privacy'] = filterPrivacyValue
    }
    if(filterLocationValue) {
      allFilters['location'] = filterLocationValue
    }
    // console.log(allFilters)
    setFilters(allFilters)
  }

  return (
    
    <div className="filter-section">
      <form onSubmit={handleSubmit}>
      {/* <label id="choose-category" >Choose a category</label> */}
      <select id="filter-categories" value={filterCategoryValue} onChange={onFilterCategoryChange}>
        <option defaultValue value="all"> -- select a category -- </option>
        <option value="incubators">Incubators</option>
        <option value="corporate">Corporate Innovation Lab</option>
        <option value="technology">Technology & Science Park</option>
        <option value="entrepreneurship">Entrepreneurship Support Organization</option>
        <option value="venture-capital">Venture Capital</option>
        <option value="university">University</option>
        <option value="high-school">High School</option>
        <option value="government">Government</option>
      </select>
      <div>
        <input
          type="radio"
          id="public"
          name="public private"
          value="public"
          onChange={onFilterPrivacyChange}
          // checked
        ></input>
        <label for="public">Public</label>
        <input
          type="radio"
          id="private"
          name="public private"
          value="private"
          onChange={onFilterPrivacyChange}
        ></input>
        <label for="Private">Private</label>
      </div>
      <div>
        <input
          type="radio"
          id="all"
          name="all local"
          // value="all"
          onChange={onFilterLocationChange}
          defaultValue="all"
        ></input>
        <label for="all">All</label>
        <input
          type="radio"
          id="private"
          name="all local"
          value="local"
          onChange={onFilterLocationChange}
        ></input>
        <label for="Local">Local</label>
      </div>
      <button type="submit">Apply filters</button>
    </form>
    </div>
  );
}
