import React, { useCallback, useState } from "react";
import HomePage from "../../pages/Home";
import NewPage from "../../pages/New";
import ContactPage from "../../pages/Contact";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  const [opensideBar, setOpenSideBar] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleOpen = useCallback(() => {
    console.log("open");
    setAnimate(true);
    setTimeout(() => setOpenSideBar(true), 10);
  }, []);
  const handleClose = () => {
    setOpenSideBar(false);
    setTimeout(() => setAnimate(false), 300);
  };

  return (
    <div className="app ">
      <ul className="flex gap-5 bg-blue-600 text-slate-400 text-[24px] p-2 pl-5">
        <li className="hover:text-white">
          <NavLink to="/">
            {({ isActive }) => (
              <span className={isActive ? "active" : ""}>Home</span>
            )}
          </NavLink>
        </li>
        <li className="hover:text-white">
          <NavLink to="/news">
            {({ isActive }) => (
              <span className={isActive ? "active" : ""}>News</span>
            )}
          </NavLink>
        </li>
        <li className="hover:text-white">
          <NavLink to="/contact">
            {({ isActive }) => (
              <span className={isActive ? "active" : ""}>Contact</span>
            )}
          </NavLink>
        </li>
      </ul>

      <div className="p-5 flex ">
        <button
          id="openNav"
          onClick={handleOpen}
          className={`${opensideBar ? "hidden " : "flex"}`}
        >
          <i className="fa-solid fa-list text-[20px]"></i>
        </button>

        {animate && (
          <div
            className={`flex-col  gap-2 text-start 
              text-[20px] h-screen border-r-4  ${
                opensideBar
                  ? "flex animation-open w-[15%]"
                  : "hidden animation-close "
              }`}
            id="mySidebar"
          >
            <button
              className="text-end font-bold flex justify-between items-center"
              onClick={handleClose}
            >
              <p>Menu</p>
              <i className="fa-solid fa-xmark mr-[20px]"></i>
            </button>
            <Link to="#">DashBoard</Link>
            <Link to="#">Link 1</Link>
            <Link to="#">Link 2</Link>
            <Link to="#">Link 3</Link>
          </div>
        )}

        <div className="px-5  w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<NewPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Menu;
