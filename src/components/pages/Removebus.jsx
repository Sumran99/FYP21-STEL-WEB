import React, { useState } from "react";
import "./removebus.css";
export default function Removebus() {
  const [busnumber, setbusnumber] = useState("");
  return (
    <div className="removebus">
      <h1 className="heading">Remove Bus</h1>
      <input
        className="textarea"
        placeholder="Enter Bus Number"
        type="text"
        value={busnumber}
        onChange={(e) => {
          setbusnumber(e.target.value);
        }}
      ></input>
      <button
        className="Button"
        onClick={() => {
          const obj = { busnumber: busnumber };
          console.log(JSON.stringify(obj));
        }}
      >
        Delete Bus
      </button>
    </div>
  );
}
