
import { motion } from 'framer-motion';
import { staggerItem } from '../../animations/animations';

interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  rating: number;
  comment: string;
  avatar: string;
}

const TestimonialCard = ({ name, position, company, rating, comment, avatar }: TestimonialCardProps) => {
  return (
    <motion.div
      variants={staggerItem}
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <i key={i} className="ri-star-fill text-yellow-400 text-sm"></i>
        ))}
      </div>
      
      <p className="text-gray-300 mb-6 leading-relaxed italic">
        "{comment}"
      </p>
      
      <div className="flex items-center space-x-3">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400/20"
        />
        <div>
          <h4 className="text-white font-semibold">{name}</h4>
          <p className="text-gray-400 text-sm">{position}</p>
          <p className="text-yellow-400 text-xs">{company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
