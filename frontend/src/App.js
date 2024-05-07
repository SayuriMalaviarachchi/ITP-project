
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LabTestList from "./pages/labrotary/LabTestList";
import AddLabTest from "./pages/labrotary/AddLabTest";
import UserProfile from "./pages/labrotary/UserProfile";
import Login from "./pages/labrotary/Login";
import Register from "./pages/labrotary/Register";
import RequestedLabTestList from "./pages/labrotary/RequestedLabTestList";
import UpdateLabTest from './pages/labrotary/UpdateLabTest';

<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>


function App() {
  return (
    <Router>
      <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossorigin="anonymous"
      />
        <Routes>
          <Route path="/" element={<LabTestList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/lab-test" element={<LabTestList />} />
          <Route path="/add-lab-test" element={<AddLabTest />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/requested-lab-tests" element={<RequestedLabTestList />} />
          <Route path="/update-lab-test" element={<UpdateLabTest />} />
          
        </Routes>
      </div>
  </Router>
  );
}

export default App;
