import React from "react";

//props (thuộc tính)
const YTBItem = (props) => {
  console.log(props);
  return (
    <div className="ytb">
      <img src={props.image} alt="" className="ytb-image" />
      <div className="ytb-footer">
        <img src={props.avt} alt="" className="images" />

        <div class="ytb-content">
          <h3 className="ytb-title">{props.title || "Null"}</h3>
          <h4 className="ytb-auth">{props.auth}</h4>
        </div>
      </div>
    </div>
  );
};
export default YTBItem;
