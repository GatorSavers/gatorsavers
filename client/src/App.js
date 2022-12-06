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
//import SideBar from './components/sidebar';
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
           </Routes>
           <Footer/>
          </div>
      </BrowserRouter>
    )
  }
}

export default App;
