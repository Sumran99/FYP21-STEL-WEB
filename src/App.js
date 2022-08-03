import "./App.css";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Addbus from "./Components/Pages/Addbus";
import Deletebus from "./Components/Pages/Deletebus";
import UpdateBus from "./Components/Pages/UpdateBus";
import Showbus from "./Components/Pages/Showbus";
import AddRoute from "./Components/Pages/AddRoute";
function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route exact path="/overview/addbus" element={<Addbus />} />
          <Route exact path="/overview/deletebus" element={<Deletebus />} />
          <Route exact path="/overview/updatebus" element={<UpdateBus />} />
          <Route exact path="/overview/showbus" element={<Showbus />} />
          <Route exact path="/route/addroute" element={<AddRoute />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
