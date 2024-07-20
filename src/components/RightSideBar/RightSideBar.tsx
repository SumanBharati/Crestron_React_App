import React from "react";
import "./RightSideBar.css";
import VolumeSlider from '../VolumeSlider/VolumeSlider';

const RightSideBar = () => {
  return (
    <div>
      <div className="roomAudioVolume">
        <VolumeSlider />
      </div>
    </div>
  );
};

export default RightSideBar;
