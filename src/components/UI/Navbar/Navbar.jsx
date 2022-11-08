import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'
function Navbar() {
  return (
    <div className="navbar">
        
        <div className="navbar__links">
          <Link to="/about" className={classes.links}>О приложении</Link>
          <Link to="/posts" className={classes.links}>Посты</Link>
        </div>
      </div>
  )
}

export default Navbar