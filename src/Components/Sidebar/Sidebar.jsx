import React from "react";
import "./Sidebar.css"
import { Link } from "react-router-dom";
import { BsFillHouseDoorFill,BsFillCalendar2EventFill,BsFillEnvelopeFill,BsFillPeopleFill,BsFillFileEarmarkMinusFill } from "react-icons/bs";
import { AiOutlineDown,AiOutlineForm,AiOutlineTable} from "react-icons/ai";
import { PiBagSimpleFill } from "react-icons/pi";
const Sidebar = () => {
  return <div>
    <div id="sidebar-menu">
        <div className="list-sidebar-menu">
          <ul className="metismenu">
            <li className="menu-title">menu</li>
            <li><Link><BsFillHouseDoorFill/><span>Dashboard</span></Link></li>
            <li><Link><BsFillCalendar2EventFill/><span>Calendar</span></Link></li>
            <li><Link><BsFillEnvelopeFill/><span>Email</span><AiOutlineDown className="icon-down"></AiOutlineDown></Link></li>
          </ul>
          <ul className="metismenu">
            <li className="menu-title">Pages</li>
            <li><Link><BsFillPeopleFill/><span>Authentication</span><AiOutlineDown className="icon-down"></AiOutlineDown></Link></li>
            <li><Link><BsFillFileEarmarkMinusFill/><span>Utility</span><AiOutlineDown className="icon-down"></AiOutlineDown></Link></li>
          </ul>
          <ul className="metismenu">
            <li className="menu-title">Components</li>
            <li><Link><BsFillFileEarmarkMinusFill/><span>UI Elements</span><AiOutlineDown className="icon-down"></AiOutlineDown></Link></li>
            <li><Link><BsFillFileEarmarkMinusFill/><span>Forms</span><AiOutlineDown className="icon-down"></AiOutlineDown></Link></li>
            <li><Link><BsFillFileEarmarkMinusFill/><span>Tables</span><AiOutlineDown className="icon-down"></AiOutlineDown></Link></li>
            <li><Link><BsFillFileEarmarkMinusFill/><span>Charts</span><AiOutlineDown className="icon-down"></AiOutlineDown></Link></li>
            <li><Link><BsFillFileEarmarkMinusFill/><span>Icons</span><AiOutlineDown className="icon-down"></AiOutlineDown></Link></li>
            <li><Link><BsFillFileEarmarkMinusFill/><span>Maps</span><AiOutlineDown className="icon-down"></AiOutlineDown></Link></li>
            <li><Link><BsFillFileEarmarkMinusFill/><span>Multi Level</span><AiOutlineDown className="icon-down"></AiOutlineDown></Link></li>
          </ul>
        </div>
    </div>
  </div>;
};

export default Sidebar;
