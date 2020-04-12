import React from 'react';
import './Button.css';

export default function Button({ name, type }) {
  // add logic to determine the className to apply appropriate styles

  return(
    <button type={type} className="button">
      {name.toUpperCase()}
    </button>
  )
}