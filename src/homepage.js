import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Button from '@mui/material/Button'
const Homepage = () => {
  return (
    <div><Button variant='outlined'> <Link to="/">Back</Link></Button></div>
    
  )
}

export default Homepage