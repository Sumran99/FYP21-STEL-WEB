import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "busnumber", headerName: "Bus No", width: 85 },
  { field: "chasenumber", headerName: "Chase No", width: 120 },
  { field: "millage", headerName: "Mileage", width: 120 },
  { field: "capacity", headerName: "Capacity", width: 120 },
  { field: "ac", headerName: "AC", width: 70 },
  { field: "active", headerName: "Active", width: 70 },
];

const Showbus = () => {
  const [buses, setBuses] = React.useState([]);
  const [deleteNo, setDeleteNo] = React.useState([]);
  const [check, setCheck] = React.useState(false);
  const getAllBuses = React.useCallback(async () => {
    const response = await fetch(
      "https://stel-api.herokuapp.com/api/bus/buses"
    );
    const data = await response.json();
    setBuses(data.Buses);
  }, []);

  const handledelete = async () => {
    try {
      await fetch("https://stel-api.herokuapp.com/api/bus/deleteBus", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          busnumber: deleteNo,
        }),
      })
        .then((res) => res.json())
        .then((resp) => console.log(resp))
        .then((err) => console.log("Error Try Block" + err));
    } catch (err) {
      console.log("Error Catch Block" + err.message);
    }
  };

  React.useEffect(() => {
    console.log(
      JSON.stringify({
        busnumber: deleteNo,
      })
    );
  }, [deleteNo]);

  React.useEffect(() => {
    getAllBuses();
  }, [getAllBuses]);

  return (
    <>
      <Grid item xs={12}>
        <h1>Buses Details</h1>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ height: 400, width: "58%" }}>
          <DataGrid
            pageSize={5}
            rowsPerPageOptions={[10]}
            rows={buses}
            columns={columns}
            getRowId={(row) => row._id}
            checkboxSelection
            onSelectionModelChange={(ids) => {
              const selectedIDs = new Set(ids);
              const selectedArray = Array.from(selectedIDs);
              setDeleteNo(
                buses
                  .filter((row) => selectedArray.includes(row._id))
                  .map((item) => item.busnumber)
              );
            }}
          />
        </Box>
      </Grid>
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={handledelete}
      >
        Delete
      </Button>
    </>
  );
};

export default Showbus;
