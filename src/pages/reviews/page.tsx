
import { motion } from 'framer-motion';
import TestimonialCard from '../../components/Cards/TestimonialCard';
import { pageTransition, fadeIn, staggerContainer } from '../../animations/animations';
import { testimonials } from '../../constants/constants';

const ReviewsPage = () => {
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
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Clients Say</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what business leaders say about their workspace transformations and our service excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
          >
            <motion.div variants={fadeIn}>
              <div className="text-4xl font-bold text-yellow-400 mb-2">4.9/5</div>
              <div className="text-gray-400">Average Rating</div>
            </motion.div>
            <motion.div variants={fadeIn}>
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-gray-400">Happy Clients</div>
            </motion.div>
            <motion.div variants={fadeIn}>
              <div className="text-4xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-gray-400">Satisfaction Rate</div>
            </motion.div>
            <motion.div variants={fadeIn}>
              <div className="text-4xl font-bold text-yellow-400 mb-2">15+</div>
              <div className="text-gray-400">Years Experience</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                position={testimonial.position}
                company={testimonial.company}
                rating={testimonial.rating}
                comment={testimonial.comment}
                avatar={testimonial.avatar}
              />
            ))}
            
            {/* Additional testimonials for fuller page */}
            <TestimonialCard
              name="David Park"
              position="Founder"
              company="StartupHub"
              rating={5}
              comment="The team's attention to detail and innovative approach transformed our startup space into a professional environment that impresses investors and motivates our team daily."
              avatar="https://readdy.ai/api/search-image?query=professional%20startup%20founder%20man%20portrait%2C%20confident%20smile%2C%20casual%20business%20attire%2C%20modern%20headshot&width=80&height=80&seq=avatar4&orientation=squarish"
            />
            <TestimonialCard
              name="Lisa Thompson"
              position="HR Director"
              company="InnovateCorp"
              rating={5}
              comment="Our employee satisfaction scores increased dramatically after the office redesign. The new workspace promotes collaboration and has become a key factor in our recruitment success."
              avatar="https://readdy.ai/api/search-image?query=professional%20HR%20director%20woman%20portrait%2C%20friendly%20smile%2C%20business%20professional%20attire%2C%20corporate%20headshot&width=80&height=80&seq=avatar5&orientation=squarish"
            />
            <TestimonialCard
              name="James Wilson"
              position="Managing Partner"
              company="Law Associates"
              rating={5}
              comment="The sophisticated design perfectly reflects our firm's prestige while creating a comfortable environment for both our team and clients. Exceptional work from start to finish."
              avatar="https://readdy.ai/api/search-image?query=professional%20law%20firm%20partner%20man%20portrait%2C%20distinguished%20appearance%2C%20formal%20business%20suit%2C%20executive%20headshot&width=80&height=80&seq=avatar6&orientation=squarish"
            />
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
              Join Our Satisfied Clients
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Experience the difference a professionally designed workspace can make for your business and team productivity.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 whitespace-nowrap"
            >
              Get Your Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ReviewsPage;
