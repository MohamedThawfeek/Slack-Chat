import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Search, HelpOutline, AccessTime } from "@material-ui/icons";

const Header = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="header">
      <div className="header__left">
        <Avatar src={user.photoURL} alt={user.displayName} />
        <AccessTime />
      </div>
      <div className="header__center">
        <Search />
        <input type="text" placeholder={`Search ${user.displayName}`} />
      </div>
      <div className="header__right">
        <HelpOutline />
      </div>
    </div>
  );
};

export default Header;
