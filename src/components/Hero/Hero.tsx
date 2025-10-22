
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { heroContent } from '../../constants/constants';
import { 
  staggerContainer, 
  heroBackgroundZoom,
  heroTextSequential,
  heroTextLine,
  heroLetterAnimation,
  heroLetter,
  heroContentSequential,
  heroContentItem
} from '../../animations/animations';

const Hero = () => {
  // Split text into individual characters for animation with golden glow
  const animateText = (text: string, isHighlight = false) => {
    return text.split('').map((char, index) => (
      <motion.span
        key={index}
        variants={heroLetter}
        className={`inline-block ${
          isHighlight 
            ? 'bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent' 
            : 'text-white'
        }`}
        style={{
          textShadow: isHighlight 
            ? '0 0 20px rgba(255, 215, 0, 0.6), 0 0 40px rgba(255, 215, 0, 0.3), 0 0 60px rgba(255, 215, 0, 0.1)' 
            : '0 0 15px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.1)'
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ));
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with Zoom Animation */}
      <motion.div
        variants={heroBackgroundZoom}
        initial="initial"
        animate="animate"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=cozy%20coffee%20shop%20interior%20with%20warm%20golden%20lighting%2C%20wooden%20furniture%2C%20coffee%20bar%20with%20espresso%20machine%2C%20rustic%20modern%20design%2C%20inviting%20atmosphere%20with%20steam%20from%20coffee%20cups&width=1920&height=1080&seq=hero1&orientation=landscape')`
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            {/* Banner Text - Letter by Letter Animation with Golden Glow */}
            <div className="mb-6 perspective-1000">
              <motion.h1
                variants={heroTextSequential}
                initial="hidden"
                animate="visible"
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                style={{ 
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontWeight: 'bold'
                }}
              >
                <motion.div variants={heroTextLine} className="mb-4">
                  <motion.span variants={heroLetterAnimation} initial="hidden" animate="visible">
                    {animateText("Brewed with Passion,")}
                  </motion.span>
                </motion.div>
                <motion.div variants={heroTextLine} className="mb-4">
                  <motion.span variants={heroLetterAnimation} initial="hidden" animate="visible">
                    {animateText("Served with Love", true)}
                  </motion.span>
                </motion.div>
              </motion.h1>
            </div>
            
            {/* Hero Content - Animated after banner text */}
            <motion.div
              variants={heroContentSequential}
              initial="hidden"
              animate="visible"
            >
              {/* Description */}
              <motion.p
                variants={heroContentItem}
                className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl"
              >
                {heroContent.description}
              </motion.p>
              
              {/* Buttons */}
              <motion.div
                variants={heroContentItem}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Link
                  to="/products"
                  className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 transition-all duration-300 text-center whitespace-nowrap cursor-pointer"
                >
                  View Menu
                </Link>
                <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 whitespace-nowrap cursor-pointer">
                  Order for Pickup
                </button>
              </motion.div>
              
              {/* Stats */}
              <motion.div
                variants={heroContentItem}
                className="grid grid-cols-3 gap-8"
              >
                {heroContent.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center lg:text-left"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm md:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right side - Image space is handled by background */}
          <div className="hidden lg:block" />
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-yellow-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
