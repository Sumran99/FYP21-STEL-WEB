import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function UpdateDriver() {
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);

  const fetchData = async () => {
    const response = await fetch("/api/route/routes");
    const data = await response.json();
    setUsers(data);
    setList(users.routes.map((driver) => <li>{driver}</li>));
  };

  useEffect(() => {
    fetchData();
  }, [users]);
  fetchData().then(console.log(users));

  return (
    <div className="boxes">
      <h1 className="heading">View Route</h1>
      <ul>{JSON.stringify(list)}</ul>
    </div>
  );
}
