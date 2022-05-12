import React, { useState } from "react";
import "./addbus.css";

export default function AddBus() {
  const [busnumber, setBusnumber] = useState("");
  const [capacity, setCapacity] = useState("");
  const [mileadge, setMileadge] = useState("");
  const [chasenumber, setChasenumber] = useState("");
  const [ac, setac] = useState("ac");

  return (
    <div className="BUSconatiner">
      <h1 className="heading">Add Bus</h1>
      <div class="solid" />
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
        <input
          className="textarea"
          placeholder="Mileage"
          type={Text}
          value={mileadge}
          onChange={(e) => {
            setMileadge(e.target.value);
          }}
        ></input>
        <input
          className="textarea"
          placeholder="Chase Number"
          type={Text}
          value={chasenumber}
          onChange={(e) => {
            setChasenumber(e.target.value);
          }}
        ></input>
        <select className="select" 
          onChange={(e) => {
            setac(e.target.value);
          }}
        >
          <option  value="ac">AC</option>
          <option  value="non-ac">NON-AC</option>
        </select>
        <button
          className="Button"
          onClick={() => {
            const obj = {
              busnumber: busnumber,
              chasenumber: chasenumber,
              capacity: capacity,
              millage: mileadge,
              ac: ac,
            };
            console.log(JSON.stringify(obj));
            fetch("/api/bus/addBus", {
              method: "post",
              headers: {
                Accept: "application/json",
                "Content-type": "application/json",
              },
              // (var) payload looks like this {Header: "Sending", . . .}
              body: JSON.stringify(obj),
            })
              .then((res) => res.json())
              .then((resp) => console.log(resp))
              .catch((err) => console.log(err));
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
