import "./sidebar.css";
import AddIcon from "@mui/icons-material/Add";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";
import PreviewIcon from "@mui/icons-material/Preview";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sideTitle">Driver</h3>
          <ul className="sidebarList">
            <Link style={{ textDecoration: 'none', color: 'grey' }}to="/adddriver">
              <li className="sidebarListItem active">
                <AddIcon className="sidebaricon" />
                Add Driver
              </li>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'white' }}to="/removedriver">
              <li className="sidebarListItem">
                <DeleteIcon className="sidebaricon" />
                Remove Driver
              </li>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'white' }}to="/updatedriver">
              <li className="sidebarListItem">
                <UpdateIcon className="sidebaricon" />
                Update Driver
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sideTitle">Bus</h3>
          <ul className="sidebarList">
          <Link style={{ textDecoration: 'none', color: 'grey' }}to="/addBus">
            <li className="sidebarListItem">
              <AddIcon className="sidebaricon" />
              Add Bus
            </li>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'grey' }}to="/removebus">
            <li className="sidebarListItem">
              <DeleteIcon className="sidebaricon" />
              Remove Bus
            </li>
            </Link>
            <li className="sidebarListItem">
              <UpdateIcon className="sidebaricon" />
              Update Bus
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sideTitle">Route</h3>
          <ul className="sidebarList">
          <Link style={{ textDecoration: 'none', color: 'grey' }}to="/addroute">
            <li className="sidebarListItem active">
              <AddIcon className="sidebaricon" />
              Add Route
            </li>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'grey' }}to="/removeroute">
            <li className="sidebarListItem">
              <DeleteIcon className="sidebaricon" />
              Remove Route
            </li>
            </Link>
            <li className="sidebarListItem">
              <UpdateIcon className="sidebaricon" />
              Update Route
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sideTitle">Trip</h3>
          <ul className="sidebarList">
          <Link style={{ textDecoration: 'none', color: 'grey' }}to="/addtrip">
            <li className="sidebarListItem active">
              <AddIcon className="sidebaricon" />
              Add Trip
            </li>
            </Link>
            <li className="sidebarListItem">
              <DeleteIcon className="sidebaricon" />
              Remove Route
            </li>
            <li className="sidebarListItem">
              <UpdateIcon className="sidebaricon" />
              Update Route
            </li>
          </ul>
        </div>
        
        <div className="sidebarMenu">
          <h3 className="sideTitle">Reports</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <PreviewIcon className="sidebaricon" />
              Driver Report
            </li>
            <li className="sidebarListItem">
              <PreviewIcon className="sidebaricon" />
              Route Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
