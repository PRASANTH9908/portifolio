import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/footer';
import Maincard from './components/maincard';
import AboutMe from './components/About';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './components/Contact';
import ResumePage from './components/Resume';

function App() {
  return (
    <div className="App">
      {/* Wrap everything inside the Router */}
      <Router>
        {/* Navbar is rendered on all pages */}
        <Navbar />

        {/* Main Routes */}
        <Routes>
          {/* Route for the home page (default) */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Maincard />
              </>
            }
          />

          {/* Route for the About Me page */}
          <Route path="/about" element={<AboutMe />} />

          {/* Route for the Contact page */}
          <Route path="/contact" element={<ContactPage />} />

          {/* Route for the Resume page */}
          <Route path="/resume" element={<ResumePage />} />

          {/* 404 Route for unmatched paths */}
          <Route
            path="*"
            element={
              <div className="container mt-5">
                <h2>404 - Page Not Found</h2>
                <p>The page you are looking for does not exist.</p>
              </div>
            }
          />
        </Routes>

        {/* Footer is rendered on all pages */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
