import React from "react";
// import Logo from "../../assets/Tesla-logo.jpg";
import './TitleBar.css'

const TitleBar = () => {
  return (
    <div>
      <div className="title">
        {/* <img src={Logo} alt="logo" className="logo" /> */}
        <h1 className="roomTitle">Training Room 1001</h1>
      </div>
      <div></div>
    </div>
  );
};

export default TitleBar;
