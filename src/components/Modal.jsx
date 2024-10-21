import React, { useState } from "react";

const Modal = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      {show && (
        <div className="absolute top-0 -left-4 bg-transparent w-full h-screen">
          <div className="w-full h-full flex items-center justify-center">
            <div className=" w-[500px] h-[600px] text-black bg-white">
              <button onClick={() => setShow(false)}>X</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
