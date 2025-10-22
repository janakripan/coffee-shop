
import { motion } from 'framer-motion';
import ServiceCard from '../../components/Cards/ServiceCard';
import { pageTransition, fadeIn, staggerContainer } from '../../animations/animations';
import { services } from '../../constants/constants';

const ServicesPage = () => {
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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Services</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive workspace design solutions from concept to completion, tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Design Process
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A streamlined approach that ensures your vision becomes reality
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs and vision" },
              { step: "02", title: "Design", description: "Creating detailed plans and 3D visualizations" },
              { step: "03", title: "Development", description: "Bringing designs to life with precision" },
              { step: "04", title: "Delivery", description: "Installation and final walkthrough" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ServicesPage;
