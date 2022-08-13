import "./App.css";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
// STEL Portal
import Addbus from "./Components/Pages/Addbus";
import Deletebus from "./Components/Pages/Deletebus";
import UpdateBus from "./Components/Pages/UpdateBus";
import Showbus from "./Components/Pages/Showbus";
import AddRoute from "./Components/Pages/AddRoute";
import Adddriver from "./Components/Pages/Adddriver";
import Showdriver from "./Components/Pages/Showdriver";
import Statistics from "./Components/Pages/Statistics";
import ShowRoute from "./Components/Pages/ShowRoute";
import DeleteRoute from "./Components/Pages/DeleteRoute";
import UpdateRoute from "./Components/Pages/UpdateRoute";
function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route exact path="/addbus" element={<Addbus />} />
          <Route exact path="/deletebus" element={<Deletebus />} />
          <Route exact path="/updatebus" element={<UpdateBus />} />
          <Route exact path="/showbus" element={<Showbus />} />
          <Route exact path="/addroute" element={<AddRoute />} />
          <Route exact path="/driver/adddriver" element={<Adddriver />} />
          <Route exact path="/driver/showdriver" element={<Showdriver />} />
          <Route exact path="/statistics" element={<Statistics />} />
          <Route exact path="/showroute" element={<ShowRoute />} />
          <Route exact path="/deleteroute" element={<DeleteRoute />} />
          <Route exact path="/updateroute" element={<UpdateRoute />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
