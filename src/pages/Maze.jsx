import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Maze = () => {
  const [mazeData, setMazeData] = useState([]);

  useEffect(() => {
    const fetchMaze = async () => {
      try {
        // Replace the URL with your endpoint if it differs
        const response = await axios.post("http://127.0.0.1:5000/get-maze", {
          width: 10,
          height: 10,
        });
        // console.log(response.data);
        setMazeData(response.data);
      } catch (error) {
        console.error("There was an error fetching the maze data:", error);
      }
    };

    fetchMaze();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="p-4">
          {mazeData.map((row, rowIndex) => (
            <div key={rowIndex} className="flex">
              {row.map((cell, cellIndex) => (
                <div
                  key={cellIndex}
                  className={`h-8 w-8 border-2 flex justify-center items-center ${
                    cell.path ? "bg-green-500" : ""
                  } ${
                    cell.walls[0] ? "border-t-black" : "border-t-transparent"
                  } ${
                    cell.walls[1] ? "border-r-black" : "border-r-transparent"
                  } ${
                    cell.walls[2] ? "border-b-black" : "border-b-transparent"
                  } ${
                    cell.walls[3] ? "border-l-black" : "border-l-transparent"
                  }`}
                >
                  {cell.path ? "P" : ""}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Maze;
