
import { motion } from 'framer-motion';
import { fadeIn } from '../../animations/animations';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
}

const ProductCard = ({ title, description, image, features }: ProductCardProps) => {
  return (
    <motion.div
      variants={fadeIn}
      className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 group border border-gray-700 hover:border-yellow-400/50"
      data-product-shop
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-center text-sm ${
                index === 0 
                  ? 'text-yellow-400 font-bold text-lg' 
                  : 'text-gray-300'
              }`}
            >
              <div className={`w-2 h-2 rounded-full mr-3 ${
                index === 0 
                  ? 'bg-yellow-400' 
                  : 'bg-gray-500'
              }`} />
              {feature}
            </div>
          ))}
        </div>
        
        <button className="w-full mt-6 bg-transparent border border-yellow-400 text-yellow-400 py-2 px-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 whitespace-nowrap cursor-pointer">
          Add to Order
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
