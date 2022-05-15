import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchApiUsers, postUser } from "./../redux/users/usersSlice";
import { UserCard } from "./UserCard";
import { v4 as uuid } from "uuid";

export const UserApi = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.usersSlice);
  const { users, stateStatus, loading } = state;
  const apiUrl = "http://localhost:3001/data";
  const [postNewUserName, setPostNewUserName] = useState("");
  const [postNewFullName, setPostNewFullName] = useState("");

  const createNewUser = (e) => {
    e.preventDefault();

    const newUserInfo = {
      fullName: postNewFullName,
      userName: postNewUserName,
      id: uuid(),
    };

    dispatch(postUser(newUserInfo));
    dispatch(fetchApiUsers());
  };

  useEffect(() => {
    dispatch(fetchApiUsers(apiUrl));
  }, [dispatch, apiUrl]);

  return (
    <div>
      {" "}
      <p>{loading && "Loading.."}</p>
      <p style={{ color: "red" }}>
        {!loading & (stateStatus !== "Success")
          ? "Fetch Error : Check API URL"
          : null}
      </p>
      <div className="users">
        <h1>New User Form</h1>
        <form onSubmit={createNewUser}>
          <input
            type="text"
            placeholder="full name"
            value={postNewFullName}
            onChange={(e) => setPostNewFullName(e.target.value)}
          />
          <input
            type="text"
            placeholder="user name"
            value={postNewUserName}
            onChange={(e) => setPostNewUserName(e.target.value)}
          />
          <input type="submit" value={"Post New User"} />
        </form>

        <div className="usersList">
          {users && users.map((user, ix) => <UserCard key={ix} user={user} />)}
        </div>
      </div>
    </div>
  );
};
