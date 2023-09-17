import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreament,
  increament,
  increamentByValue,
} from "../../Redux/Featured/Counter/CounterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);

  console.log(count);
  const dispatch = useDispatch();
  return (
    <div className="bg-purple-500 p-7 font-bold rounded-ee-3xl border-e-2 border-e-red-400">
      <button
        onClick={() => dispatch(increament())}
        className="bg-blue-700 p-2 rounded-xl"
      >
        Increament
      </button>
      <h1> Count {count} </h1>
      <button
        onClick={() => dispatch(decreament())}
        className="btn bg-blue-700 p-2 rounded-xl"
      >
        {" "}
        decreament
      </button>
      <button
        onClick={() => dispatch(increamentByValue(5))}
        className="btn bg-blue-700 p-2 rounded-xl"
      >
        {" "}
        decreament
      </button>
    </div>
  );
};

export default Counter;
