import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, MenuIcon, XIcon, HomeIcon, BriefcaseIcon, MessageSquareIcon, BuildingIcon, PuzzleIcon, InfoIcon, ArrowRightIcon, LifeBuoyIcon } from 'lucide-react';
import ContactFormModal from '../common/ContactFormModal';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isSupportHovered, setIsSupportHovered] = useState(false);
  const [isConsultationHovered, setIsConsultationHovered] = useState(false);
  const [isOracleNetSuiteHovered, setIsOracleNetSuiteHovered] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setMobileActiveMenu(null);
  };

  const handleMenuEnter = (menu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const toggleMobileSubmenu = (menu: string) => {
    setMobileActiveMenu(mobileActiveMenu === menu ? null : menu);
  };

  const handleNavLinkClick = () => {
    setActiveMenu(null);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-navy border-b border-text-gray/20 shadow-lg">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center" onClick={handleNavLinkClick}>
              <img
                src="/images/logo.png"
                alt="Bellatrix Logo"
                className="h-24 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4">
              <Link 
                to="/"
                className="font-medium text-text-white hover:text-blue transition-colors duration-300"
                onClick={handleNavLinkClick}
              >
                Home
              </Link>

              {/* Services with Mega Menu */}
              <div className="relative" onMouseEnter={() => handleMenuEnter('services')} onMouseLeave={handleMenuLeave}>
                <button className="flex items-center font-medium text-text-white hover:text-blue transition-colors duration-300">
                  Services
                  <ChevronDownIcon className="w-4 h-4 ml-1" />
                </button>

                <AnimatePresence>
                  {activeMenu === 'services' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="fixed left-0 right-0 w-full bg-white py-8 px-8 mt-6 z-50 flex justify-center border-t border-text-gray/20 shadow-xl"
                      onMouseEnter={() => handleMenuEnter('services')}
                      onMouseLeave={handleMenuLeave}
                      style={{ minHeight: '300px' }}
                    >
                      <div className="container mx-auto max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          {/* Consultation Section */}
                          <div>
                            <div className="flex items-center mb-4">
                              <div className="p-2 rounded-lg bg-blue/10 border border-blue/20 mr-3">
                                <MessageSquareIcon className="w-5 h-5 text-blue" />
                              </div>
                              <h3 className="text-lg font-bold text-text-dark">Consultation</h3>
                            </div>
                            <div className="space-y-3">
                              <Link 
                                to="/implementation" 
                                className="block p-3 rounded-lg hover:bg-light-gray transition-colors duration-300 group"
                                onClick={handleNavLinkClick}
                              >
                                <div className="font-medium text-text-dark group-hover:text-blue">Implementation</div>
                                <div className="text-sm text-text-medium">Complete NetSuite setup</div>
                              </Link>
                              <Link 
                                to="/training" 
                                className="block p-3 rounded-lg hover:bg-light-gray transition-colors duration-300 group"
                                onClick={handleNavLinkClick}
                              >
                                <div className="font-medium text-text-dark group-hover:text-blue">Training</div>
                                <div className="text-sm text-text-medium">User training programs</div>
                              </Link>
                              <Link 
                                to="/" 
                                className="block p-3 rounded-lg hover:bg-light-gray transition-colors duration-300 group"
                                onClick={handleNavLinkClick}
                              >
                                <div className="font-medium text-text-dark group-hover:text-blue">Customization</div>
                                <div className="text-sm text-text-medium">Tailored solutions</div>
                              </Link>
                            </div>
                          </div>

                          {/* Support Section */}
                          <div>
                            <div className="flex items-center mb-4">
                              <div className="p-2 rounded-lg bg-green/10 border border-green/20 mr-3">
                                <LifeBuoyIcon className="w-5 h-5 text-green" />
                              </div>
                              <h3 className="text-lg font-bold text-text-dark">Support</h3>
                            </div>
                            <div className="space-y-3">
                              <Link 
                                to="/support" 
                                className="block p-3 rounded-lg hover:bg-light-gray transition-colors duration-300 group"
                                onClick={handleNavLinkClick}
                              >
                                <div className="font-medium text-text-dark group-hover:text-green">NetSuite Support</div>
                                <div className="text-sm text-text-medium">24/7 technical assistance</div>
                              </Link>
                              <Link 
                                to="/hr-system" 
                                className="block p-3 rounded-lg hover:bg-light-gray transition-colors duration-300 group"
                                onClick={handleNavLinkClick}
                              >
                                <div className="font-medium text-text-dark group-hover:text-green">HR System</div>
                                <div className="text-sm text-text-medium">HR management solutions</div>
                              </Link>
                              <Link 
                                to="/payroll-system" 
                                className="block p-3 rounded-lg hover:bg-light-gray transition-colors duration-300 group"
                                onClick={handleNavLinkClick}
                              >
                                <div className="font-medium text-text-dark group-hover:text-green">Payroll System</div>
                                <div className="text-sm text-text-medium">Automated payroll processing</div>
                              </Link>
                            </div>
                          </div>

                          {/* Integration Section */}
                          <div>
                            <div className="flex items-center mb-4">
                              <div className="p-2 rounded-lg bg-purple/10 border border-purple/20 mr-3">
                                <PuzzleIcon className="w-5 h-5 text-purple" />
                              </div>
                              <h3 className="text-lg font-bold text-text-dark">Integration</h3>
                            </div>
                            <div className="space-y-3">
                              <Link 
                                to="/" 
                                className="block p-3 rounded-lg hover:bg-light-gray transition-colors duration-300 group"
                                onClick={handleNavLinkClick}
                              >
                                <div className="font-medium text-text-dark group-hover:text-purple">API Integration</div>
                                <div className="text-sm text-text-medium">Connect external systems</div>
                              </Link>
                              <Link 
                                to="/" 
                                className="block p-3 rounded-lg hover:bg-light-gray transition-colors duration-300 group"
                                onClick={handleNavLinkClick}
                              >
                                <div className="font-medium text-text-dark group-hover:text-purple">Data Migration</div>
                                <div className="text-sm text-text-medium">Secure data transfer</div>
                              </Link>
                              <Link 
                                to="/" 
                                className="block p-3 rounded-lg hover:bg-light-gray transition-colors duration-300 group"
                                onClick={handleNavLinkClick}
                              >
                                <div className="font-medium text-text-dark group-hover:text-purple">Third-party Connectors</div>
                                <div className="text-sm text-text-medium">Seamless integrations</div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries with Dropdown */}
              <div className="relative" onMouseEnter={() => handleMenuEnter('industries')} onMouseLeave={handleMenuLeave}>
                <button className="flex items-center font-medium text-text-white hover:text-blue transition-colors duration-300">
                  Industries
                  <ChevronDownIcon className="w-4 h-4 ml-1" />
                </button>

                <AnimatePresence>
                  {activeMenu === 'industries' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="fixed left-0 right-0 w-full bg-white py-6 px-6 mt-6 z-50 border-t border-text-gray/20 shadow-xl"
                      onMouseEnter={() => handleMenuEnter('industries')}
                      onMouseLeave={handleMenuLeave}
                    >
                      <div className="container mx-auto flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                          <Link 
                            to="/professional-services" 
                            className="flex items-start group p-4 rounded-lg hover:bg-light-gray transition-colors duration-300"
                            onClick={handleNavLinkClick}
                          >
                            <div className="mr-4 p-3 rounded-lg bg-blue/10 border border-blue/20 group-hover:bg-blue/20 transition-colors duration-300">
                              <BriefcaseIcon className="w-6 h-6 text-blue" />
                            </div>
                            <div>
                              <span className="block font-semibold text-text-dark group-hover:text-blue transition-colors duration-300">
                                Professional Services
                              </span>
                              <span className="text-sm text-text-medium mt-1 block">
                                Optimize your service delivery and project management
                              </span>
                            </div>
                          </Link>
                          <Link 
                            to="/project-management" 
                            className="flex items-start group p-4 rounded-lg hover:bg-light-gray transition-colors duration-300"
                            onClick={handleNavLinkClick}
                          >
                            <div className="mr-4 p-3 rounded-lg bg-green/10 border border-green/20 group-hover:bg-green/20 transition-colors duration-300">
                              <PuzzleIcon className="w-6 h-6 text-green" />
                            </div>
                            <div>
                              <span className="block font-semibold text-text-dark group-hover:text-green transition-colors duration-300">
                                Project Management
                              </span>
                              <span className="text-sm text-text-medium mt-1 block">
                                Efficient project execution and resource management
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                to="/about" 
                className="font-medium text-text-white hover:text-blue transition-colors duration-300" 
                onClick={handleNavLinkClick}
              >
                About
              </Link>

              <button
                onClick={() => {
                  setShowContactModal(true);
                  setIsMenuOpen(false);
                }}
                className="bg-blue hover:bg-blue/90 text-text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Us
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-text-white hover:text-blue transition-colors duration-300">
                <MenuIcon className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-white border-l border-text-gray/20 z-50 p-6 overflow-y-auto transform shadow-xl"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-text-dark">Menu</h2>
              <button onClick={toggleMenu} className="text-text-medium hover:text-text-dark transition-colors duration-300">
                <XIcon className="w-7 h-7" />
              </button>
            </div>
            <nav className="space-y-6">
              <Link 
                to="/"
                className="flex items-center text-lg font-medium text-text-dark hover:text-blue transition-colors duration-300"
                onClick={handleNavLinkClick}
              >
                <HomeIcon className="w-6 h-6 mr-3 text-blue" />
                Home
              </Link>

              {/* Mobile Services Dropdown */}
              <div>
                <button 
                  className="flex items-center justify-between w-full text-lg font-medium text-text-dark hover:text-blue transition-colors duration-300"
                  onClick={() => toggleMobileSubmenu('services')}
                >
                  <span className="flex items-center">
                    <BuildingIcon className="w-6 h-6 mr-3 text-blue" />
                    Services
                  </span>
                  <ChevronDownIcon className={`w-5 h-5 text-text-medium transition-transform ${mobileActiveMenu === 'services' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileActiveMenu === 'services' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="ml-8 mt-4 space-y-4 overflow-hidden"
                    >
                      <div>
                        <h4 className="text-md font-semibold mb-2 text-text-dark">Implementation</h4>
                        <ul className="space-y-2">
                          <li>
                            <Link to="/implementation" className="text-text-medium hover:text-blue transition-colors duration-300 block" onClick={handleNavLinkClick}>NetSuite Implementation</Link>
                          </li>
                          <li>
                            <Link to="/implementation" className="text-text-medium hover:text-blue transition-colors duration-300 block" onClick={handleNavLinkClick}>ERP Implementation</Link>
                          </li>
                          <li>
                            <Link to="/implementation" className="text-text-medium hover:text-blue transition-colors duration-300 block" onClick={handleNavLinkClick}>System Migration</Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-md font-semibold mb-2 text-text-dark">Support</h4>
                        <ul className="space-y-2">
                          <li>
                            <Link to="/support" className="text-text-medium hover:text-green transition-colors duration-300 block" onClick={handleNavLinkClick}>NetSuite Support</Link>
                          </li>
                          <li>
                            <Link to="/hr-system" className="text-text-medium hover:text-green transition-colors duration-300 block" onClick={handleNavLinkClick}>HR System</Link>
                          </li>
                          <li>
                            <Link to="/payroll-system" className="text-text-medium hover:text-green transition-colors duration-300 block" onClick={handleNavLinkClick}>Payroll System</Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-md font-semibold mb-2 text-text-dark">Integration</h4>
                        <ul className="space-y-2">
                          <li>
                            <Link to="/" className="text-text-medium hover:text-purple transition-colors duration-300 block" onClick={handleNavLinkClick}>API Integration</Link>
                          </li>
                          <li>
                            <Link to="/" className="text-text-medium hover:text-purple transition-colors duration-300 block" onClick={handleNavLinkClick}>Third-party Connectors</Link>
                          </li>
                          <li>
                            <Link to="/" className="text-text-medium hover:text-purple transition-colors duration-300 block" onClick={handleNavLinkClick}>Data Migration</Link>
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Industries Dropdown */}
              <div>
                <button 
                  className="flex items-center justify-between w-full text-lg font-medium text-text-dark hover:text-blue transition-colors duration-300"
                  onClick={() => toggleMobileSubmenu('industries')}
                >
                  <span className="flex items-center">
                    <BriefcaseIcon className="w-6 h-6 mr-3 text-blue" />
                    Industries
                  </span>
                  <ChevronDownIcon className={`w-5 h-5 text-text-medium transition-transform ${mobileActiveMenu === 'industries' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileActiveMenu === 'industries' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="ml-8 mt-4 space-y-4 overflow-hidden"
                    >
                      <ul>
                        <li>
                          <Link 
                            to="/professional-services" 
                            className="text-text-medium hover:text-blue transition-colors duration-300 block py-1"
                            onClick={handleNavLinkClick}
                          >
                            Professional Services
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/project-management" 
                            className="text-text-medium hover:text-blue transition-colors duration-300 block py-1"
                            onClick={handleNavLinkClick}
                          >
                            Project Management
                          </Link>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                to="/about"
                className="flex items-center text-lg font-medium text-text-dark hover:text-blue transition-colors duration-300"
                onClick={handleNavLinkClick}
              >
                <InfoIcon className="w-6 h-6 mr-3 text-blue" />
                About
              </Link>

              <button
                onClick={() => {
                  setShowContactModal(true);
                  setIsMenuOpen(false);
                }}
                className="w-full bg-blue hover:bg-blue/90 text-text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <MessageSquareIcon className="w-6 h-6 mr-3" />
                Contact Us
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactFormModal 
        isOpen={showContactModal} 
        onClose={() => setShowContactModal(false)}
      />
    </>
  );
};

export default Navbar;
