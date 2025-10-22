
import { motion } from 'framer-motion';
import ProductCard from '../../components/Cards/ProductCard';
import { products } from '../../constants/constants';
import { fadeIn, staggerContainer, pageTransition } from '../../animations/animations';

const ProductsPage = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-black pt-20"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Menu</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              From signature blends to artisanal pastries, every item is crafted with passion and served with love
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                features={product.features}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to <span className="text-yellow-400">Order?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Visit us in-store or call ahead for pickup. Fresh coffee and pastries await!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-all duration-300 whitespace-nowrap cursor-pointer">
                Order for Pickup
              </button>
              <button className="bg-transparent border border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 whitespace-nowrap cursor-pointer">
                Visit Our Store
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProductsPage;
