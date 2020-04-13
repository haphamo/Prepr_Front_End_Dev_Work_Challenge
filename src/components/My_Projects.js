import React from 'react';
import Button from './Button.js'
import './My_Projects.css'

export default function MyProjects() {
  return(
    <div className="project-section">
      <div className="add-project">
        <Button name="+ Add Project"/>
      </div>
      <div>
        <Button name="My Projects"/>
        <Button name="Invited Projects"/>

      </div>
    </div>

  )
}