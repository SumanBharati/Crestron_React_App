import React from "react";
import "./MainComponent.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import TvTwoToneIcon from "@mui/icons-material/TvTwoTone";
import LaptopMacTwoToneIcon from "@mui/icons-material/LaptopMacTwoTone";
import AlbumTwoToneIcon from "@mui/icons-material/AlbumTwoTone";
import pcLogo from "../../assets/PC Logo.png";
import { useSelector } from "react-redux";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MicOffIcon from "@mui/icons-material/MicOff";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const MainComponent = () => {
  const { isAVRoutingViewOpen, isConferencingViewOpen } = useSelector(
    (store) => store.pageview
  );
  console.log(
    "AVRoutingView:" + isAVRoutingViewOpen,
    "ConferencingView:" + isConferencingViewOpen
  );
  return (
    <div>
      {isAVRoutingViewOpen && (
        <>
          <div className="source">
            <div className="label">Step 1. Select a Source.</div>
            <div className="source-destination-cards">
              <div className="card">
                <p className="card-label">PC HDMI 1</p>
                <img src={pcLogo} alt="PC-logo" className="desktop" />
              </div>
              <div className="card">
                <p className="card-label">PC HDMI 2</p>
                <img src={pcLogo} alt="PC-logo" className="desktop" />
              </div>
              <div className="card">
                <p className="card-label">LAPTOP 1</p>
                <LaptopMacTwoToneIcon className="laptop" />
              </div>
              <div className="card">
                <p className="card-label">LAPTOP 2</p>
                <LaptopMacTwoToneIcon className="laptop" />
              </div>
            </div>
          </div>
          <div className="destination">
            <div className="label">Step 2. Select the Destination.</div>
            <div className="source-destination-cards">
              <div className="card">
                <p className="card-label">DISPLAY LEFT</p>
                <TvTwoToneIcon className="display" />
              </div>
              <div className="card">
                <p className="card-label">DISPLAY RIGHT</p>
                <TvTwoToneIcon className="display" />
              </div>
              <div className="card">
                <p className="card-label">ROOM AUDIO</p>
                <AlbumTwoToneIcon className="room-audio" />
              </div>
            </div>
          </div>
        </>
      )}
      {isConferencingViewOpen && (
        <div className="conferencing_control_main">
          <div className="camera_control">
            {" "}
            <div className="label">Camera</div>
            <p className="preset_label">Press and Hold to Store Preset</p>
            <div className="all_buttons">
              <div className="preset_button">1</div>
              <div className="preset_button">2</div>
              <div className="preset_button">3</div>
              <div className="preset_button">4</div>
            </div>
            <div className="all_buttons">
              <div className="zoom_in_out_button">
                <p className="zoom_in_out_icon">➕</p>
                <p className="zoom_in_out_label">Zoom In</p>
              </div>
              <div className="zoom_in_out_button">
                <p className="zoom_in_out_icon">➖</p>
                <p className="zoom_in_out_label">Zoom Out</p>
              </div>
            </div>
            <div style={{ margin: "20px" }}>
              <div className="keypad">
                <div></div>
                <div className="key">
                  <ArrowDropUpIcon className="arrow_icon" />
                </div>
                <div></div>
              </div>
              <div className="keypad">
                <div className="key">
                  <ArrowLeftIcon className="arrow_icon" />
                </div>
                <div className="key" style={{ border: "solid 6px white" }}>
                  <p style={{ padding: "0", margin: "0" }}>Pan Tilt</p>
                </div>
                <div className="key">
                  <ArrowRightIcon className="arrow_icon" />
                </div>
              </div>
              <div className="keypad">
                <div></div>
                <div className="key">
                  <ArrowDropDownIcon className="arrow_icon" />
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <div>
            <div className="ceiling_mic">
              <div className="label">Ceiling Mic</div>
              <div className="mic">
                <div className="mic_icon_box">
                  <MicOffIcon className="mic_icon" />
                </div>
              </div>
            </div>
            <div className="outgoing_volume_box">
              <div className="label">Outgoing Volume</div>
              <div className="outgoing_volume">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    marginLeft: "10px",
                    marginTop: "30px",
                  }}
                >
                  <div
                    style={{
                      height: "70px",
                      width: "70px",
                      border: "solid 2px white",
                      borderRadius: "50%",
                      color: "white",
                      alignContent: "center",
                      textAlign: "center",
                      marginTop: "55px"
                    }}
                  >
                    <ArrowDropUpIcon style={{ transform: "scale(3.2)" }} />
                  </div>
                  <Box sx={{ width: 400 }} style={{marginTop: "20px"}}>
                    <Slider
                    style={{height: "5px",marginTop: "50px"}}
                      defaultValue={50}
                      aria-label="Default"
                      valueLabelDisplay="auto"
                    />
                  </Box>
                  <div
                    style={{
                      height: "70px",
                      width: "70px",
                      border: "solid 2px white",
                      borderRadius: "50%",
                      color: "white",
                      alignContent: "center",
                      textAlign: "center",
                      marginTop: "55px"
                    }}
                  >
                    <ArrowDropDownIcon style={{ transform: "scale(3.2)" }} />
                  </div>
                </div>
                <div
                  style={{
                    height: "70px",
                    width: "70px",
                    border: "solid 2px white",
                    borderRadius: "50%",
                    color: "white",
                    alignContent: "center",
                    textAlign: "center",
                    margin: "8% 0 0 45%",
                  }}
                >
                  <MicOffIcon style={{ transform: "scale(2.2)" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainComponent;
