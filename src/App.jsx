import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./theme/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductsDirectory from "./pages/ProductsDirectory";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedBackground from "./components/AnimatedBackground";
import ThemeSwitcher from "./components/ThemeSwitcher";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<ProductsDirectory />} />
        <Route path="/solutions/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="relative bg-darkBg min-h-screen text-text overflow-hidden transition-colors duration-500">
          <AnimatedBackground />
          <div className="relative z-10">
            <Navbar />
            <AnimatedRoutes />
            <Footer />
            {/* <ThemeSwitcher /> */}
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;