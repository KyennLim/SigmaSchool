import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import LoginForm from './components/loginForm.jsx'
import SignupForm from './components/signupForm.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'

// Create a new component that wraps everything
function Root() {
  const [tokenStatus, setTokenStatus] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setTokenStatus(true);
    } else {
      setTokenStatus(false);
    }
  }, []);

  return (
    <BrowserRouter>
      <nav className='d-flex gap-3 p-3 bg-light'>
        {tokenStatus ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={() => {
              localStorage.removeItem('token');
              setTokenStatus(false);
            }}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/">Home</Link> 
            <Link to="/login">Login</Link> 
            <Link to="/signup">Signup</Link> 
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<div><h1>Home Page</h1></div>} />
        <Route path="/dashboard" element={<App />} />
        <Route path="/login" element={<LoginForm setTokenStatus={setTokenStatus} />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)