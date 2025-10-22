
import { useState } from 'react';
import { motion } from 'framer-motion';
import { pageTransition, fadeIn, slideUp, staggerContainer, staggerItem } from '../../animations/animations';
import { contactInfo } from '../../constants/constants';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              {contactInfo.title}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {contactInfo.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <motion.div variants={slideUp}>
              <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
              
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <motion.div variants={staggerItem} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                    <i className="ri-phone-line text-black text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <p className="text-gray-400">{contactInfo.phone}</p>
                  </div>
                </motion.div>

                <motion.div variants={staggerItem} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                    <i className="ri-mail-line text-black text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-gray-400">{contactInfo.email}</p>
                  </div>
                </motion.div>

                <motion.div variants={staggerItem} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                    <i className="ri-map-pin-line text-black text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Address</h3>
                    <p className="text-gray-400">{contactInfo.address}</p>
                  </div>
                </motion.div>

                <motion.div variants={staggerItem} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                    <i className="ri-time-line text-black text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-400">{contactInfo.hours}</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={slideUp}>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-300 text-sm"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-300 text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-300 text-sm"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-300 text-sm"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors duration-300 text-sm pr-8"
                    >
                      <option value="">Select a service</option>
                      <option value="space-planning">Space Planning</option>
                      <option value="interior-design">Interior Design</option>
                      <option value="technology-integration">Technology Integration</option>
                      <option value="project-management">Project Management</option>
                      <option value="consultation">Free Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      maxLength={500}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-300 text-sm resize-none"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                    <p className="text-gray-500 text-xs mt-1">{formData.message.length}/500 characters</p>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 whitespace-nowrap"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;
