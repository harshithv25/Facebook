import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "./StateProvider";

function Post({ profilePic, image, username, timestamp, message }) {

  const [{ user }, dispatch] = useStateValue();

  const isUser = user.displayName === username;

  return (
    <div className={`post${isUser && 'post__user'}`}>
      <div className={isUser ? 'post__userCard' : 'post__guestCard'}>
        <div className="post__top">
          <Avatar src={profilePic} className="post__avatar" />
          <div className="post__topInfo">
            <h3>{username}</h3>
            <p className="time">@{new Date(timestamp?.toDate()).toLocaleString()}.......Says:</p>
          </div>
        </div>
        <div className="post__bottom">
          <p>{message}</p>
        </div>
        <div className="post__image">
          <img src={image} alt="" />
        </div>
      </div >
    </div>
  );
}

export default Post;
