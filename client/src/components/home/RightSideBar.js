import React from "react";
import { useSelector } from "react-redux";

import UserCard from "../UserCard";
import OnlineFriends from "./OnlineFriends";

import "./RightSideBar.css";

const RightSideBar = () => {
  const { auth } = useSelector((state) => state);

  return (
    <div>
      <UserCard user={auth.user} />

      <div className="birthdayContainer">
        <img className="birthdayImg" src="images/birthday.png" alt="" />
        <span className="birthdayText">
          <b>Nuria Foster</b> and <b>3 other friends</b> have a birhday today.
        </span>
      </div>

      <h4 className="rightbarTitle">Amigos en linea</h4>
      <ul className="rightbarFriendList">
        <OnlineFriends />
        <OnlineFriends />
        <OnlineFriends />
        <OnlineFriends />
        <OnlineFriends />
        <OnlineFriends />
        <OnlineFriends />
        <OnlineFriends />
        <OnlineFriends />
        <OnlineFriends />
        <OnlineFriends />
        <OnlineFriends />
        <OnlineFriends />
        <OnlineFriends />
        <OnlineFriends />
        <OnlineFriends />
        <OnlineFriends />
        <OnlineFriends />
        <OnlineFriends />
        <OnlineFriends />
      </ul>

      <div style={{ opacity: 0.5 }}>
        <a
          href="https://www.fernandezalfredo.com"
          target="_blank"
          rel="noreferrer"
          style={{ wordBreak: "break-all" }}
        >
          fernandezalfredo.com
        </a>
        <small className="d-block">Desarrollador de software</small>
      </div>
    </div>
  );
};

export default RightSideBar;
