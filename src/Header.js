import React from "react";
import "./Header.css";
import {
  Menu,
  Search,
  VideoCall,
  Apps,
  Notifications,
} from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";

function Header() {
  return (
    <div className="Header">
      <div className="Header-left">
        <Menu />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt="youtube-logo"
          className="Header-logo"
        />
      </div>
      <form className="Header-middle">
        <input type="text" placeholder="Search" />
        <Search className="Header-searchButton" />
      </form>
      <div className="Header-right">
        <VideoCall className="Header-icon" />
        <Apps className="Header-icon" />
        <Notifications className="Header-icon" />
        <Avatar alt="profile-pic" src="" />
      </div>
    </div>
  );
}

export default Header;
