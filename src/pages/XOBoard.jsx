import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import GameInfoModal from "../components/XOBoardComponents/GameInfoModal";

const XOBoard = () => {
  const [board, setBoard] = useState(Array(3).fill(Array(3).fill(null)));
  const [status, setStatus] = useState(null);

  const handleCellClick = async (rowIndex, colIndex) => {
    if (board[rowIndex][colIndex] !== null) return; // Ignore if the cell is already filled

    const newBoard = [...board];
    newBoard[rowIndex] = [...newBoard[rowIndex]];
    newBoard[rowIndex][colIndex] = "X"; // Assume that the player is always "X"
    setBoard(newBoard);

    try {
      const response = await axios.post("http://localhost:5000/xo-move", {
        board: newBoard,
        player: "X",
      });
      setStatus(response.data.status);
      setBoard(response.data.board);
    } catch (error) {
      console.error("Error during the request:", error);
    }
  };

  const handleNewGameRound = () => {
    setBoard(Array(3).fill(Array(3).fill(null)));
    setStatus(null);
  };

  return (
    <>
      <Navbar />
      {(status === "win" || status === "lose" || status === "draw") && (
        <GameInfoModal
          status={status}
          handleNewGameRound={handleNewGameRound}
        />
      )}
      <div
        className="w-full h-[calc(100vh-60px)] flex"
        style={{
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="max-w-md mx-auto">
          <div className="grid grid-cols-3 gap-4">
            {board.map((row, rowIndex) =>
              row.map((cell, colIndex) => (
                <button
                  key={`${rowIndex}-${colIndex}`}
                  className="w-20 h-20 bg-gray-200 flex justify-center items-center font-bold text-2xl"
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                >
                  {cell}
                </button>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default XOBoard;
