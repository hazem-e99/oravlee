import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, BarChart2, CheckIcon, Award, Shield, Clock } from 'lucide-react';

const ProfessionalServicesPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-secondary-bg">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-navy via-navy to-blue/90">
        <div className="absolute inset-0 bg-gradient-to-br from-navy/80 via-navy/70 to-blue/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-white">
              Professional Services <span className="text-blue">NetSuite Solutions</span>
            </h1>
            <p className="text-xl mb-8 text-text-gray">
              Streamline your professional services operations with comprehensive NetSuite solutions designed for service-based businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="bg-blue hover:bg-blue/90 text-text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
              <motion.button 
                className="bg-transparent border-2 border-blue text-blue hover:bg-blue hover:text-text-white py-3 px-8 rounded-lg font-medium transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Section */}
      <motion.section 
        className="py-16 bg-light-gray"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={cardVariants}>
              <h2 className="text-3xl font-bold mb-6 text-text-dark">
                Optimize Your Professional Services Operations
              </h2>
              <p className="text-lg mb-6 text-text-medium">
                From project management to resource planning, our NetSuite solutions help professional services firms deliver exceptional client results while maximizing profitability.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-green" />
                  <span className="text-text-medium">Integrated project and resource management</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-green" />
                  <span className="text-text-medium">Real-time profitability tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-green" />
                  <span className="text-text-medium">Automated time and expense capture</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div variants={cardVariants}>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Professional Services"
                className="rounded-lg w-full h-auto shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <motion.h2 className="text-3xl font-bold mb-12 text-center text-text-dark" variants={sectionVariants}>
            Our Professional Services Solutions
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-lg border border-text-gray/10 shadow-lg transition-all duration-300 hover:shadow-xl"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-blue/10 border border-blue/20 flex items-center justify-center">
                <Users className="w-8 h-8 text-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-text-dark">
                Resource Management
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-green" />
                  <span className="text-text-medium">Resource allocation and scheduling</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-green" />
                  <span className="text-text-medium">Capacity planning</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-green" />
                  <span className="text-text-medium">Skills and availability tracking</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg border border-text-gray/10 shadow-lg transition-all duration-300 hover:shadow-xl"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-green/10 border border-green/20 flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-green" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-text-dark">
                Project Management
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-green" />
                  <span className="text-text-medium">Project tracking and monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-green" />
                  <span className="text-text-medium">Time and expense management</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-green" />
                  <span className="text-text-medium">Budget and cost control</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg border border-text-gray/10 shadow-lg transition-all duration-300 hover:shadow-xl"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-purple/10 border border-purple/20 flex items-center justify-center">
                <BarChart2 className="w-8 h-8 text-purple" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-text-dark">
                Analytics & Reporting
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-green" />
                  <span className="text-text-medium">Real-time project metrics</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-green" />
                  <span className="text-text-medium">Resource utilization reports</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-green" />
                  <span className="text-text-medium">Profitability analysis</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        className="py-16 bg-light-gray"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={cardVariants}>
              <h2 className="text-3xl font-bold mb-6 text-text-dark">
                Key Benefits for Professional Services
              </h2>
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start p-4 bg-white rounded-lg shadow-lg border border-text-gray/10"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-blue/10 border border-blue/20 flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-text-dark">
                      Improved Project Margins
                    </h4>
                    <p className="text-text-medium">
                      Increase profitability by 25% through better resource allocation and project tracking.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start p-4 bg-white rounded-lg shadow-lg border border-text-gray/10"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-green/10 border border-green/20 flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-green" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-text-dark">
                      Faster Project Delivery
                    </h4>
                    <p className="text-text-medium">
                      Reduce project delivery time by 30% with streamlined workflows and automated processes.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start p-4 bg-white rounded-lg shadow-lg border border-text-gray/10"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-purple/10 border border-purple/20 flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-purple" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-text-dark">
                      Enhanced Client Satisfaction
                    </h4>
                    <p className="text-text-medium">
                      Improve client satisfaction scores through better project visibility and communication.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={cardVariants}>
              <div className="bg-white p-8 rounded-lg shadow-lg border border-text-gray/10">
                <h3 className="text-2xl font-bold mb-6 text-text-dark text-center">
                  Key Performance Metrics
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue mb-2">85%</div>
                    <div className="text-sm text-text-medium">Resource Utilization</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green mb-2">92%</div>
                    <div className="text-sm text-text-medium">On-Time Delivery</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple mb-2">25%</div>
                    <div className="text-sm text-text-medium">Margin Improvement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange mb-2">98%</div>
                    <div className="text-sm text-text-medium">Client Satisfaction</div>
                  </div>
                </div>
              </div>
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
          <motion.div
            variants={sectionVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-white">
              Ready to Transform Your Professional Services?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-text-gray">
              Contact us today to learn how our NetSuite solutions can optimize your operations and boost profitability
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-blue hover:bg-blue/90 text-text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.button>
              
              <motion.button
                className="bg-transparent border-2 border-blue text-blue hover:bg-blue hover:text-text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ProfessionalServicesPage; 
