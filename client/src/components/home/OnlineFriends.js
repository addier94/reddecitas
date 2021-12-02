import React from "react";
import "./OnlineFriends.css";

const OnlineFriends = () => {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src="images/6.jpeg" alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">Neliel flores </span>
    </li>
  );
};

export default OnlineFriends;
