import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption';
// Material Ui Imports
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from './features/userSlice';

const Header = () => {
  const dispatch = useDispatch();

  const logoutApp = () => {
    dispatch(logout())
    auth.signOut();
  }
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" srcset="" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
        <HeaderOption Icon={ChatIcon} title="Messaging"/>
        <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
        <HeaderOption avatar={true} onClick={logoutApp}/>
      </div>
    </div>
  )
}

export default Header
