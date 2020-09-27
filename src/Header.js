import React from "react";
import "./header.css";
import logo from "./LOGO.svg";
import SearchIcon from "@material-ui/icons/Search";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import FlagRoundedIcon from "@material-ui/icons/FlagRounded";
import SubscriptionsRoundedIcon from "@material-ui/icons/SubscriptionsRounded";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleRoundedIcon from "@material-ui/icons/SupervisedUserCircleRounded";
// eslint-disable-next-line
import { Avatar, IconButton, Icon } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="" />
        <div className="header__input">
          <SearchIcon />
          <input type="text" name="" id="" placeholder="Search (Wont work)" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__option--active">
          <HomeRoundedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagRoundedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsRoundedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleRoundedIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} id="avatar" />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon href="post" />
        </IconButton>
        <IconButton>
          <ForumIcon href="post" />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
