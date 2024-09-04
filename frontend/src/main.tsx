import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Reset } from './app.style.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Reset/>
    <App />
  </StrictMode>
)
