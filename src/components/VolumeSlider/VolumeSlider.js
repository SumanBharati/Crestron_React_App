import React from "react";
import { Slider, Stack } from "@mui/material";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import MicOffIcon from "@mui/icons-material/MicOff";
import MicIcon from "@mui/icons-material/Mic";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const VolumeSlider = () => {
  function valuetext(value) {
    return `${value}°C`;
  }

  const marks = [
    {
      value: 0,
      label: "0°C",
    },
    {
      value: 20,
      label: "20°C",
    },
    {
      value: 37,
      label: "37°C",
    },
    {
      value: 100,
      label: "100°C",
    },
  ];
  return (
    <div style={{ width: "40rem", margin: "0" }}>
      <p style={{fontSize: "x-large", fontWeight: "bold", padding: "2% 0 0 8%", margin: "0"}}>Room</p>
      <p style={{fontSize: "x-large", fontWeight: "bold", padding: "0 0 0 8%", margin: "0"}}> Audio</p>
      <p style={{fontSize: "x-large", fontWeight: "bold", padding: "0 0 2% 7%", margin: "0"}}> Volume</p>
      <div
        style={{
          height: "70px",
          width: "70px",
          border: "solid 1px white",
          borderRadius: "50%",
          color: "white",
          alignContent: "center",
          textAlign: "center",
          marginLeft: "57px",
          marginBottom: "20px"
        }}
      >
        <ArrowDropUpIcon style={{ transform: "scale(3.2)" }} />
      </div>
      <Stack
        style={{ paddingLeft: "68px" }}
        sx={{ height: 400 }}
        spacing={1}
        direction="row"
      >
        <Slider
          style={{ width: "10px" }}
          orientation="vertical"
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          defaultValue={30}
        />
      </Stack>
      <div
        style={{
          height: "70px",
          width: "70px",
          border: "solid 1px white",
          borderRadius: "50%",
          color: "white",
          alignContent: "center",
          textAlign: "center",
          marginLeft: "57px",
          marginTop: "20px"
        }}>
        <ArrowDropDownIcon style={{ transform: "scale(3.2)" }} />
      </div>
      <div
        style={{
          height: "70px",
          width: "70px",
          border: "solid 1px white",
          borderRadius: "50%",
          color: "white",
          alignContent: "center",
          textAlign: "center",
          marginLeft: "57px",
          marginTop: "20px"
        }}>
        <VolumeOffIcon style={{ transform: "scale(2.2)" }} />
      </div>
    </div>
  );
};

export default VolumeSlider;
