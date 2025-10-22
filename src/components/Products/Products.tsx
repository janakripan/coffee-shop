
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductCard from '../Cards/ProductCard';
import { products } from '../../constants/constants';
import { fadeIn, staggerContainer } from '../../animations/animations';

const Products = () => {
  // Show first 8 products on home page
  const featuredProducts = products.slice(0, 8);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Menu</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Discover our carefully crafted selection of premium coffees, artisanal beverages, and fresh pastries made with love
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              features={product.features}
            />
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/products"
            className="inline-block bg-transparent border border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            View Full Menu
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
