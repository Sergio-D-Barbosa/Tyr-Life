import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './routesPage/home'
import './componentes/css/app.css'
/* import Login from './routesPage/login'
import Register from './routesPage/register' */

class App extends React.Component{
  render(){
    return(
      <Router>
        <Routes>
          <Route path='/' element={
            <Home/>
          }/>
          {/* <Route path='/login' element={
            <Login/>
          }>
          </Route>
          <Route path='/register' element={
            <Register/>
          }>
          </Route>
          <Route path='/home' element={
            <h1>Home!</h1>
          }>
          </Route> */}
        </Routes>
      </Router>
    )
  }
}

export default App
