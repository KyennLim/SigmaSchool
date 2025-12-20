import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import wishList from './wishList.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={wishList}>
    <App />
    </Provider>
  </StrictMode>,
)
