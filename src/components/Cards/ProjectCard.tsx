
import { motion } from 'framer-motion';
import { hoverScale, staggerItem } from '../../animations/animations';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  stats: {
    area: string;
    timeline: string;
    team: string;
  };
}

const ProjectCard = ({ title, category, description, image, stats }: ProjectCardProps) => {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={hoverScale}
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 group"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-semibold">
            {category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="text-yellow-400 font-bold text-sm">{stats.area}</div>
            <div className="text-gray-500 text-xs">Area</div>
          </div>
          <div className="text-center">
            <div className="text-yellow-400 font-bold text-sm">{stats.timeline}</div>
            <div className="text-gray-500 text-xs">Timeline</div>
          </div>
          <div className="text-center">
            <div className="text-yellow-400 font-bold text-sm">{stats.team}</div>
            <div className="text-gray-500 text-xs">Team Size</div>
          </div>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-transparent border border-yellow-400 text-yellow-400 py-2 px-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 whitespace-nowrap"
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
