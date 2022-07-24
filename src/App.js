import React from "react";

import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Adddriver from "./components/pages/Adddriver";
import UpdateDriver from "./components/pages/UpdateDriver.jsx";
import RemoveDriver from "./components/pages/RemoveDriver";
import AddBus from "./components/pages/AddBus";
import AddRoute from "./components/pages/AddRoute";
import AddTRip from "./components/pages/AddTRip";
import Removebus from "./components/pages/Removebus";
import Removeroute from "./components/pages/Removeroute";
import Login from "./components/pages/login";
import ViewDriver from "./components/pages/viewdriver";
import ViewBus from "./components/pages/viewbus";
import ViewRoute from "./components/pages/viewroute";
import Signup from "./components/pages/signup";
function App() {
  return (
    <Router>
      {/* <Topbar /> */}
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/adddriver" element={<Adddriver />} />
          <Route path="/updatedriver" element={<UpdateDriver />} />
          <Route path="/removedriver" element={<RemoveDriver />} />
          <Route path="/addbus" element={<AddBus />} />
          <Route path="/addroute" element={<AddRoute />} />
          <Route path="/addtrip" element={<AddTRip />} />
          <Route path="/removebus" element={<Removebus />} />
          <Route path="/removeroute" element={<Removeroute />} />
          <Route path="/viewdriver" element={<ViewDriver />} />
          <Route path="/viewbus" element={<ViewBus />} />
          <Route path="/viewroute" element={<ViewRoute />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
