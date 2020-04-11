import React from 'react';
import { useParams } from 'react-router-dom'; 

export default function CardDetails() {
  let { id } = useParams()
  return(
    <div>
      <div>{id}</div>

    </div>
  )
}