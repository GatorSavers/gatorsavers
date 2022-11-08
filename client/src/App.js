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
import Footer from "./components/footer"
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="content">
           <Nav/>
           <Routes>
            <Route path="/" element= <Home/> />
            <Route path="/pages/about" element= <About/> />
            <Route path="/pages/login" element= <Login/> />
           </Routes>
           <Footer/>
          </div>
      </BrowserRouter>
    )
  }
}
    /** 
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pages/login">Login</Link>
            </li>
            <li>
              <Link to="/pages/explore">Login</Link>
            </li>
            <li>
              <Link to="/pages/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/pages/about">
            <About/>
          </Route>
          <Route path="/pages/explore">
            <Explore/>
          </Route>
          <Route path="/pages/login">
            <Login/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
    **/

export default App;
