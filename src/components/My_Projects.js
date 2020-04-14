import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Button from './Button.js'
import './My_Projects.css'
// import Card from './Card.js'

export default function MyProjects() {
  // const [viewMyProjects, setViewMyProjects] = useState(false)
  const [toggleAddProject, setToggleAddProject] = useState(false)
  // const isActive = function() {
  //   onClick toggle state to be active, onlcik sends a value send the value
  // }

  return(
    <div className="project-section">

      <div className="view-projects">
        <button className="project-button button--selected">My Projects</button>
        <button className="project-button" >Invited Projects</button>
        <button className="project-button" onClick={() => setToggleAddProject(!toggleAddProject)}>+ Add Project</button>
        {/* <Link className="button" to="/add-project">+ Add Project</Link> */}
        
      </div>

      <div className="view">
        {/* <Card type="project"/> */}
        {
          toggleAddProject &&
          <div className="new-project-form">
            Add a New Project
          </div>
        }
      </div>
    </div>

  )
}