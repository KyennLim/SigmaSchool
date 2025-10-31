import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import RequireAuth from './components/RequireAuth.jsx'
import { useState } from "react"
import { AuthContext } from './AuthContext.js'
import Dashboard from './pages/Dashboard.jsx'


export default function App(){
    const [token, setToken] = useState(null);

    return (
        <AuthContext.Provider value={{token,setToken}}>
        <BrowserRouter>
        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="/Login" />
            <Route element={
                <RequireAuth>
                    <Dashboard/>
                </RequireAuth>
                } path="/Dashboard" 
                />
        </Routes>
        </BrowserRouter>
        </AuthContext.Provider>
    )
}