import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser, updateUser } from "../redux/users/usersSlice";
import { fetchApiUsers } from "./../redux/users/usersSlice";

export const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState("");

  const updateUserComp = () => {
    dispatch(updateUser({ user, newName }));
    dispatch(fetchApiUsers());
  };

  const deleteUserComp = () => {
    dispatch(deleteUser(user.id));
    dispatch(fetchApiUsers());
  };

  return (
    <div className="userCard">
      <h2>{user.fullName}</h2>
      <p>{user.userName}</p>
      <div className="form">
        <input
          type="text"
          placeholder="Update User Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type="submit"
          onClick={() => updateUserComp()}
          value={"Update"}
        />
        <button onClick={() => deleteUserComp()}>Delete</button>
      </div>
    </div>
  );
};
