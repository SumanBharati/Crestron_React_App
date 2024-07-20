import React from "react";
import "./MainPage.css";
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import MainComponent from "../MainComponent/MainComponent";
import RightSideBar from "../RightSideBar/RightSideBar";

const MainPage = () => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="leftCenterRightComponent">
      <div className="leftSideBar">
        <LeftSideBar />
      </div>

      <div className="mainComponent">
        <MainComponent />
      </div>
      <div className="rightSideBar">
        <RightSideBar />
      </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
