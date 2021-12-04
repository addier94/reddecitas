import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { MESS_TYPES } from "../../redux/actions/messageAction";
import "./OnlineFriends.css";

const OnlineFriends = ({ following }) => {
  const { online } = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleAddUser = (user) => {
    dispatch({
      type: MESS_TYPES.ADD_USER,
      payload: { ...user, text: "", media: [] },
    });
    dispatch({ type: MESS_TYPES.CHECK_ONLINE_OFFLINE, payload: online });
    return history.push(`/message/${user._id}`);
  };
  return (
    <li className="rightbarFriend" onClick={() => handleAddUser(following)}>
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={following.avatar} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{following.fullname}</span>
    </li>
  );
};

export default OnlineFriends;
