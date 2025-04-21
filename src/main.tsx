import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx' // Add the .tsx extension for clarity

// Uncomment this if your index.css exists
// import './index.css'

// Get the root element more safely
const rootElement = document.getElementById('root')

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
} else {
  console.error('Root element not found in the document')
}