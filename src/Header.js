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
import { Link, useHistory } from "react-router-dom";

function Header() {
  const [searchInput, setSearchInput] = React.useState("");
  const history = useHistory();
  const handleSearch = function (e) {
    e.preventDefault();
    history.push(`/search/?${searchInput}`);
    setSearchInput("");
  };

  return (
    <div className="Header">
      <div className="Header-left">
        <Menu />
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            alt="youtube-logo"
            className="Header-logo"
          />
        </Link>
      </div>
      <form className="Header-middle">
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit" onClick={handleSearch} hidden />
        <Link to={`/search/?${searchInput}`}>
          <Search className="Header-searchButton" />
        </Link>
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
