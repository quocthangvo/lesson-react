import React, { useCallback, useState } from "react";
import Title from "./Title";

const Click = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="p-10">
      <Title onClickMe={handleClick} />
      <h1>{count}</h1>
    </div>
  );
};

export default Click;
