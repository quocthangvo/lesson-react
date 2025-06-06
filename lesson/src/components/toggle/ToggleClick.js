import React, { useState } from "react";
import Content from "../contents/Content";
import Timer from "../contents/Timer";
const ToggleClick = () => {
  const [show, setShow] = useState();
  return (
    <div className="m-10">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => setShow(!show)}
      >
        Toggle
      </button>
      {show && <Timer />}
    </div>
  );
};

export default ToggleClick;
