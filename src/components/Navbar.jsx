import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="flex items-center justify-between w-full px-4 text-white"
      style={{ height: 60, backgroundColor: "#040D12" }}
    >
      <Link to="/" className="font-bold">
        EduMaze
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
