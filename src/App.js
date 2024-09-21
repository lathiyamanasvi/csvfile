import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Register from "./page/Register";
import Login from "./page/Login";
import TaskManager from "./page/Task";
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/tasks" element={<TaskManager />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
