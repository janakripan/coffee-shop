
import { motion } from 'framer-motion';
import { hoverScale, staggerItem } from '../../animations/animations';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const ServiceCard = ({ title, description, icon, features }: ServiceCardProps) => {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={hoverScale}
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 group"
    >
      <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-yellow-400/25 transition-all duration-300">
        <i className={`${icon} text-black text-xl`}></i>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-400 mb-4 text-sm leading-relaxed">
        {description}
      </p>
      
      <div className="space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
            <span className="text-gray-300 text-sm">{feature}</span>
          </div>
        ))}
      </div>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full mt-6 bg-transparent border border-yellow-400 text-yellow-400 py-2 px-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 whitespace-nowrap"
      >
        Get Quote
      </motion.button>
    </motion.div>
  );
};

export default ServiceCard;
