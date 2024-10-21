import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const data = [
  {
    path: "/",
    name: "Dashboard",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/contact",
    name: "Contact us",
  },
];

const Navbar = () => {
  // Create an array of refs to store references for each nav item
  const navRefs = useRef([]);

  const handleClick = (index) => {
    // Reset the background color of all items
    navRefs.current.forEach((ref) => {
      if (ref) ref.style.backgroundColor = "transparent";
    });

    // Set the background color of the clicked item to black
    navRefs.current[index].style.backgroundColor = "black";
  };

  return (
    <>
      <nav className="w-full bg-blue-600 h-16 flex items-center sticky top-0 px-5">
        <div className="text-4xl font-semibold">Navbar</div>
        <ul className="flex ml-auto space-x-4">
          {data.map((nav, index) => (
            <li
              key={index}
              onClick={() => handleClick(index)}
              ref={(el) => (navRefs.current[index] = el)}
              className="cursor-pointer text-md p-2 rounded-md"
            >
              <Link to={nav.path} className="text-white">
                {nav.name}
              </Link>
            </li>
          ))}
          <li className="cursor-pointer text-md p-2 rounded-md bg-white text-blue-600 font-semibold hover:opacity-80 active:bg-amber-400">
            Contact Us
          </li>
          <Modal />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
