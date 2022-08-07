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

const Addbus = () => {
  const [busnumber, setbusnumber] = React.useState("");
  const [capacity, setcapacity] = React.useState("");
  const [mileage, setmileage] = React.useState("");
  const [chase, setchase] = React.useState("");
  const [ac, setac] = React.useState(false);
  const [message, setmessage] = React.useState("");
  let handlesubmit = async (e) => {
    try {
      await fetch("https://stel-api.herokuapp.com/api/bus/addBus", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          busNumber: busnumber,
          capacity: capacity,
          millage: mileage,
          chaseNumber: chase,
          ac: ac,
        }),
      })
        .then((res) => res.json())
        .then((resp) => console.log(resp))
        .then((err) => console.log("Error Try Block" + err));
      setbusnumber("");
      setcapacity("");
      setmileage("");
      setchase("");
      setac(!ac);
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
        <h2>Add Bus Details</h2>

        <RedBar />
        <TextField
          id="bus-number"
          label="Bus Number"
          variant="outlined"
          value={busnumber}
          onChange={(e) => setbusnumber(e.target.value)}
        />
        <RedBar />
        <TextField
          id="student-capacity"
          label="Student Capacity"
          variant="outlined"
          value={capacity}
          onChange={(e) => setcapacity(e.target.value)}
        />
        <RedBar />
        <TextField
          id="mileage"
          label="Mileage"
          variant="outlined"
          value={mileage}
          onChange={(e) => setmileage(e.target.value)}
        />
        <RedBar />
        <TextField
          id="chase_no"
          label="Chase Number"
          variant="outlined"
          value={chase}
          onChange={(e) => setchase(e.target.value)}
        />
        <RedBar />
        <FormLabel id="demo-row-radio-buttons-group-label">Choose</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value={!ac}
            control={<Radio />}
            label="AC"
            onChange={(e) => setac(!e.target.value)}
          />
          <FormControlLabel
            value={ac}
            control={<Radio />}
            label="Non AC"
            onChange={(e) => setac(!e.target.value)}
          />
        </RadioGroup>
        <RedBar />
        <Button variant="outlined" onClick={handlesubmit}>
          Add Bus
        </Button>

        <p>{message}</p>
      </Box>
    </>
  );
};

export default Addbus;
