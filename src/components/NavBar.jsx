import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
const NavBar= ()=>{
    return(
      <>
     
       <ul className="navbar">
         <li><Link to = "/">Rick And Morty Characters Tracker</Link></li>
         <li><Link to = "/favorite">Favorite</Link></li>

       </ul>
      </>
    )
}
export default NavBar;