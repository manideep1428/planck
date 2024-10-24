import { StrictMode } from "react";
import "@fontsource/inter";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/navbar/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <App />
  </StrictMode>,
)
