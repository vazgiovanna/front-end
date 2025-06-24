import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header/header.jsx'
import Home from './pages/home/home.jsx'
import Testes from './components/testes/testes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Home/>
    <Testes/>
  </StrictMode>,
)
