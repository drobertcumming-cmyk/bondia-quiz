import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './App.css'
import { initGA } from './utils/analytics'
import { initKlaviyo } from './utils/klaviyo'

initGA()
initKlaviyo()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
