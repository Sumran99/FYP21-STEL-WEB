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
            const obj = { cnic: cnicnumber };
            console.log(JSON.stringify(obj));
            fetch("/api/driver/deleteDriver", {
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
          Delete Driver
        </button>
      </div>
    </div>
  );
}
