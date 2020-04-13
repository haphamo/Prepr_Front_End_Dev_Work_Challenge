import React from 'react';
import Button from './Button.js'
import './Projects.css'

export default function Projects() {
  return(
    <div className="project-section">
      <Button name="Add Project"/>
      <Button name="My Projects"/>
      <Button name="Invited Projects"/>
    </div>

  )
}