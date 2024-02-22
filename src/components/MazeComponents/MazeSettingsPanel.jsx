import React from "react";
import { projectImages } from "../../assets/projectImages";

const MazeSettingsPanel = ({
  isVisible,
  setIsVisible,
  mazeWidth,
  setMazeWidth,
  mazeHeight,
  setMazeHeight,
  fetchMaze, // Fetches maze data based on the current settings
  activeButton,
  setActiveButton,
}) => {
  return (
    <div
      style={{
        width: isVisible ? "20%" : 70,
        backgroundColor: "#232D3F",
        height: "100%",
        padding: isVisible ? "0 20px 20px" : "0px",
        overflow: "hidden",
        transition: "width 0.3s ease, padding 0.3s ease",
      }}
    >
      {isVisible ? (
        <div>
          <button
            style={{
              width: "100%",
              height: 70,
              borderRadius: 8,
              cursor: "unset",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <img
              onClick={() => setIsVisible(false)}
              style={{ width: 25, height: 25 }}
              src={projectImages.leftArrow}
              alt="leftArrow"
            />
          </button>
          <div
            className="font-semibold"
            style={{ fontSize: 20, color: "white", marginBottom: 30 }}
          >
            Maze generation parameters
          </div>

          {/* Fields for entering parameters and the button */}
          <div className="flex flex-col justify-between">
            <input
              type="text"
              value={mazeWidth}
              onChange={(e) => setMazeWidth(e.target.value)}
              placeholder="Width"
              style={{ marginBottom: 2 }}
              className="w-full border p-1 mr-2 appearance-none"
              pattern="\d*"
              onKeyPress={(e) => {
                if (!/[0-9]/.test(e.key)) {
                  e.preventDefault();
                }
              }}
            />
            <input
              type="text"
              value={mazeHeight}
              onChange={(e) => setMazeHeight(e.target.value)}
              placeholder="Length"
              className="w-full border p-1 mr-2 appearance-none"
              pattern="\d*"
              onKeyPress={(e) => {
                if (!/[0-9]/.test(e.key)) {
                  e.preventDefault();
                }
              }}
            />
          </div>

          {/* Buttons, of which only one can be activated */}
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              marginTop: 30,
              height: 180,
              justifyContent: "space-between",
            }}
          >
            <button
              style={{
                width: "100%",
                backgroundColor:
                  activeButton === 1 ? "rgb(4 209 182)" : "#008170",
                height: 50,
                borderRadius: 8,
              }}
              onClick={() => setActiveButton(1)}
            >
              Breadth-First Search (BFS)
            </button>
            <button
              style={{
                maxWidth: "100%",
                backgroundColor:
                  activeButton === 2 ? "rgb(4 209 182)" : "#008170",
                height: 50,
                borderRadius: 8,
                cursor: "unset",
              }}
              // onClick={() => setActiveButton(2)}
            >
              Depth-First Search (DFS)
            </button>
            <button
              style={{
                maxWidth: "100%",
                backgroundColor:
                  activeButton === 3 ? "rgb(4 209 182)" : "#008170",
                height: 50,
                borderRadius: 8,
                cursor: "unset",
              }}
              // onClick={() => setActiveButton(3)}
            >
              Dijkstra's Algorithm
            </button>
          </div>

          <button
            onClick={() => fetchMaze()}
            style={{
              width: "100%",
              height: 40,
              borderRadius: 4,
              backgroundColor: "rgb(4 209 182)",
              fontWeight: 700,
              fontSize: 12,
              textTransform: "uppercase",
              marginTop: 180,
            }}
            className="bg-blue-500 text-black p-1"
          >
            Generate a maze
          </button>
        </div>
      ) : (
        <button
          style={{
            width: 70,
            height: 70,
            borderRadius: 8,
            cursor: "unset",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            onClick={() => setIsVisible(true)}
            style={{ width: 25, height: 25 }}
            src={projectImages.rightArrow}
            alt="rightArrow"
          />
        </button>
      )}
    </div>
  );
};

export default MazeSettingsPanel;
