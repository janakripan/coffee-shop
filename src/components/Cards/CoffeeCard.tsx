
import { motion } from 'framer-motion';
import { scaleOnHover } from '../../animations/animations';

interface CoffeeCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

const CoffeeCard = ({ name, description, price, image }: CoffeeCardProps) => {
  return (
    <motion.div
      variants={scaleOnHover}
      whileHover="hover"
      className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <img 
          src={image}
          alt={name}
          className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {price}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {name}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
        >
          Add to Order
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CoffeeCard;
