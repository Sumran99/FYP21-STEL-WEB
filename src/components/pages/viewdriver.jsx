import React, { useEffect } from "react";
import "./updatedriver.css";
import axios from "axios";
import { useState } from "react";

export default function UpdateDriver() {
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);

  const fetchData = async () => {
    const response = await fetch("/api/driver/drivers");
    const data = await response.json();
    setUsers(data);
    setList(users.Drivers.map((driver) => <li>{driver}</li>));
  };

  useEffect(() => {
    fetchData();
  }, [users]);
  fetchData().then(console.log(users));

  return (
    <div className="boxes">
      <h1 className="heading">View Bus</h1>
      <ul>{JSON.stringify(list)}</ul>
    </div>
  );
}