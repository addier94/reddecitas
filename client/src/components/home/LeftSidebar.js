import React from "react";
import FollowBtn from "../FollowBtn";
import LoadIcon from "../../images/loading.gif";
import { getSuggestions } from "../../redux/actions/suggestionsAction";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../UserCard";

const LeftSidebar = () => {
  const { auth, suggestions } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <div className="d-flex justify-content-between align-items-center my-2">
        <h5 className="text-danger">Suguerencias para tí</h5>
        {!suggestions.loading && (
          <i
            className="fas fa-redo"
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(getSuggestions(auth.token))}
          />
        )}
      </div>

      {suggestions.loading ? (
        <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
      ) : (
        <div className="suggestions">
          {suggestions.users.map((user) => (
            <UserCard key={user._id} user={user}>
              <FollowBtn user={user} />
            </UserCard>
          ))}
        </div>
      )}
    </>
  );
};

export default LeftSidebar;
