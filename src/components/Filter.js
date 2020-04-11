import React, { useState } from "react";
import './Filter.css'

export default function Filter() {
  const [categoryValue, setCategoryValue] = useState()
  const onHandleChange = (evt) => {
    console.log(evt.target.value)
  }
  return (
    
    <div className="filter-section">
      <form>
      <label id="choose-category" >Choose a category</label>
      <select id="filter-categories" value={categoryValue} onChange={onHandleChange}>
        <option defaultValue value="all"> -- select a category -- </option>
        <option value="incubators">Incubators</option>
        <option value="corporate innovation Lab">Corporate Innovation Lab</option>
        <option value="technology">Technology & Science Park</option>
        <option value="entrepreneurship support organization">Entrepreneurship Support Organization</option>
        <option value="venture capital">Venture Capital</option>
        <option value="university">University</option>
        <option value="high school">High School</option>
        <option value="government">Government</option>
      </select>
      <div>
        <input
          type="radio"
          id="public"
          name="public private"
          value="public"
          checked
        ></input>
        <label for="public">Public</label>
        <input
          type="radio"
          id="private"
          name="public private"
          value="private"
        ></input>
        <label for="Private">Private</label>
      </div>
      <div>
        <input
          type="radio"
          id="all"
          name="all local"
          value="public"
          checked
        ></input>
        <label for="all">All</label>
        <input
          type="radio"
          id="private"
          name="all local"
          value="local"
        ></input>
        <label for="Local">Local</label>
      </div>
      <button type="submit"> Apply filters</button>
    </form>
    </div>
  );
}
