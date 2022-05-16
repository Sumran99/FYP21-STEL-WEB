import React from "react";
import "./updatedriver.css";
export default function UpdateDriver() {
  const data = fetch("/api/driver/drivers", {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err));
  return (
    <div className="boxes">
      Hello world: {data}
      <input className="textarea" placeholder="Enter Driver CNIC"></input>
      <button className="Buttonupdate">Serach Driver</button>
      <form action="" class="search-bar">
        <input type="search" name="search" pattern=".*\S.*" required />
        <button class="search-btn" type="submit">
          <span>Search</span>
        </button>
      </form>
    </div>
  );
}

/****************************** */
/*
const data = fetch("/api/driver/drivers", {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    // (var) payload looks like this {Header: "Sending", . . .}
  })
    .then((res) => res.json())
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err));
    */
