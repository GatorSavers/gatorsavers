import React, { Component } from 'react';
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Home from "./components/home"
import About from "./components/about"
import Login from "./components/login"
import Nav from "./components/nav"
import Signup from "./components/register"
import "./_app.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="content">
           <Nav/>
           <Routes>
            <Route path="/" element= <Home/> />
            <Route path="/about" element= <About/> />
            <Route path="/login" element= <Login/> />
            <Route path="/signup" element= <Signup/> />
           </Routes>
          </div>
      </BrowserRouter>
    )
  }
}

export default App;
