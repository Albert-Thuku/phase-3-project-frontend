import './App.css';
import React from 'react';
import Welcome from './Welcome';
import LogIn from "./LogIn";
import SignUp from './SignUp';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Welcome/>}/>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<LogIn/>} />
          <Route path='/Home' element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


