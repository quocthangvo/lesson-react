import React from "react";
const initState = {
  users: [
    { id: 1, name: "Thang" },
    {
      id: 2,
      name: "Hello World",
    },
  ],
};
const rootReducer = (state = initState, actio) => {
  return state;
};

export default rootReducer;
