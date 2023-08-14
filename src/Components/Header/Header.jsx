import React from "react";
import "./Header.css";
import { AiOutlineAlignLeft,AiOutlineSearch,AiOutlineExpand,AiTwotoneBell,AiOutlineDown } from "react-icons/ai";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FcSettings } from "react-icons/fc";
import { NavLink } from "react-router-dom";
const Header = () => {
  return <div>
    <header id="page-topbar">
      <div className="navbar-header">
          <div className="d-flex">
              <div className="navbar-brand-box text-center">
                <NavLink>
                  <img src="../images/logo.png" alt="ảnh logo" />
                </NavLink>
              </div>
              <button className="icon-menu">
                <AiOutlineAlignLeft />
              </button>
              <input type="text" placeholder="Search..." />
              <AiOutlineSearch className="icon-search"/>  
          </div>
          <div className="d-flex header-right">
            <div className="header-right-imgamerica">
              <img src="../images/americalogo.jpg" alt="" />
            </div>
            <div className="icon">
              <BiSolidCategoryAlt/>
            </div>
            <div className="icon">
              <AiOutlineExpand/>
            </div>
            <div className="icon">
              <AiTwotoneBell/>
            </div>
            <div className="imgae-avatar-admin">
              <img src="../images/avatar.jpg" alt="" />
              <p>admin<AiOutlineDown/></p>  
            </div>
            <div className="icon">
              <FcSettings/>
            </div>
          </div>
      </div>
    </header>
  </div>;
};

export default Header;
