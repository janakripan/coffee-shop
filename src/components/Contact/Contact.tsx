
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { contactInfo } from '../../constants/constants';
import { fadeIn, slideUp, staggerContainer, staggerItem } from '../../animations/animations';

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {contactInfo.title}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {contactInfo.description}
            </p>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6 mb-8"
            >
              <motion.div variants={staggerItem} className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                  <i className="ri-phone-line text-black text-xl"></i>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <p className="text-gray-400">{contactInfo.phone}</p>
                </div>
              </motion.div>

              <motion.div variants={staggerItem} className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                  <i className="ri-mail-line text-black text-xl"></i>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-400">{contactInfo.email}</p>
                </div>
              </motion.div>

              <motion.div variants={staggerItem} className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                  <i className="ri-map-pin-line text-black text-xl"></i>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Address</h3>
                  <p className="text-gray-400">{contactInfo.address}</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 text-center whitespace-nowrap"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/projects"
                className="inline-block bg-transparent border border-yellow-400 text-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 text-center whitespace-nowrap"
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://readdy.ai/api/search-image?query=modern%20office%20consultation%20meeting%2C%20professional%20business%20discussion%2C%20contemporary%20workspace%20design%2C%20dark%20theme%20with%20golden%20accents%2C%20client%20meeting%20room&width=600&height=400&seq=contact1&orientation=landscape"
              alt="Contact Us"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            
            {/* Floating Contact Info */}
            <motion.div
              variants={fadeIn}
              className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black p-6 rounded-xl shadow-lg"
            >
              <div className="text-lg font-bold">Free Consultation</div>
              <div className="text-sm">Available 24/7</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
