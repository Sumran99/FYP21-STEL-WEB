import React, { useState } from "react";
import "./addroute.css";

export default function AddRoute() {
  const [routenumber, setroutenumber] = useState("");
  const [to, setto] = useState("");
  const [from, setfrom] = useState("");

  return (
    <div className="BUSconatiner">
      <h1 className="heading">Add Route</h1>
      <div class="solid" />
      <div className="Textarea">
        <input
          className="textarea"
          placeholder="Add Route Number"
          type={Text}
          value={routenumber}
          onChange={(e) => {
            setroutenumber(e.target.value);
          }}
        ></input>
        <input
          className="textarea"
          placeholder=" To"
          type={Text}
          value={to}
          onChange={(e) => {
            setto(e.target.value);
          }}
        ></input>
        <input
          className="textarea"
          placeholder="From"
          type={Text}
          value={from}
          onChange={(e) => {
            setfrom(e.target.value);
          }}
        ></input>

        <button
          className="Button"
          onClick={() => {
            const obj = {};
            console.log();
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
