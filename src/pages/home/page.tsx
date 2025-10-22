
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
      variants={pageTransition as any}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen w-full bg-black overflow-x-hidden"
    >
      <Hero />
      <motion.div
        variants={sequentialContent}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={contentSection as any}>
          <About />
        </motion.div>
        <motion.div variants={contentSection as any}>
          <Products />
        </motion.div>
        <motion.div variants={contentSection as any}>
          <Testimonials />
        </motion.div>
        <motion.div variants={contentSection as any}>
          <Contact />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;