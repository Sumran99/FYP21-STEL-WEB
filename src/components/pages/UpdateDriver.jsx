import React, { useEffect } from "react";
import "./updatedriver.css";
import axios from "axios";
import { useState } from "react";

export default function UpdateDriver() {
  // const router = useRouter();
  // const { id } = router.query;
  // console.log("slug", id);
  const [blogdata, setBlogData] = useState({});
  const [loader, setLoader] = useState(false);
  // const styleObj = {
  //   color: "black",
  // };

  useEffect(() => {
    //setLoader(true);
    // console.log("hello from useEffect");
    axios
      .get(`/api/driver/drivers`)
      .then((response) => {
        console.log("response.data", response.data);
        setBlogData(response.data.data);
      })
      .catch((error) => {
        //setLoader(false);
      });
  }, []);
  return (
    <div className="boxes">
      Hello world: {setBlogData}
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
//   "/api/driver/drivers"
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
