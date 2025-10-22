
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { aboutContent } from '../../constants/constants';
import { fadeIn, slideInLeft, slideInRight, staggerContainer, staggerItem } from '../../animations/animations';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {aboutContent.title}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {aboutContent.description}
            </p>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 mb-8"
            >
              {aboutContent.features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/about"
                className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 text-center whitespace-nowrap"
              >
                Learn More
              </Link>
              <Link
                to="/services"
                className="inline-block bg-transparent border border-yellow-400 text-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 text-center whitespace-nowrap"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={aboutContent.image}
              alt="About Us"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            
            {/* Floating Stats */}
            <motion.div
              variants={fadeIn}
              className="absolute -bottom-6 -left-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black p-6 rounded-xl shadow-lg"
            >
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm">Client Satisfaction</div>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              className="absolute -top-6 -right-6 bg-black/80 backdrop-blur-sm text-white p-6 rounded-xl border border-gray-700"
            >
              <div className="text-2xl font-bold text-yellow-400">24/7</div>
              <div className="text-sm text-gray-300">Support Available</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
