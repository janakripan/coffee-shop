
import { motion } from 'framer-motion';
import { pageTransition, fadeIn, slideUp, staggerContainer, staggerItem } from '../../animations/animations';
import { aboutContent } from '../../constants/constants';

const AboutPage = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-black"
    >
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Our Story</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transforming workspaces since 2008 with innovative design solutions that inspire excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={slideUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
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
                className="space-y-4"
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
            </motion.div>
            
            <motion.div
              variants={slideUp}
              className="relative"
            >
              <img
                src={aboutContent.image}
                alt="About Us"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={staggerItem} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-gray-400">Projects Completed</div>
            </motion.div>
            <motion.div variants={staggerItem} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </motion.div>
            <motion.div variants={staggerItem} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">15+</div>
              <div className="text-gray-400">Years Experience</div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;