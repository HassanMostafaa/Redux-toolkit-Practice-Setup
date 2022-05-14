import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchApiUsers } from "./../redux/users/usersSlice";

export const UserApi = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.usersSlice);
  const { users, stateStatus } = state;
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    dispatch(fetchApiUsers(apiUrl));
    console.log("dispatched");
  }, [dispatch, apiUrl]);

  return (
    <div>
      <h1>UserApi Component</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
        tempora.
      </p>
      <h3>Users List</h3>
      <div>
        <p>{stateStatus}</p>
        {users && users.map((user, ix) => <div key={ix}>{user.name}</div>)}
      </div>
    </div>
  );
};
