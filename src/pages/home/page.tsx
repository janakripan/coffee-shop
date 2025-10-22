
import { motion } from 'framer-motion';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Products from '../../components/Products/Products';
import Testimonials from '../../components/Testimonials/Testimonials';
import Contact from '../../components/Contact/Contact';
import { pageTransition, sequentialContent, contentSection } from '../../animations/animations';

const HomePage = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-black"
    >
      <Hero />
      <motion.div
        variants={sequentialContent}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={contentSection}>
          <About />
        </motion.div>
        <motion.div variants={contentSection}>
          <Products />
        </motion.div>
        <motion.div variants={contentSection}>
          <Testimonials />
        </motion.div>
        <motion.div variants={contentSection}>
          <Contact />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;