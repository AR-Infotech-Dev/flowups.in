import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import './assets/css/main.css'

// Vendor CSS (important)
import './assets/vendor/aos/aos.css'
import './assets/vendor/bootstrap/css/bootstrap.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/glightbox/css/glightbox.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
