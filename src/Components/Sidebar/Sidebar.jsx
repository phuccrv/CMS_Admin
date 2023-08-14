import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import {
  BsFillHouseDoorFill,
  BsFillCalendar2EventFill,
  BsFillEnvelopeFill,
  BsFillPeopleFill,
  BsFillFileEarmarkMinusFill,
} from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
const Sidebar = () => {
  const [showFormsSubMenu, setShowFormsSubMenu] = useState(false);

  const toggleFormsSubMenu = () => {
    setShowFormsSubMenu(!showFormsSubMenu);
  };

  return (
    <div>
      <div id="sidebar-menu">
        <div className="list-sidebar-menu">
          <ul className="metismenu">
            <li className="menu-title">menu</li>
            <li >
              <Link>
                <BsFillHouseDoorFill />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link>
                <BsFillCalendar2EventFill />
                <span>Calendar</span>
              </Link>
            </li>
            <li onClick={toggleFormsSubMenu}>
              <Link>
                <BsFillEnvelopeFill />
                <span>Email</span>
                <AiFillCaretDown className="icon-down"></AiFillCaretDown>
              </Link>
              {showFormsSubMenu && (
                <ul className="sub-menu">
                  <li>
                    <Link to="#">Inbox</Link>
                  </li>
                  <li>
                    <Link to="#">Read Email</Link>
                  </li>
                  <li>
                    <Link to="#">Email Compose</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
          <ul className="metismenu">
            <li className="menu-title">Pages</li>
            <li>
              <Link>
                <BsFillPeopleFill />
                <span>Authentication</span>
                <AiFillCaretDown className="icon-down"></AiFillCaretDown>
              </Link>
            </li>
            <li>
              <Link>
                <BsFillFileEarmarkMinusFill />
                <span>Utility</span>
                <AiFillCaretDown className="icon-down"></AiFillCaretDown>
              </Link>
            </li>
          </ul>
          <ul className="metismenu">
            <li className="menu-title">Components</li>
            <li>
              <Link>
                <BsFillFileEarmarkMinusFill />
                <span>UI Elements</span>
                <AiFillCaretDown className="icon-down"></AiFillCaretDown>
              </Link>
            </li>
            <li onClick={toggleFormsSubMenu}>
              <Link>
                <BsFillFileEarmarkMinusFill />
                <span>Forms</span>
                <AiFillCaretDown className="icon-down"></AiFillCaretDown>
              </Link>
              {showFormsSubMenu && (
                <ul className="sub-menu">
                  <li>
                    <Link to="/formelements">Form Elements</Link>
                  </li>
                  <li>
                    <Link to="#">Form Validation</Link>
                  </li>
                  <li>
                    <Link to="#">Form Advanced Plugins</Link>
                  </li>
                  <li>
                    <Link to="#">Form Editor</Link>
                  </li>
                  <li>
                    <Link to="#">Form File Upload</Link>
                  </li>
                  <li>
                    <Link to="#">Form Wizard</Link>
                  </li>
                  <li>
                    <Link to="#">Form Mask</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link>
                <BsFillFileEarmarkMinusFill />
                <span>Tables</span>
                <AiFillCaretDown className="icon-down"></AiFillCaretDown>
              </Link>
            </li>
            <li>
              <Link>
                <BsFillFileEarmarkMinusFill />
                <span>Charts</span>
                <AiFillCaretDown className="icon-down"></AiFillCaretDown>
              </Link>
            </li>
            <li>
              <Link>
                <BsFillFileEarmarkMinusFill />
                <span>Icons</span>
                <AiFillCaretDown className="icon-down"></AiFillCaretDown>
              </Link>
            </li>
            <li>
              <Link>
                <BsFillFileEarmarkMinusFill />
                <span>Maps</span>
                <AiFillCaretDown className="icon-down"></AiFillCaretDown>
              </Link>
            </li>
            <li>
              <Link>
                <BsFillFileEarmarkMinusFill />
                <span>Multi Level</span>
                <AiFillCaretDown className="icon-down"></AiFillCaretDown>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
