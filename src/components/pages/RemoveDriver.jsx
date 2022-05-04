import "./removedriver.css";

import { DataGrid } from '@mui/x-data-grid';


import * as React from "react";
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Name', headerName: ' Full Name', width: 130 },
  { field: 'license', headerName: 'License Number', width: 130 },
  { field: 'experince', headerName: 'Year of Experince', width: 130 },
  { field: 'cnic', headerName: 'CNIC Number', width: 130 },

];
const rows = [
  { id: 1, Name: 'Khurram', license: '123pcc',experince:'2',cnic:'123456765432'},
];
export default function FormPropsTextFields() {
  return (
    <div className="boxes">
      <h1 className="heading">Remove Driver</h1>
      <div>
      <h4 className="title">Type CNIC of Driver </h4>
      <textarea className="textarea" placeholder="Type CNIC"> </textarea>
      <button className="Button" >Search Driver</button>

      </div>
      <div style={{ height: 200, width: '100%' }}className="grid">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={1}
        rowsPerPageOptions={[1]}
        checkboxSelection
      />
    </div>
    <div >
        <button className="deletebutton">Delete</button>
    </div>

      {/* <Box

        component="form"
        sx={{
          alignItems: "center",
          display: "grid",
          flexGrow: 1,
          minHeight: "100%",
          justifyContent: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <Stack spacing={2} direction="column">
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello 1"
            margin="normal"
          />
          
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello 2"
            margin="normal"
          />
        </Stack>

        <Stack spacing={2} direction="column">
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello 2"
            margin="normal"
          />
        </Stack>
      </Box> */}
    </div>
  );
}