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
  const [errorNo, setErrorNo] = React.useState("");
  const [capacityError, setCapacityError] = React.useState("");
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

  const handleBusNumber = (e)=>{
    const newValue = e.target.value;

  if (!newValue.match(/[^0-9a-zA-Z]+/ig)) {
    setErrorNo("");
  } else {
    setErrorNo("Enter only numbers and alphabets");
  }

  setbusnumber(newValue);

  };
  const handleCapacity = (e)=>{
    const newValue = e.target.value;

    if (!newValue.match(/[^0-9]+/ig)) {
      setCapacityError("");
    } else {
      setCapacityError("Enter only numbers");
    }
  

  setcapacity(newValue);
  }

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
          <form>
          <TextField
            id="bus-number"
            label="Bus Number"
            variant="outlined"
            value={busnumber}
            onChange={handleBusNumber}
            helperText={errorNo}
            error={!!errorNo }
            required
          />
          <RedBar />
          <TextField
            id="student-capacity"
            label="Student Capacity"
            variant="outlined"
            value={capacity}
            onChange={handleCapacity}
            helperText={capacityError}
            error={!!capacityError }
            required
            
          />
          <RedBar />
          <TextField
            id="mileage"
            label="Mileage"
            variant="outlined"
            value={mileage}
            onChange={(e) => setmileage(e.target.value)}
            required
          />
          <RedBar />
          <TextField
            id="chase_no"
            label="Chase Number"
            variant="outlined"
            value={chase}
            onChange={(e) => setchase(e.target.value)}
            required
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
          <Button type="submit" variant="outlined" onClick={handlesubmit}>
            Add Bus
          </Button>

          <p>{message}</p>
        </form>
      </Box>
    </>
  );
};

export default Addbus;
