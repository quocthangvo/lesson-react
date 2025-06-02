import React from "react";
import "./GameStyle.css";
//sử dụng object destructuring để lấy props
const Cell = ({ value, onClick, className }) => {
  // console.log("cell", props);
  // dùng destructuring để lấy value và onClick từ props
  return (
    <div className={`game-cell ${className}`} onClick={onClick}>
      {value}
    </div>
  );
};
//  return (
//     <div className="game-cell" onClick={props.onClick}>
//       {props.value}
//     </div>
//   );

export default Cell;
