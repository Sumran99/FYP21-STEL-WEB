import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function RedBar() {
  return (
    <Box
      sx={{
        height: 10,
      }}
    />
  );
}

const Adddriver = () => {
  const [drivername, setdrivername] = React.useState("");
  const [phonenumber, setphonenumber] = React.useState("");
  const [cnic, setcnic] = React.useState("");
  const [license, setlicense] = React.useState("");
  const [experince, setexperince] = React.useState(false);
  const [message, setmessage] = React.useState("");
  let handlesubmit = async (e) => {
    try {
      await fetch("https://stel-api.herokuapp.com/api/driver/addDriver", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: drivername,
          phone: phonenumber,
          cnic: cnic,
          license: license,
          experience: experince,
        }),
      })
        .then((res) => res.json())
        .then((resp) => console.log(resp))
        .then((err) => console.log("Error Try Block" + err));
      setdrivername("");
      setphonenumber("");
      setcnic("");
      setlicense("");
      setexperince("");
    } catch (err) {
      console.log("Error Catch Block" + err.message);
    }
  };
  return (
    <>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          "& .MuiTextField-root": { width: "35ch" },
        }}
        autoComplete="off"
      >
        <h2>Add Driver Details</h2>

        <RedBar />
        <TextField
          id="driver-name"
          label="Driver Name"
          variant="outlined"
          value={drivername}
          onChange={(e) => setdrivername(e.target.value)}
        />
        <RedBar />
        <TextField
          id="driver-phonenumber"
          label="Driver Phone Number"
          variant="outlined"
          value={phonenumber}
          onChange={(e) => setphonenumber(e.target.value)}
        />
        <RedBar />
        <TextField
          id="cnic"
          label="Driver CNIC"
          variant="outlined"
          value={cnic}
          onChange={(e) => setcnic(e.target.value)}
        />
        <RedBar />
        <TextField
          id="license"
          label="License Number"
          variant="outlined"
          value={license}
          onChange={(e) => setlicense(e.target.value)}
        />
        <RedBar />
        <TextField
          id="experince"
          label="Driving Experinence"
          variant="outlined"
          value={experince}
          onChange={(e) => setexperince(e.target.value)}
        />
        <RedBar />

        <Button variant="outlined" onClick={handlesubmit}>
          Add Driver
        </Button>

        <p>{message}</p>
      </Box>
    </>
  );
};

export default Adddriver;
