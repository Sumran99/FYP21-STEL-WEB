import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

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
  const [checked, setChecked] = React.useState(true);

  const columns = [
    { field: "busNumber", headerName: "Bus No", width: 85 },
    { field: "chaseNumber", headerName: "Chase No", width: 120 },
    { field: "millage", headerName: "Mileage", width: 120 },
    { field: "capacity", headerName: "Capacity", width: 120 },
    { field: "ac", headerName: "AC", width: 70 },
    { field: "active", headerName: "Active", width: 70 },
  ];

  const handleChange = async (event) => {
    setData(event.target.value);
  };

  const getBuses = React.useCallback(async () => {
    const response = await fetch(
      "https://stel-api.herokuapp.com/api/bus/buses"
    );
    const res = await response.json();
    setBus(res.Buses);
  }, []);

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
  }, [data, getBuses, filteredBus, bus]);

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
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
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
          <TextField id="outlined-basic" label="mileage" variant="outlined" />
          <TextField id="outlined-basic" label="capacity" variant="outlined" />
          <Stack direction="row" alignItems="center">
            <Typography>Non-Active</Typography>
            <Switch
              checked={checked}
              onChange={(event) => {
                setChecked(event.target.checked);
                setActive(!checked);
              }}
              inputProps={{ "aria-label": "ant design" }}
            />
            <Typography>Active</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <h1>Bus Details</h1>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ height: 300, width: "200%" }}>
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
