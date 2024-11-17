// UserProfile.js
import React from "react";

const UserProfile = ({ user, onDelete }) => {
  const { id, fName, lName, favColor } = user;

  return (
    <div className="user-profile">
      <h3>{fName} {lName}</h3>
      <p>
        Favorite Color: <span style={{ color: favColor }}>{favColor}</span>
      </p>
      <button className="delete-button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default UserProfile;
