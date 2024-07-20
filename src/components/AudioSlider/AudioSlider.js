import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MicOffIcon from "@mui/icons-material/MicOff";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const AudioSlider = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            height: "70px",
            width: "70px",
            border: "solid 1px white",
            borderRadius: "50%",
            color: "white",
            alignContent: "center",
            textAlign: "center",
            margin: "20px 0px 20px 60px"
          }}
        >
          <MicOffIcon style={{ transform: "scale(2.2)" }} />
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
            margin: "20px"
          }}
        >
          <ArrowDropUpIcon style={{ transform: "scale(3.2)" }} />
        </div>
        <Box sx={{ width: 500 }}>
          <p style={{padding: "1% 0 2% 27%", margin: "0", fontSize: "x-large", fontWeight: "bold"}}>Lectren Mic Volume</p>
          <Slider
          style={{height: "10px", padding: "0", margin: "0"}}
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </Box>
        <div
          style={{
            height: "70px",
            width: "70px",
            border: "solid 1px white",
            borderRadius: "50%",
            color: "white",
            alignContent: "center",
            textAlign: "center",
            margin: "20px"
          }}
        >
          <ArrowDropDownIcon style={{ transform: "scale(3.2)" }} />
        </div>
      </div>
    </div>
  );
};

export default AudioSlider;
