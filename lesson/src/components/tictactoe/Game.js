import React, { useState } from "react";
import Board from "./Board";
import { caculateWinner } from "../../heplers";

const Game = (props) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true); // state để theo dõi lượt chơi của người chơi X hay O
  // xIsNext là một boolean, nếu true thì lượt chơi của X, nếu false thì lượt chơi của O
  const winner = caculateWinner(board);
  const handleClick = (index) => {
    const boardCopy = [...board]; // bopy ra 1 bản sao của mảng board để tránh việc trực tiếp thay đổi state
    if (winner || boardCopy[index]) {
      return;
    }
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy); // cập nhật state board với bản sao đã thay đổi
    setXIsNext(!xIsNext); // cập nhật lượt chơi tiếp theo
    console.log("boardCopy", boardCopy);
  };

  const handleResetGame = () => {
    setBoard(Array(9).fill(null)); // reset lại mảng board về trạng thái ban đầu
    setXIsNext(true); // reset lượt chơi về X
  };
  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>

      <div className="game-winner">
        {winner ? `Winner is  ${xIsNext ? "O" : "X"}` : ""}
      </div>
      <button onClick={handleResetGame} className="button-reset">
        Reset Game
      </button>
    </div>
  );
};

export default Game;
