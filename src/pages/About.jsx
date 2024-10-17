import React, { useEffect, useState } from "react";
import { UserContext } from "../helper/UserContext";
import { useContext } from "react";
import {
  increment,
  decrement,
  reset,
  incrementByValue,
} from "../store/CounterSlicer";
import { useSelector, useDispatch } from "react-redux";

const About = () => {
  const user = useContext(UserContext);
  const [value, setValue] = useState(2);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (!isNaN(inputValue)) {
      setValue(Number(inputValue));
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div>Your user key is : {user} </div>
      <div className="text-5xl">Here we are using reducer</div>
      <div>
        <div>
          <button
            className="py-2 px-4 rounded-lg bg-black text-white"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <span className="py-2 px-4 rounded-lg">{count}</span>
          <button
            onClick={() => dispatch(decrement())}
            className="py-2 px-4 rounded-lg bg-black text-white"
          >
            -
          </button>
          <button
            className="py-2 px-4 ml-2 rounded-lg bg-black text-white"
            onClick={() => dispatch(reset())}
          >
            reset
          </button>
        </div>
        <div className="mt-2">
          <input
            type="text"
            value={value}
            onChange={handleChange}
            className="p-2 border-none outline-none w-20  bg-black text-white rounded-lg"
          />
          <button
            className="py-2 px-4 ml-2 rounded-lg bg-black text-white"
            onClick={() => dispatch(incrementByValue(value))}
          >
            increament
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
