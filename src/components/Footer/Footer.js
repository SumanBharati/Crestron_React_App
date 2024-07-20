import React from "react";
import "./Footer.css";
import powerButton from "../../assets/Power off logo.png";
import aVRouting from "../../assets/AV Routing button.png";
import VideocamIcon from "@mui/icons-material/Videocam";
import {
  setAVRoutingView,
  setConferencingView,
} from "../../utils/pageViewSlice";
import { useDispatch, useSelector } from "react-redux";
import AudioSlider from "../AudioSlider/AudioSlider";
import SettingsIcon from "@mui/icons-material/Settings";

const Footer = () => {
  const dispatch = useDispatch();
  const { isAVRoutingViewOpen, isConferencingViewOpen } = useSelector(store => store.pageview);
  const handleAVRoutingClick = () => {
    dispatch(setAVRoutingView());
  };

  const handleConferencingClick = () => {
    dispatch(setConferencingView());
  };

  return (
    <>
      <div className="power">
        <img
          className="power_button"
          src={powerButton}
          alt="power-off-button"
        />
        <p className="power_button_label">Power Off</p>
      </div>
      <div className={isAVRoutingViewOpen ? "highlightedAVButton" : "aVRouting"} onClick={handleAVRoutingClick}>
        <img
          className="aVRouting_button"
          src={aVRouting}
          alt="aVRouting-button"
        />
        <p className="aVRouting_button_label">AV Routing</p>
      </div>
      <div className={isConferencingViewOpen ? "highlightedVTCButton" : "vtc"} onClick={handleConferencingClick}>
        <VideocamIcon className="videocam_button" />
        <p className="vtc_button_label">Conferencing </p>
        <p className="vtc_button_label">Controls</p>
      </div>
      <div className="micAudio"><AudioSlider /></div>
      <div className="settings">
        <SettingsIcon className="settings_icon" />
        <p className="settings_label">Settings</p>
      </div>
    </>
  );
};

export default Footer;
