import React, { useEffect, useState } from "react";

let timerId;
const Timer = () => {
  const [countdown, setCountDown] = useState(60);
  const handleStart = () => {
    timerId = setInterval(() => {
      setCountDown((prev) => prev - 1);
      console.log("CountDown");
    }, 1000);
    console.log("Start -> ", timerId);
  };

  const handleStop = () => {
    clearInterval(timerId);
    console.log("Stop ->", timerId);
  };

  //   useEffect(() => {
  //     const timerId = setInterval(() => {
  //       setCountDown((prev) => prev - 1);
  //       console.log("CountDown");
  //     }, 1000);

  //     return () => clearInterval(timerId);
  //   }, []);

  return (
    <div className="p-10">
      <h1>{countdown}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default Timer;
