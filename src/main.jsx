import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { BrowserRouter } from 'react-router-dom'
import LoginProvider from './context/loginContext.jsx' 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <LoginProvider>
      <App />
     </LoginProvider>
    </BrowserRouter>
  </StrictMode>,
)
