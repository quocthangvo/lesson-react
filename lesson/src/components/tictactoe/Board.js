import React from "react";
import Cell from "./Cell";
import "./GameStyle.css";
import { caculateWinner } from "../../heplers";
const Board = (props) => {
  // console.log("board", props);
  const cells = [null, null, null, "X", "X", "X", null, null, null];
  console.log(caculateWinner(cells));
  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          className={item === "X" ? "cell-x" : item === "O" ? "cell-o" : ""}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
