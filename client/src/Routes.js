import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/login'
import Signup from './components/register'
import Home from "./components/home"
import About from "./components/about"
import Nav from "./components/nav"
import Footer from "./components/footer"
//import SideBar from './components/sidebar';
import { UserContext } from './App'

function RoutesComp() {
  const userContext = useContext(UserContext)
  return (
    <>
      <Routes>
        {userContext.email && (
          <Route path='/' element={<>Welcome {userContext.email}</>} />
        )}
        {!userContext.email && (
          <>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </>
        )}
      </Routes>
    </>
  )
}

export default RoutesComp