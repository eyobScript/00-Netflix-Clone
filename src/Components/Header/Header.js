import React from 'react'
import "./header.css"
import NetflixLogo from "../../assets/images/Netflix_Logo.png";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Header() {
  return (
    <div className='header_outer_container'>
      <div className='header__container'>
        <div className="header_left">
            <ul>
                <li><img src={NetflixLogo} alt="Netflix logo" width="100"/></li>
                <li>Netflix</li>
                <li>Home</li>
                <li>TVShows</li>
                <li>Movies</li>
                <li>Latest</li>
                <li>MyList</li>
                <li>Browse by Language</li>
            </ul>
        </div>
        <div className="header_right">
            <ul>
                <li><SearchIcon /></li>
                <li><NotificationsNoneIcon /></li>
                <li><AccountBoxIcon /></li>
                <li><KeyboardArrowDownIcon /></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
