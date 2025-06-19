import React from 'react';
import { CheckIcon, Calculator, FileText, Users, CreditCard, TrendingUp, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const PayrollSystemPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.8, 0.5, 1] 
      } 
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.5, 
        ease: [0.25, 0.8, 0.5, 1] 
      } 
    },
  };

  return (
    <div className="min-h-screen bg-secondary-bg">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-navy via-navy to-purple/90">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Payroll System <span className="text-green">Solutions</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-text-gray max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Streamline your payroll operations with comprehensive NetSuite payroll solutions that ensure accuracy and compliance
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <motion.section 
        className="py-16 bg-light-gray"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center text-text-dark"
            variants={sectionVariants}
          >
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="p-6 rounded-lg bg-white shadow-lg border border-text-gray/10 hover:shadow-xl transition-all duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 mb-4 rounded-lg flex items-center justify-center bg-blue/10 border border-blue/20">
                <Calculator className="w-6 h-6 text-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-text-dark">
                Payroll Processing
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-blue" />
                  <span className="text-text-medium">Automated tax calculations</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-blue" />
                  <span className="text-text-medium">Deductions management</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-blue" />
                  <span className="text-text-medium">Benefits administration</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="p-6 rounded-lg bg-white shadow-lg border border-text-gray/10 hover:shadow-xl transition-all duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 mb-4 rounded-lg flex items-center justify-center bg-green/10 border border-green/20">
                <FileText className="w-6 h-6 text-green" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-text-dark">
                Compliance & Reporting
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-green" />
                  <span className="text-text-medium">Automated tax filing</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-green" />
                  <span className="text-text-medium">Regulatory compliance</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-green" />
                  <span className="text-text-medium">Custom reports</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="p-6 rounded-lg bg-white shadow-lg border border-text-gray/10 hover:shadow-xl transition-all duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 mb-4 rounded-lg flex items-center justify-center bg-purple/10 border border-purple/20">
                <Users className="w-6 h-6 text-purple" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-text-dark">
                Employee Self-Service
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-purple" />
                  <span className="text-text-medium">Pay stub access</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-purple" />
                  <span className="text-text-medium">Time-off requests</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-purple" />
                  <span className="text-text-medium">Benefits enrollment</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Integration Section */}
      <motion.section 
        className="py-16 bg-navy"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center text-text-white"
            variants={sectionVariants}
          >
            Integration Benefits
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={cardVariants}>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Payroll Integration"
                className="rounded-lg w-full h-auto shadow-lg border border-text-gray/10"
              />
            </motion.div>
            <motion.div variants={cardVariants}>
              <h3 className="text-2xl font-bold mb-6 text-text-white">
                Seamless Integration
              </h3>
              <p className="mb-6 text-text-gray">
                Our payroll system integrates seamlessly with your existing NetSuite environment, providing a unified solution for all your business needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-blue mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-text-white">Real-time Data Sync</h4>
                    <p className="text-text-gray">Automatic synchronization of time and attendance data</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-green mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-text-white">Automated Processing</h4>
                    <p className="text-text-gray">Streamlined payroll processing based on accurate time data</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-purple mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-text-white">Compliance Management</h4>
                    <p className="text-text-gray">Ensures compliance with labor laws and regulations</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Overview */}
      <motion.section 
        className="py-16 bg-light-gray"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center text-text-dark"
            variants={sectionVariants}
          >
            Why Choose Our Payroll System?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-lg border border-text-gray/10"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue/10 border border-blue/20 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-text-dark">99.9% Accuracy</h3>
              <p className="text-text-medium text-sm">Precision in every calculation and payment</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-lg border border-text-gray/10"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green/10 border border-green/20 flex items-center justify-center">
                <Shield className="w-8 h-8 text-green" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-text-dark">100% Compliance</h3>
              <p className="text-text-medium text-sm">Stay up-to-date with all regulations</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-lg border border-text-gray/10"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple/10 border border-purple/20 flex items-center justify-center">
                <CreditCard className="w-8 h-8 text-purple" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-text-dark">Multiple Payment Methods</h3>
              <p className="text-text-medium text-sm">Direct deposit, checks, and more</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-lg border border-text-gray/10"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange/10 border border-orange/20 flex items-center justify-center">
                <Users className="w-8 h-8 text-orange" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-text-dark">24/7 Support</h3>
              <p className="text-text-medium text-sm">Expert help when you need it</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 bg-gradient-to-br from-navy via-navy to-green/90"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6 text-text-white"
            variants={sectionVariants}
          >
            Ready to Streamline Your Payroll?
          </motion.h2>
          <motion.p 
            className="text-xl max-w-2xl mx-auto mb-8 text-text-gray"
            variants={sectionVariants}
          >
            Contact us today to learn more about our payroll system solutions and how they can benefit your organization
          </motion.p>
          <motion.button 
            className="bg-green hover:bg-green/90 text-text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            variants={sectionVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default PayrollSystemPage;
