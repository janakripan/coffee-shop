
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { companyInfo, navigationItems, contactInfo } from '../../constants/constants';
import { fadeIn, staggerContainer, staggerItem } from '../../animations/animations';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div variants={staggerItem} className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <i className="ri-building-line text-black text-lg"></i>
              </div>
              <span className="text-white font-bold text-xl">{companyInfo.name}</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              {companyInfo.description} We transform ordinary spaces into extraordinary environments that foster creativity and productivity.
            </p>
            <div className="flex space-x-4">
              {Object.entries(companyInfo.socialLinks).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-gray-700 transition-all duration-300"
                >
                  <i className={`ri-${platform}-line text-lg`}></i>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={staggerItem}>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={staggerItem}>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <i className="ri-phone-line text-yellow-400 mt-1"></i>
                <span className="text-gray-400">{contactInfo.phone}</span>
              </div>
              <div className="flex items-start space-x-3">
                <i className="ri-mail-line text-yellow-400 mt-1"></i>
                <span className="text-gray-400">{contactInfo.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-yellow-400 mt-1"></i>
                <span className="text-gray-400">{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeIn}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © 2024 {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a 
              href="https://readdy.ai/?origin=logo" 
              className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300"
            >
              Powered by Readdy
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
