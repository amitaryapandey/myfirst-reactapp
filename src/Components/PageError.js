import React from 'react'
import {Link} from "react-router-dom";
export default function PageError() {
  return (
    <div>
      <h1>404 ERROR </h1>
      <h1>THIS PAGE IS NOT AVAILABLE </h1>
      <Link to="/">CLICK TO GO LOGIN PAGE</Link>
    </div>
  )
}
