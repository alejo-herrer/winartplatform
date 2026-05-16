import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import { Plan } from './Pages/Plan/Plan.jsx'
import { Speakers } from './Pages/Speakers/Speakers.jsx'
import { W2026 } from './Pages/2026/W2026.jsx'



createRoot(document.getElementById('root')).render(
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Speakers" element={<Speakers/>} />
        <Route path="/Plan" element={<Plan />} />
        <Route path="/W2026" element={<W2026/>} />
      </Routes>
    </BrowserRouter>
)
