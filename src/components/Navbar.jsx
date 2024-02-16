import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="flex items-center justify-between w-full px-4 bg-black text-white"
      style={{ height: 60 }}
    >
      <Link to="/" className="font-bold">
        Project-01
      </Link>
      <div>
        <Link to="/maze" className="px-4 py-2 hover:bg-gray-700 rounded">
          Maze
        </Link>
        <Link to="/xoboard" className="px-4 py-2 hover:bg-gray-700 rounded">
          XOBoard
        </Link>
      </div>
    </div>
  );
};

export default Navbar;