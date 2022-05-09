import React, { useState } from "react";
import "./removeroute.css";
export default function Removeroute() {
  const [routernumber, setroutenumber] = useState("");
  return (
    <div className="removeroute">
      <h1 className="heading">Remove Route</h1>
      <input
        className="textarea"
        placeholder="Enter Route Number"
        type="text"
        value={routernumber}
        onChange={(e) => {
          setroutenumber(e.target.value);
        }}
      ></input>
      <button
        className="Button"
        onClick={() => {
          const obj = { routernumber: routernumber };
          console.log(JSON.stringify(obj));
        }}
      >
        Delete Route
      </button>
    </div>
  );
}
