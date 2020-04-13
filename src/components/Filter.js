import React, { useState } from "react";
import './Filter.css';
import Button from './Button.js';
// fix the filter functionality
// have the apply filters be disabled until the state changes

export default function Filter({ filters, setFilters }) {

  const [filterCategoryValue, setFilterCategoryValue] = useState(undefined)
  const [filterPrivacyValue, setFilterPrivacyValue] = useState(undefined)
  const [filterLocationValue, setFilterLocationValue] = useState(undefined)

  const onFilterCategoryChange = (evt) => {
    setFilterCategoryValue(evt.target.value)
  }
  const onFilterPrivacyChange = (evt) => {
    setFilterPrivacyValue(evt.target.value)
    console.log('new privacy state', filterPrivacyValue)
  }
  const onFilterLocationChange = (evt) => {
    setFilterLocationValue(evt.target.value)
  }
  
  let allFilters = {...filters}

  const handleSubmit = function(evt) {
    evt.preventDefault()

    if(filterCategoryValue) {
      allFilters['category'] = filterCategoryValue
    } 
    if(filterPrivacyValue) {
      allFilters['privacy'] = filterPrivacyValue
    }
    if(filterLocationValue) {
      allFilters['location'] = filterLocationValue
    }
    console.log(allFilters)
    setFilters(allFilters)
  }

  // clears filters
  const clearFilters = () => {
    setFilterCategoryValue(undefined)
    setFilterLocationValue(undefined)
    setFilterPrivacyValue(undefined)
    console.log('hit clearFitlersFunction')
    setFilters({})
    console.log('fitlers after clear', filters)
  }

  return (
    <div className="filter-section">
      <form onSubmit={handleSubmit}>
      <select id="filter-categories" value={filterCategoryValue} onChange={onFilterCategoryChange}>
        <option defaultValue value=""> -- select a category -- </option>
        <option value="incubator">Incubators</option>
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
          value="all"
          onChange={onFilterLocationChange}
        ></input>
        <label>All</label>
        <input
          type="radio"
          id="private"
          value="local"
          name="all local"
          onChange={onFilterLocationChange}
        ></input>
        <label>Local</label>
      </div>
      <hr id="filters"/>
      <Button name="remove-filters" type="reset" clearFilters={clearFilters}></Button>
      <Button name="apply" type="submit" ></Button>
      {/* <Button name="submit" type="button" ></Button>

      <Button name="follow" type="button" ></Button>
      <Button name="unfollow" type="button" ></Button>
      <Button name="like" type="button" ></Button> */}
    </form>
    </div>
  );
}
