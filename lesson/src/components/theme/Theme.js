import React, { useState } from "react";
import Content from "./Content";
import "./App.css";

const Theme = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="p-20">
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-lg bg-slate-500"
      >
        Toggle
      </button>
      <Content theme={theme} />
    </div>
  );
};

export default Theme;
