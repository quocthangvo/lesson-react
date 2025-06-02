import { useState } from "react";
import "./ToggleStyle.css";
function Toggle() {
  const [on, onSet] = useState(false);
  const handleClick = () => {
    onSet((on) => !on);
  };
  console.log(on);
  return (
    <div className={`toggle ${on ? "active" : ""}`} onClick={handleClick}>
      <div className={`toggle-spinner ${on ? "active" : ""}`}></div>
    </div>
  );
}

export default Toggle;
