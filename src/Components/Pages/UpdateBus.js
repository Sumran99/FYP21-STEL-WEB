import React, { useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import { DataGrid, renderActionsCell } from "@mui/x-data-grid";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
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

const UpdateBus = () => {
  const [numbers, setNumber] = React.useState([]);
  const [data, setData] = React.useState("");
  const [filteredBus, setFilteredBus] = React.useState([]);
  const [bus, setBus] = React.useState([]);
  const [active, setActive] = React.useState("");
  const [acChecked, setAcChecked] = React.useState(true);
  const [activeChecked, setActiveChecked] = React.useState(true);
  const [mileage, setMileage] = React.useState("");
  const [capacity, setCapacity] = React.useState("");
  const [chaseNo, setChaseNo] = React.useState("");
  const [focus, setFocus] = React.useState(false);
  const columns = [
    { field: "busNumber", headerName: "Bus No", width: 85 },
    { field: "chaseNumber", headerName: "Chase No", width: 120 },
    { field: "millage", headerName: "Mileage", width: 120 },
    { field: "capacity", headerName: "Capacity", width: 120 },
    { field: "ac", headerName: "AC", width: 70 },
    { field: "active", headerName: "Active", width: 60 },
  ];
  const handleupdate = async (e) => {
    try {
      await fetch("https://stel-api.herokuapp.com/api/bus/updateBus", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          busNumber: data,
          capacity: Array.isArray(capacity) ? capacity.join() : capacity,
          millage: Array.isArray(mileage) ? mileage.join() : mileage,
          chaseNumber: Array.isArray(chaseNo) ? chaseNo.join() : chaseNo,
          ac: acChecked,
          active: activeChecked,
        }),
      })
        .then((res) => res.json())
        .then((resp) => console.log(resp))
        .then((err) => console.log("Error Try Block" + err));
    } catch (err) {
      console.log("Error Catch Block" + err.message);
    }
  };
  const handleChange = async (event) => {
    setData(event.target.value);
  };

  const getBuses = async () => {
    const response = await fetch(
      "https://stel-api.herokuapp.com/api/bus/buses"
    );
    const res = await response.json();
    setBus(res.Buses);
  };

  React.useEffect(() => {
    getBuses();
    if (data === "") {
      setFilteredBus(bus);
    } else {
      setFilteredBus([
        ...[],
        bus.find((element) => element.busNumber === data),
      ]);
    }
  }, [data]);

  React.useEffect(() => {
    setMileage([...[], filteredBus.map((element) => element.millage)]);
    setCapacity([...[], filteredBus.map((element) => element.capacity)]);
    setChaseNo([...[], filteredBus.map((element) => element.chaseNumber)]);
    setAcChecked(filteredBus.map((element) => element.ac)[0]);
    setActiveChecked(filteredBus.map((element) => element.active)[0]);
  }, [filteredBus]);
  const getBusNumbers = React.useCallback(async () => {
    const response = await fetch(
      `https://stel-api.herokuapp.com/api/bus/busesNumbers`
    );
    const data = await response.json();
    setNumber(data.Buses);
  }, []);

  React.useEffect(() => {
    getBusNumbers();
  }, [filteredBus, getBusNumbers]);
  React.useEffect(() => {
    console.log(active);
  }, [active]);

  useEffect(() => {
    console.log(capacity);
  }, [capacity]);

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
        <RedBar />
        <h2>Bus Number</h2>
        <FormControl sx={{ m: 2, minWidth: 160 }} size="small">
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={data}
            onChange={handleChange}
          >
            {numbers.map((item) => {
              return (
                <MenuItem key={item._id} value={item.busNumber}>
                  {item.busNumber}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <Grid item xs={12}>
          <FormControl>
            <TextField
              defaultValue={mileage}
              key={mileage}
              label="mileage"
              variant="outlined"
              autoFocus={focus}
              onChange={(e) => {
                setMileage(e.target.value);
                setFocus(true);
              }}
            />
          </FormControl>
          <RedBar />
          <FormControl>
            <TextField
              key={capacity}
              defaultValue={capacity}
              label="capacity"
              variant="outlined"
              autoFocus={focus}
              onChange={(e) => {
                setCapacity(e.target.value);
                setFocus(true);
              }}
            />
          </FormControl>
          <RedBar />
          <FormControl>
            <TextField
              key={chaseNo}
              defaultValue={chaseNo}
              label="Chase No"
              variant="outlined"
              autoFocus={focus}
              onChange={(e) => {
                setChaseNo(e.target.value);
                setFocus(true);
              }}
            />
          </FormControl>
          <Stack direction="row" alignItems="center">
            <Typography>Non-AC</Typography>
            <Switch
              checked={acChecked}
              onChange={(event) => {
                setAcChecked(event.target.checked);
                setActive(!acChecked);
              }}
              inputProps={{ "aria-label": "ant design" }}
            />
            <Typography>AC</Typography>
            <p> || </p>
            <Typography>Non-Active</Typography>
            <Switch
              checked={activeChecked}
              onChange={(event) => {
                setActiveChecked(event.target.checked);
                setActive(!activeChecked);
              }}
              inputProps={{ "aria-label": "ant design" }}
            />
            <Typography>Active</Typography>
          </Stack>
          <Button variant="outlined" onClick={handleupdate}>
            Update Bus
          </Button>
        </Grid>
        <Grid item xs={12}>
          <h1>Bus Details</h1>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ height: 250, width: "168%" }}>
            <DataGrid
              rows={filteredBus}
              columns={columns}
              getRowId={(row) => row._id}
            />
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default UpdateBus;
