import React, { useEffect, useState } from "react";
import ProtectedComponent from "./ProtectedComponent";

const useStateWithLocalStorage = (localStorageKey) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ""
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);

  return [value, setValue];
};

const StoreLocalStoragevalue = () => {
  const [value, setValue] = useStateWithLocalStorage("key");

  const onChange = (event) => setValue(event.target.value);

  function withLogging(fn) {
    return function (...args) {
      console.log("Arguments:", args);
      return fn(...args);
    };
  }

  const handleClick = withLogging((event) => {
    console.log("Button clicked:", event);
  });

  return (
    <div>
      <h1>Making custom Hooks and storing value in LocalStorage</h1>

      <input value={value} type="text" onChange={onChange} />

      <p>New key= {value}</p>
      <div className="text-4xl mt-5">Higher Order function</div>

      <button
        className="px-3 py-2 bg-black active:bg-slate-900 rounded-md"
        onClick={handleClick}
      >
        Click me
      </button>

      <div>
        <ProtectedComponent />
      </div>
    </div>
  );
};

export default StoreLocalStoragevalue;
