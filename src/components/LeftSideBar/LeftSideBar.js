import React from "react";
import "./LeftSideBar.css";
import homeIcon from "../../assets/Home button.png";
import settingsIcon from "../../assets/settings.jpg";
import helpIcon from "../../assets/Help Button.png";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayLeftOff, setDisplayLeftOn, setDisplayRightOff, setDisplayRightOn } from "../../utils/displaySlice";

const LeftSideBar = () => {
  const dispatch = useDispatch();
  const { isDisplayLeftOn, isDisplayRightOn } = useSelector(store => store.display);

  return (
    <>
      <div className="display_left_right">
        <p className="display_left_label">Display Left</p>
        <div className={isDisplayLeftOn ? "on_off_active" : "on_off_default"} onClick={() => {dispatch(setDisplayLeftOn(true))}}>ON</div>
        <div className={!isDisplayLeftOn ? "on_off_active" : "on_off_default"} onClick={() => {dispatch(setDisplayLeftOff(false))}}>OFF</div>
      </div>

      <div className="display_left_right">
        <p className="display_right_label">Display Right</p>
        <div className={isDisplayRightOn ? "on_off_active" : "on_off_default"} onClick={() => {dispatch(setDisplayRightOn(true))}}>ON</div>
        <div className={!isDisplayRightOn ? "on_off_active" : "on_off_default"} onClick={() => {dispatch(setDisplayRightOff(false))}}>OFF</div>
      </div>

      <div className="help">
        <img className="help_icon" src={helpIcon} alt="help-icon" />
        <p className="help_label">Help</p>
      </div>
    </>
  );
};

export default LeftSideBar;
