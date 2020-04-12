import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <ul>
       <li><a href="#">Home</a></li> 
       <li><a href="#">About</a></li>
       <li><a href="#">SignIn</a></li>
       <li><a href="#">SignUp</a></li>
      </ul>  
    </div>
    </Router> 
  );
}

export default App;
