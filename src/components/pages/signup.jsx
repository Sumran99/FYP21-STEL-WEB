import React from "react";
import Image from "../assets/Traveling-with.png";
function Signup() {
  return (
    <>
      <div className="img">
        <img src={Image} height={300} width={300} />
      </div>
      <div className="Textarea">
        <input className="textarea" placeholder="User Name" type={Text}></input>
        <input className="textarea" placeholder="User Name" type={Text}></input>

        <input className="textarea" placeholder="User Name" type={Text}></input>
      </div>
    </>
  );
}

export default Signup;
