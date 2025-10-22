
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TestimonialCard from '../Cards/TestimonialCard';
import { testimonials } from '../../constants/constants';
import { fadeIn, staggerContainer } from '../../animations/animations';

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business leaders say about their workspace transformations and our service excellence.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
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
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/reviews"
            className="inline-block bg-transparent border border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 whitespace-nowrap"
          >
            Read All Reviews
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
