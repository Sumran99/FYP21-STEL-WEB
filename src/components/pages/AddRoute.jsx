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
            const obj = { number: routenumber, to: to, from: from };
            console.log(obj);
            fetch("/api/route/addRoute", {
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
