import './App.css';
import React from 'react';
import Welcome from './Welcome';
import LogIn from "./LogIn";
import SignUp from './SignUp';
import Home from './Home';
import Interests from './Interests';
import Admin from './Admin';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Welcome/>}/>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<LogIn/>} />
          <Route path='/Home/*' element={<Home/>} />
          <Route path="/Home/interests" element={<Interests />} />
          <Route path="/Home/admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


