// React Router imports for client-side routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Component imports for layout and pages
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Global styles import
import './styles/global.css';

/**
 * Main App component that sets up the routing structure for the Exclusive Cleaning website
 * Uses React Router to handle client-side navigation between different pages
 * 
 * @returns {JSX.Element} The main application component with routing configuration
 */
function App() {
  return (
    // BrowserRouter enables client-side routing for the entire application
    <BrowserRouter>
      <div className="app">
        {/* Header component appears on all pages */}
        <Header />
        
        {/* Main content area where page components are rendered based on current route */}
        <main>
          <Routes>
            {/* Route definitions for each page of the website */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Footer component appears on all pages */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;