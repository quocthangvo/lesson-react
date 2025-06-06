import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState({
    firstName: "John",
    lastName: "Doe",
  });
  useEffect(() => {
    console.log(123);
  }, [info]);
  return (
    <div className="p-10">
      <input
        type="text"
        name="firstName"
        value={info.firstName}
        onChange={(e) => setInfo({ ...info, firstName: e.target.value })}
      />
      <span className="text-lg font-bold ">Counter: {count}</span>
      <button
        className="bg-green-300 p-4 rounded-lg font-bold ml-5"
        onClick={() => setCount(count + 1)}
      >
        Click
      </button>
    </div>
  );
};

export default Counter;
