import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductSection from "./components/ProductSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import TrackPageViews from "./pages/TrackPageViews";
import ReactGA from "react-ga4";

// ✅ Initialize Google Analytics with your Measurement ID
ReactGA.initialize("G-038GV4L9GW"); // Replace with your actual GA4 Measurement ID

const App = () => {
  return (
    <Router>
      <Navbar />
      <TrackPageViews />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
