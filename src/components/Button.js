import React from 'react';
import './Button.css';

export default function Button({ name, type, clearFilters}) {
  // add logic to determine the className to apply appropriate styles
  // Open, close, follow, unfollow, share, submit, like, report
  // join (labs)
  // projects: delete, edit details, Add Project

  return(
    <button type={type} onClick={clearFilters} className={`button ${name}`}>
      {name.toUpperCase()}
    </button>
  )
}