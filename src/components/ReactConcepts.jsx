import React from "react";
import Counter from "./Counter";
import StoreLocalStoragevalue from "./StoreLocalStoragevalue";

const ReactConcepts = () => {
  return (
    <div className="">
      <div className="text-6xl mb-5">ReactConcepts</div>

      <div className="flex flex-col gap-4">
        <Counter />
        {/* abstraction using custom hook */}
        <StoreLocalStoragevalue />
      </div>
    </div>
  );
};

export default ReactConcepts;
