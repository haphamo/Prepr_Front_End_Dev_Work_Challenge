import React from 'react';
import { useParams } from 'react-router-dom'; 

export default function CardDetails() {
  let { id } = useParams()
  console.log(id)
  return(
    <div>
      <div>{id}</div>
      Hello World
    </div>
  )
}