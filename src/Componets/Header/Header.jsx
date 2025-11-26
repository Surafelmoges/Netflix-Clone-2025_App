import React from 'react'
import './header.css'
import logo from '../../assets/logo.png'
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (

    <div className='outerContainer'>
        <div className="headerContainor">
            <div className="header-left">
                {/* 1. LEFT SIDE - Logo and Navigation Links */}
                <ul>
                    <li className='logo'><img src={logo} alt="Netflix-logo" /></li>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li> 
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>
            <div className="header-right">
                {/* 2. RIGHT SIDE - Search, Kids, Notifications, User Profile */}
                <ul>
                    <li><SearchIcon /></li>
                    <li>KIDS</li>
                    <li>🔔</li>
                    <li>👤</li>
                </ul>
            </div>

  </div>
</div>

)
}

export default Header
