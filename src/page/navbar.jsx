import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { items } = useSelector((state) => state.cart);
  return (
    <nav className=" w-full flex justify-between px-3 py-2">
      <div>
        <h2 className="text-3xl font-medium">
          <Link to="/" className="no-underline text-gray-400">
            <font>Store</font>
          </Link>
        </h2>
      </div>
      <div className="flex justify-between gap-4 items-center">
        <div className="flex gap-3">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search text-gray-400"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
          {/* <div>
            <input className="rounded px-2 border-1 focus:border-2 bg-white" placeholder="Search" />
          </div> */}
        </div>
        <div>
          <span>
            <Link to="/cart">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart3 text-gray-400"
                  viewBox="0 0 16 16"
                  
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>{" "}
              </button>
              <span className="bg-red-600 no-underline rounded-full absolute right-1 top-2 px-[6px] text-white text-center text-sm">{items.length}</span>
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
