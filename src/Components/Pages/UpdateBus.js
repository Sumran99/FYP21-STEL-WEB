import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

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
  const [numbers, setNumber] = React.useState("");
  const [data, setData] = React.useState([]);
  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://stel-api.herokuapp.com/api/bus/busesNumbers"
      );
      setData(await response.json());
    }
    fetchData();
    // console.log(data.Buses.map((item) => item.busNumber));
  }, [data]);

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
            value={numbers}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {data.Buses.map((item) => {
              return (
                <MenuItem value={item.busNumber}>{item.busNumber}</MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default UpdateBus;
