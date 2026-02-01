import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import LoginForm from './components/loginForm.jsx'
import SignupForm from './components/signupForm.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <nav className='d-flex gap-3 p-3 bg-light'>
        <Link to="/">Home</Link> 
        <Link to="/login">Login</Link> 
        <Link to="/signup">Signup</Link> 
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
