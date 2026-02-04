import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Products from './pages/Products';
import AIChat from './components/AIChat';
import './App.css';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-pynatic-bg text-pynatic-text relative">
        {/* Grain overlay */}
        <div className="grain-overlay" />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main content */}
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </AnimatePresence>
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* AI Chat Widget */}
        <AIChat />
      </div>
    </Router>
  );
}

export default App;