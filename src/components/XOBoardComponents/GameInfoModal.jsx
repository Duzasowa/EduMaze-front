import React from "react";
import "./GameInfoModal.css";

const GameInfoModal = ({ status, handleNewGameRound }) => {
  return (
    <>
      <div
        style={{ backgroundColor: "#000000b5" }}
        className="fixed inset-0 bg-black-600 overflow-y-auto h-full w-full"
        id="my-modal"
      >
        <div
          style={{ marginTop: 200 }}
          className={`relative mx-auto p-5 border w-96 shadow-lg rounded-md bg-white transform -translate-y-full ${
            true ? "animate-slideIn" : ""
          }`}
        >
          <div className="mt-3 text-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {status === "win" && "Congratulations! You've won!"}
              {status === "lose" && "Sorry! You've lost."}
              {status === "draw" && "It's a draw!"}
            </h3>
            <div className="mt-2 px-7 py-3">
              <p className="text-sm text-gray-500">
                Would you like to play again?
              </p>
            </div>
            <div className="items-center px-4 py-3">
              <button
                onClick={handleNewGameRound}
                id="ok-btn"
                className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                New Game
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameInfoModal;
