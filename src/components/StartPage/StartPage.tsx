import React, { useContext } from "react";
import "./StartPage.css";
// import { CrComLibContext } from "../../contexts/CrComLibContext";
import { useNavigate } from "react-router-dom";
import touchPanelImage from '../../assets/touchPanelImage.png';

const StartPage = () => {
  const navigate = useNavigate();
  // const { pulseDigital } = useContext(CrComLibContext);

  const handleClick = () => {
    navigate("/main-page");
    //   console.log("Info -> The start button has been clicked.");
    //   pulseDigital("StartPage.Button.Press");
  };
  return (
    <>
      <p className="startpage_text">Tap Anywhere To Begin</p>
      <img src={touchPanelImage} alt="touch_panel_image" className="startpage_image" onClick={handleClick} />
    </>
  );
};

export default StartPage;
