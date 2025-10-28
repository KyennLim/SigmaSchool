import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element = {<Home />} path="/" />
      <Route element = {<Login />} path="/Login" />
    </Routes>
    </BrowserRouter>
      
  )
}

export default App
