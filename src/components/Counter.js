import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  increment,
  decrement,
  incrementBy,
} from "../redux/counter/counterSlice";

export const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter Comp</h1>
      <p>Count : {count}</p>
      <button onClick={() => dispatch(increment())}> +</button>
      <button onClick={() => dispatch(decrement())}> -</button>
      <button onClick={() => dispatch(incrementBy(5))}>add 5</button>
    </div>
  );
};
