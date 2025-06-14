import React, { useCallback, useState } from "react";
import HomePage from "../../pages/Home";
import NewPage from "../../pages/New";
import ContactPage from "../../pages/Contact";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import "./Menu.css";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  font-size: 16px;
  padding: 10px;
  transition: all 0.3s ease;

  &.active {
    background-color: #2563eb;
    color: white;
    border-radius: 8px;
  }

  &:hover {
    background-color: #418fde;
    color: white;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
const Icon = styled.i`
  font-size: 20px;
  margin-right: 10px;
`;

const Menu = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleOpen = useCallback(() => {
    console.log("open");

    setOpenSideBar(true);
  }, []);
  const handleClose = () => {
    // setTimeout(() => setOpenSideBar(false), 300);
    setOpenSideBar(false);
  };

  const links = [
    { name: "DashBoard", to: "", icon: "fa-solid fa-house" },
    { name: "Link 1", to: "/link1", icon: "fa-solid fa-circle-user" },
    { name: "Link 2", to: "/link2", icon: "fa-solid fa-cube" },
    { name: "Link 3", to: "/link3", icon: "fa-solid fa-table-list" },
  ];

  return (
    <div className="app ">
      <div className="flex ">
        {/* sidebar */}
        <div
          id="mySidebar"
          className={`flex flex-col text-[20px] transition-all duration-300
            ${
              openSideBar
                ? "w-[250px] border-r-2 p-3 "
                : "w-0 opacity-0 overflow-hidden"
            }`}
        >
          <button
            className={`mb-5 text-end font-bold flex justify-between items-center 
               `}
            onClick={handleClose}
          >
            <p>Menu</p>
            <i className="fa-solid fa-xmark mr-[20px]"></i>
          </button>

          {links.map((item, index) => (
            <StyledLink key={item.name} to={item.to}>
              <Icon className={item.icon} />
              {item.name}
            </StyledLink>
          ))}
        </div>

        <div className=" w-full">
          <ul className="flex gap-5 bg-blue-600 text-slate-400 text-[24px] p-2 pl-5">
            {/* nút sidebar */}
            <button
              id="openNav"
              onClick={handleOpen}
              className={`text-white transition-opacity duration-300 ${
                openSideBar ? "opacity-0" : "opacity-100"
              }`}
            >
              <i className="fa-solid fa-list text-[24px]"></i>
            </button>
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
          <div className="p-5">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/news" element={<NewPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
