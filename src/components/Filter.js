import React, { useState } from "react";
import './Filter.css'

export default function Filter() {
  return (
    
    <div className="filter-section">
      <form>
      <label id="choose-category" for="category">Choose a category</label>
      <select id="filter-categories">
        <option disabled selected value> -- select a category -- </option>
        <option value="Incubators">Incubators</option>
        <option value="Corporate Innovation Lab">Corporate Innovation Lab</option>
        <option value="Technology">Technology & Science Park</option>
        <option value="Entrepreneurship Support Organization">Entrepreneurship Support Organization</option>
        <option value="Venture Capital">Venture Capital</option>
        <option value="University">University</option>
        <option value="High School">High School</option>
        <option value="Government">Government</option>
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
