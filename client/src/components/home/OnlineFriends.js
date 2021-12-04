import React from "react";
import { useHistory } from "react-router";
import "./OnlineFriends.css";

const OnlineFriends = ({ following }) => {
  const history = useHistory();
  return (
    <li
      className="rightbarFriend"
      onClick={() => history.push(`/message/${following._id}`)}
    >
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={following.avatar} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{following.fullname}</span>
    </li>
  );
};

export default OnlineFriends;
