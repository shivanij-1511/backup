
import React, { useState } from "react";

import logo from "../Assets/eptura-light.svg";
import "../CSS/BuisnessTemplate.css";
import "../CSS/Navbar.css"

import { Outlet, Link } from "react-router-dom";

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Navbar = () => {

  const [dropdown, setDropdown] = useState({
    workplace: false,
    assets: false,
    More: false,

  });

  const toggleDropdown = (menu) => {
    setDropdown((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu]
    }));
  };


  return (
    <div className="header">
        <div className="logo-div">
            <img
              className="logo-image"
              src={logo}
              alt="Conference Background"
            />
         </div>
          <div className="nav-links">
          <ul className="navbar-menu">
          <li><Link to="/alexa">Alexa</Link></li>
        <li 
          className="navbar-item"
          onMouseEnter={() => toggleDropdown('workplace')}
          onMouseLeave={() => toggleDropdown('workplace')}
        >
           {/* <Link to="/workplace">Workplace</Link> */}
Workplace
          {dropdown.workplace && (
            <ul className="dropdown-menu">
              <li><a href="/floormain">Floor Maps</a></li>
              <li><a href="/auditorium-view">Bookings</a></li>
              <li><a href="/guest">Guests</a></li>
           
            </ul>
          )}
        </li>
        <li 
          className="navbar-item"
          onMouseEnter={() => toggleDropdown('assets')}
          onMouseLeave={() => toggleDropdown('assets')}
        >
Assets
          {dropdown.assets && (
            <ul className="dropdown-menu">
              <li><Link to="/alexa">Alexa</Link></li>
              <li><Link to="/assistant">Solution Assistat</Link></li>
          
          
            </ul>
          )}
        </li>
         <li 
          className="navbar-item"
          onMouseEnter={() => toggleDropdown('more')}
          onMouseLeave={() => toggleDropdown('more')}
        >
More
          {dropdown.more && (
            <ul className="dropdown-menu">
              <li><Link to="/calender-view">Calendar</Link></li>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/feedback">Feedback</Link></li>
          
          
            </ul>
          )}
        </li>    
         
      
    
  
            
            <div>
        <li 
          className="navbar-item"
          onMouseEnter={() => toggleDropdown('workplace')}
          onMouseLeave={() => toggleDropdown('workplace')}
        >
           <AccountCircleOutlinedIcon style={{ fontSize: "40px" }}></AccountCircleOutlinedIcon>
          {dropdown.workplace && (
            <ul className="dropdown-menu">
              <li><a href="#">Log Out</a></li>
              <li><a href="#">Profile</a></li>
              
           
            </ul>
          )}
        </li>
        </div>
  
       </ul>
          </div>
        </div>
  )
}

export default Navbar