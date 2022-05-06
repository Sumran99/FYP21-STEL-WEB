import React, { useState } from "react";
import "./addbus.css";

export default function AddBus() {
  const [busnumber, setBusnumber] = useState("");
  const [capacity, setCapacity] = useState("");
  const [mileadge, setMileadge] = useState("");
  const [chasenumber, setChasenumber] = useState("");


  return (
    <div className="BUSconatiner">
      <h1 className="heading">Add Bus</h1>
      <div className="Textarea">
        <input
          className="textarea"
          placeholder="Bus Number"
          type={Text}
          value={busnumber}
          onChange={(e) => {
            setBusnumber(e.target.value);
          }}
        ></input>
        <input
          className="textarea"
          placeholder="Students Capacity"
          type={Text}
          value={capacity}
          onChange={(e) => {
            setCapacity(e.target.value);
          }}
        ></input>
        <input className="textarea" placeholder="Mileage" type={Text}
        value={mileadge}
        onChange={(e) => {
          setMileadge(e.target.value);
        }}></input>
        <input
          className="textarea"
          placeholder="Chase Number"
          type={Text}
          value={chasenumber}
          onChange={(e) => {
            setChasenumber(e.target.value);
          }}
        ></input>
        <button className="Button">Add</button>
      </div>
    </div>
  );
}
