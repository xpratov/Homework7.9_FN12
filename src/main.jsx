import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Barcha JSX kodlarni render qilamiz.    Vanihoyat tugadi :)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
