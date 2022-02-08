import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Index from './routesPage/Index'
import Register from './routesPage/register'
import Login from './routesPage/login'
import './componentes/css/app.css'
import './functions/alternador'

class App extends React.Component{
  render(){
    return(
      <Router>
        <Routes>
          <Route path='/' element={
            <Index />
          }/>
          <Route path='/login' element={
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
          </Route>
        </Routes>
      </Router>
    )
  }
}

export default App
