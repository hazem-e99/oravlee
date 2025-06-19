import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, MailIcon, MapPinIcon, FacebookIcon, TwitterIcon, LinkedinIcon, YoutubeIcon, ArrowRightIcon } from 'lucide-react';
import ContactFormModal from '../common/ContactFormModal';
import { motion } from 'framer-motion';

const Footer = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <>
      <footer className="w-full bg-navy py-8 relative overflow-hidden border-t border-text-gray/20">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-text-white">Bellatrix</h3>
              <p className="mb-4 text-text-gray">
                Enterprise software consultancy specializing in NetSuite and
                cloud solutions with over 20 years of experience.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-text-gray hover:text-blue transition-colors duration-300">
                  <FacebookIcon className="w-6 h-6" />
                </a>
                <a href="#" className="text-text-gray hover:text-blue transition-colors duration-300">
                  <TwitterIcon className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/company/bellatrixinc" className="text-text-gray hover:text-blue transition-colors duration-300">
                  <LinkedinIcon className="w-6 h-6" />
                </a>
                <a href="#" className="text-text-gray hover:text-blue transition-colors duration-300">
                  <YoutubeIcon className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-text-white">Quick Links</h4>
              <ul className="space-y-1">
                <li>
                  <Link to="/" className="text-text-gray hover:text-blue transition-colors duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-text-gray hover:text-blue transition-colors duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/implementation" className="text-text-gray hover:text-blue transition-colors duration-300">
                    NetSuite Implementation
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="text-text-gray hover:text-blue transition-colors duration-300">
                    NetSuite Support
                  </Link>
                </li>
                <li>
                  <Link to="/training" className="text-text-gray hover:text-blue transition-colors duration-300">
                    NetSuite Training
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-text-white">Our Services</h4>
              <ul className="space-y-1">
                <li>
                  <Link to="/implementation" className="text-text-gray hover:text-blue transition-colors duration-300">
                    NetSuite Implementation
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-text-gray hover:text-blue transition-colors duration-300">
                    NetSuite Customization
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="text-text-gray hover:text-blue transition-colors duration-300">
                    NetSuite Support
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-text-gray hover:text-blue transition-colors duration-300">
                    NetSuite Integration
                  </Link>
                </li>
                <li>
                  <Link to="/training" className="text-text-gray hover:text-blue transition-colors duration-300">
                    NetSuite Training
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-text-white">Contact Us</h4>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <MapPinIcon className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-blue" />
                  <span className="text-text-gray">
                    123 Business Avenue, Suite 500
                    <br />
                    San Francisco, CA 94107
                  </span>
                </li>
                <li className="flex items-center">
                  <PhoneIcon className="w-6 h-6 mr-3 flex-shrink-0 text-blue" />
                  <span className="text-text-gray">(555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <MailIcon className="w-6 h-6 mr-3 flex-shrink-0 text-blue" />
                  <span className="text-text-gray">info@bellatrix.com</span>
                </li>
                <li>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowContactModal(true)} 
                    className="inline-flex items-center font-medium text-blue hover:text-purple transition-all duration-300 mt-4 group"
                  >
                    Send us a message
                    <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </li>
              </ul>
            </div>
          </div>

          <div 
            className="mt-10 pt-6 flex flex-col md:flex-row justify-between items-center border-t border-text-gray/20"
          >
            <p className="text-sm mb-4 md:mb-0 text-text-gray">
              &copy; {new Date().getFullYear()} Bellatrix. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/" className="text-sm text-text-gray hover:text-blue transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/" className="text-sm text-text-gray hover:text-blue transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/" className="text-sm text-text-gray hover:text-blue transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <ContactFormModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </>
  );
};

export default Footer;
