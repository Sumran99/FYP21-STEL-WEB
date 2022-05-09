import "./removedriver.css";
import React, { useState } from "react";

export default function FormPropsTextFields() {
  const [cnicnumber, setcnicnumber] = useState("");
  return (
    <div className="boxes">
      <h1 className="heading">Remove Driver</h1>
      <div>
        <input
          className="textarea"
          placeholder="Type Driver CNIC"
          type="text"
          value={cnicnumber}
          onChange={(e) => {
            setcnicnumber(e.target.value);
          }}
        ></input>
        <button
          className="Button"
          onClick={() => {
            const obj = { drivercnic: cnicnumber };
            console.log(JSON.stringify(obj));
          }}
        >
          Delete Driver
        </button>
      </div>
    </div>
  );
}
