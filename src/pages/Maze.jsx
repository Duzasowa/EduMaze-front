import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import ReactToastify from "../hook/useReactToastify";
import { ToastContainer } from "react-toastify";
import MazeSettingsPanel from "../components/MazeComponents/MazeSettingsPanel";

const Maze = () => {
  const [mazeWidth, setMazeWidth] = useState();
  const [mazeHeight, setMazeHeight] = useState();
  const [mazeData, setMazeData] = useState([]);
  const [isVisible, setIsVisible] = useState(true); // State to control visibility
  const [activeButton, setActiveButton] = useState(1); // To control the active buttonою

  const fetchMaze = async () => {
    const height = Number(mazeHeight);
    const width = Number(mazeWidth);
    if (!height || !width) {
      ReactToastify("warn", "Specify the width and height parameters");
      return;
    }
    if (height > 16 || width > 16) {
      ReactToastify("warn", "The maximum allowable value is 16");
      return;
    }
    // Executing the request
    try {
      const response = await axios.post("http://127.0.0.1:5000/get-maze", {
        width,
        height,
      });
      setMazeData(response.data);
    } catch (error) {
      ReactToastify("warn", "An error occurred while receiving maze data");
    }
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div
        class="w-full h-[calc(100vh-60px)] flex"
        style={{ backgroundColor: "black" }}
      >
        <MazeSettingsPanel
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          mazeWidth={mazeWidth}
          setMazeWidth={setMazeWidth}
          mazeHeight={mazeHeight}
          setMazeHeight={setMazeHeight}
          fetchMaze={fetchMaze} // Fetches maze data based on the current settings
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />

        {/* Space for the generated maze */}
        <div
          style={{
            width: isVisible ? "80%" : "calc(100vw - 70px)",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
          }}
        >
          <div className="p-4">
            {mazeData.length === 0 ? (
              <div style={{ fontSize: 16, color: "white", fontWeight: 700 }}>
                Enter the parameters for generating the maze
              </div>
            ) : (
              mazeData.map((row, rowIndex) => (
                <div key={rowIndex} className="flex">
                  {row.map((cell, cellIndex) => {
                    // Check if this is the first cell
                    const isFirstCell = rowIndex === 0 && cellIndex === 0;
                    // Check if this is the last cell
                    const isLastCell =
                      rowIndex === mazeData.length - 1 &&
                      cellIndex === row.length - 1;
                    // Determine the color based on the condition
                    const backgroundColor = isFirstCell
                      ? "green" // The first cell is green
                      : isLastCell
                      ? "red" // The last cell is red
                      : cell.path
                      ? "#008170" // The Way
                      : "grey"; // All other cells

                    return (
                      <div
                        key={cellIndex}
                        style={{ backgroundColor, fontWeight: 700 }}
                        className={`h-8 w-8 border-2 flex justify-center items-center ${
                          cell.walls[0]
                            ? "border-t-white"
                            : "border-t-transparent"
                        } ${
                          cell.walls[1]
                            ? "border-r-white"
                            : "border-r-transparent"
                        } ${
                          cell.walls[2]
                            ? "border-b-white"
                            : "border-b-transparent"
                        } ${
                          cell.walls[3]
                            ? "border-l-white"
                            : "border-l-transparent"
                        }`}
                      >
                        {isFirstCell ? "S" : isLastCell ? "F" : ""}
                      </div>
                    );
                  })}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Maze;
