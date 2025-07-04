// React imports for rendering the application
import React from 'react'
import ReactDOM from 'react-dom/client'

// Main App component import
import App from './App.tsx' // Add the .tsx extension for clarity

// Uncomment this if your index.css exists
// import './index.css'

/**
 * Application entry point
 * This file is responsible for mounting the React application to the DOM
 * Uses React 18's createRoot API for improved performance and concurrency features
 */

// Get the root element more safely with proper error handling
const rootElement = document.getElementById('root')

// Check if root element exists before attempting to render
if (rootElement) {
  // Create React root and render the application
  // StrictMode helps identify potential problems in the application during development
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
} else {
  // Log error if root element is not found in the HTML
  console.error('Root element not found in the document')
}