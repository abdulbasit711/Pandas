import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProductSection from "../components/ProductSection";
import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-lightBg dark:bg-gray-900 text-lightText dark:text-darkText mt-10"
    >
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <ContactSection />
    </motion.div>
  );
};

export default Home;