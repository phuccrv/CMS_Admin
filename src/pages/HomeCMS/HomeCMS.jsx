import React from "react";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import FormsElements from "../../Components/FormsElements/FormsElements";
import "./HomeCMS.css"
const HomeCMS = () => {
  return (
    <div className="home-show">
      <Header />
      {/* <Sidebar/> */}
      <FormsElements/>
    </div>
  );
};

export default HomeCMS;
