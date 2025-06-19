import React from 'react';
import { CheckIcon, ArrowRightIcon, Users, Briefcase, Award, BarChart2, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const HRSystemPage = () => {
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
            HR System <span className="text-blue">Solutions</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-text-gray max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive human resources management with NetSuite HR solutions that streamline operations and empower your workforce
          </motion.p>
        </div>
      </section>

      {/* Key Benefits Section */}
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
            Why Choose NetSuite HR?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="p-8 rounded-lg text-center bg-white shadow-lg border border-text-gray/10 hover:shadow-xl transition-all duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-blue/10 border border-blue/20">
                <Users className="w-8 h-8 text-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-text-dark">
                Employee Experience
              </h3>
              <p className="text-text-medium">
                Empower your workforce with self-service tools and seamless access to HR information
              </p>
            </motion.div>
            <motion.div 
              className="p-8 rounded-lg text-center bg-white shadow-lg border border-text-gray/10 hover:shadow-xl transition-all duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-green/10 border border-green/20">
                <Shield className="w-8 h-8 text-green" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-text-dark">
                Compliance & Security
              </h3>
              <p className="text-text-medium">
                Stay compliant with labor laws and protect sensitive employee data
              </p>
            </motion.div>
            <motion.div 
              className="p-8 rounded-lg text-center bg-white shadow-lg border border-text-gray/10 hover:shadow-xl transition-all duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-purple/10 border border-purple/20">
                <BarChart2 className="w-8 h-8 text-purple" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-text-dark">
                Analytics & Insights
              </h3>
              <p className="text-text-medium">
                Make data-driven decisions with comprehensive HR analytics and reporting
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Core Features Section */}
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
            Core HR Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="p-6 rounded-lg bg-white shadow-lg border border-text-gray/10"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-4 text-text-dark">
                Employee Management
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-blue" />
                  <span className="text-text-medium">Employee records</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-blue" />
                  <span className="text-text-medium">Organizational charts</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-blue" />
                  <span className="text-text-medium">Performance tracking</span>
                </li>
              </ul>
            </motion.div>
            <motion.div 
              className="p-6 rounded-lg bg-white shadow-lg border border-text-gray/10"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-4 text-text-dark">
                Recruitment & Onboarding
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-green" />
                  <span className="text-text-medium">Job posting management</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-green" />
                  <span className="text-text-medium">Applicant tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-green" />
                  <span className="text-text-medium">Automated onboarding</span>
                </li>
              </ul>
            </motion.div>
            <motion.div 
              className="p-6 rounded-lg bg-white shadow-lg border border-text-gray/10"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold mb-4 text-text-dark">
                Benefits & Compliance
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-purple" />
                  <span className="text-text-medium">Benefits administration</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-purple" />
                  <span className="text-text-medium">Compliance reporting</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-purple" />
                  <span className="text-text-medium">Policy management</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Employee Self-Service Portal */}
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
            Employee Self-Service Portal
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={cardVariants}>
              <h3 className="text-2xl font-bold mb-6 text-text-dark">
                Empower Your Employees
              </h3>
              <p className="mb-6 text-text-medium">
                Give your employees the tools they need to manage their HR needs independently with our comprehensive self-service portal.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-blue mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-text-dark">Personal Information</h4>
                    <p className="text-text-medium">Update contact details and personal information</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-green mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-text-dark">Time Off Management</h4>
                    <p className="text-text-medium">Request and track vacation and sick leave</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-purple mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-text-dark">Document Access</h4>
                    <p className="text-text-medium">View pay stubs, tax forms, and company documents</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={cardVariants}>
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Employee Self-Service"
                className="rounded-lg w-full h-auto shadow-lg border border-text-gray/10"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 bg-gradient-to-br from-navy via-navy to-purple/90"
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
            Transform Your HR Operations
          </motion.h2>
          <motion.p 
            className="text-xl max-w-2xl mx-auto mb-8 text-text-gray"
            variants={sectionVariants}
          >
            Discover how our HR system can streamline your human resources processes and improve employee satisfaction
          </motion.p>
          <motion.button 
            className="bg-blue hover:bg-blue/90 text-text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            variants={sectionVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Demo
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default HRSystemPage;
