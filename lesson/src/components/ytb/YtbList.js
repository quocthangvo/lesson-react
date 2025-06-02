import React from "react";
import { YtbData } from "../../data/YtbData";
import YTBItem from "./YtbItem";

const YtbList = (props) => {
  return (
    <div className="App-ytb">
      {/* children component */}
      {props.children}
      {YtbData.map((item, index) => (
        <YTBItem
          key={item.id}
          image={item.image}
          avt={item.avt || item.image}
          title={item.title}
          auth={item.auth}
        ></YTBItem>
      ))}
    </div>
  );
};

export default YtbList;
