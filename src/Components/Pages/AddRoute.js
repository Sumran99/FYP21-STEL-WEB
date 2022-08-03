import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
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
const AddRoute = () => {
  const [routeNo, setRouteNo] = React.useState("");
  const [departure, setDeparture] = React.useState("");
  const [arrival, setArrival] = React.useState("");
  const [message, setmessage] = React.useState("");
  let handlesubmit = async (e) => {
    try {
      let res = await fetch("", {
        body: JSON.stringify({
          routeNo: routeNo,
          departure: departure,
          arrival: arrival,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setRouteNo("");
        setDeparture("");
        setArrival("");
        setmessage("Route Added Succesfully");
      } else {
        setmessage("Error Occured ");
      }
    } catch (err) {
      console.log(err);
      setmessage("Error Occured ");
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
        <h2>Add Route Details</h2>

        <RedBar />
        <TextField
          id="route-number"
          label="Route Number"
          variant="outlined"
          onChange={(e) => setRouteNo(e.target.value)}
        />
        <RedBar />
        <TextField
          id="departure"
          label="Departure"
          variant="outlined"
          onChange={(e) => setDeparture(e.target.value)}
        />
        <RedBar />
        <TextField
          id="arrival"
          label="Arrival"
          variant="outlined"
          onChange={(e) => setArrival(e.target.value)}
        />
        <RedBar />
        <Button variant="outlined" onClick={handlesubmit}>
          Add Route
        </Button>

        <p>{message}</p>
      </Box>
    </>
  );
};

export default AddRoute;
