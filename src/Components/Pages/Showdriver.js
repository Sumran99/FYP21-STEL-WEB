import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
const columns = [
  { field: "name", headerName: "Name", width: 120 },
  { field: "phone", headerName: "Phone No", width: 120 },
  { field: "cnic", headerName: "CNIC", width: 120 },
  { field: "license", headerName: "License No", width: 120 },
  { field: "experience", headerName: "Experince", width: 100 },
];

const Showdriver = () => {
  const [driver, setdriver] = React.useState([]);

  const getAllDrivers = async () => {
    const response = await fetch(
      "https://stel-api.herokuapp.com/api/driver/drivers"
    );
    const data = await response.json();
    setdriver(data.Drivers);
    console.log(driver);
  };

  React.useEffect(() => {
    getAllDrivers();
  }, [driver]);
  return (
    <>
      <Grid
        justifyContent="center"
        container
        direction="column"
        alignItems="center"
        item
        xs={12}
      >
        <h1>Driver Details</h1>
      </Grid>
      <Grid
        item
        xs={12}
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "50vh" }}
      >
        <Box sx={{ height: 400, width: "50%" }}>
          <DataGrid
            rows={driver}
            columns={columns}
            getRowId={(row) => row._id}
          />
        </Box>
      </Grid>
    </>
  );
};

export default Showdriver;
