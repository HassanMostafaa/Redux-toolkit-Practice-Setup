import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setName, resetName } from "../redux/name/nameSlice";

export const Name = () => {
  const [nameInp, setNameInp] = useState("");
  const nameState = useSelector((state) => state.nameReducer.name);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Name Comp</h1>
      <p>Current Name : {nameState} </p>
      <input
        type="text"
        name=""
        id=""
        placeholder="Set Current Name..."
        value={nameInp}
        onChange={(e) => setNameInp(e.target.value)}
      />
      <button onClick={() => dispatch(setName(nameInp))}>Set Name</button>
      <button onClick={() => dispatch(resetName())}>Reset Name </button>
    </div>
  );
};
