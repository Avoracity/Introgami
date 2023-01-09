import React from 'react';
import { useState } from 'react';
import Index from "../pages/index";
import Navbar from "../components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Create from "../components/Create";
// import Explore from "../components/Explore";
// import About from "../components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Index />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />


          <Route path="/create" element={<Create />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
