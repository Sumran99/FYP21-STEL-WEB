import React from "react";
import "./topbar.css";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <AirportShuttleIcon className="baricon"/>
          <span className="logo">S T E L</span>
          <span className="logoname">Safer Transport Electric Link</span>

        </div>
        <div className="topRight">Admin Portal</div>
      </div>
    </div>
  );
}
