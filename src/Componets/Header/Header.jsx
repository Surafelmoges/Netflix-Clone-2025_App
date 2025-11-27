import React from 'react'
import './header.css'
import logo from '../../assets/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
function Header() {
  return (
       <div className='outerContainer'>
    {/* Use specific HTML tags like <nav> or <header> for better accessibility */}
    <div className="headerContainer"> 
        
        {/* 1. LEFT SIDE */}
        <div className="header-left">
            <ul>
                 {/* It is okay to keep logo in li, but often easier to separate it */}
                <li className='logo'><img src={logo} alt="Netflix-logo" /></li>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li> 
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Languages</li>
            </ul>
        </div>

        {/* 2. RIGHT SIDE */}
        <div className="header-right">
            <ul>
                <li><SearchIcon /></li>
                <li><NotificationsNoneIcon /></li>
                <li><AccountBoxIcon/></li>
            </ul>
        </div>

  </div>
</div>

)
}

export default Header
