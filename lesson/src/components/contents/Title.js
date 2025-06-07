import React, { memo } from "react";
// memo tránh bị re render gọi lại thi k cần thiết
const Title = ({ onClickMe }) => {
  console.log("re-render");
  return (
    <div>
      <h1>Hello World</h1>
      <button className="px-4 py-2 bg-slate-500 rounded-lg" onClick={onClickMe}>
        Click
      </button>
    </div>
  );
};

export default memo(Title);
