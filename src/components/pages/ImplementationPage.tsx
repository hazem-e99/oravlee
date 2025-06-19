import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle as CheckIcon, ArrowRight, Users, Clock, Wrench, BarChart } from 'lucide-react';
import ContactFormModal from '../common/ContactFormModal';

const ImplementationPage = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const handleContactModalClose = () => {
    setIsContactModalOpen(false);
  };

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
    <div className="min-h-screen overflow-hidden bg-secondary-bg">
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-navy via-navy to-blue/90">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-text-white drop-shadow-lg">
              NetSuite <span className="text-blue">Implementation</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-text-gray">
              Expert NetSuite implementation services to streamline your business operations and maximize your investment return.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleContactClick}
                className="bg-blue hover:bg-blue/90 text-text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
              <motion.button
                onClick={handleContactClick}
                className="bg-transparent border-2 border-blue text-blue hover:bg-blue hover:text-text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implementation Process */}
      <motion.section 
        className="py-16 bg-light-gray"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={sectionVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-dark">
              Our Implementation Process
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-text-medium">
              A proven methodology that ensures successful NetSuite implementation
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              { 
                icon: <CheckIcon className="w-6 h-6 text-blue" />, 
                title: "Discovery & Planning", 
                description: "Comprehensive business analysis and implementation roadmap",
                color: "blue"
              },
              { 
                icon: <CheckIcon className="w-6 h-6 text-green" />, 
                title: "System Configuration", 
                description: "Customized NetSuite setup based on your requirements",
                color: "green"
              },
              { 
                icon: <CheckIcon className="w-6 h-6 text-purple" />, 
                title: "Data Migration", 
                description: "Secure and accurate transfer of your existing data",
                color: "purple"
              },
              { 
                icon: <CheckIcon className="w-6 h-6 text-orange" />, 
                title: "Testing & Training", 
                description: "Thorough testing and comprehensive user training",
                color: "orange"
              },
              { 
                icon: <CheckIcon className="w-6 h-6 text-blue" />, 
                title: "Go-Live Support", 
                description: "Dedicated support during your transition period",
                color: "blue"
              },
              { 
                icon: <CheckIcon className="w-6 h-6 text-green" />, 
                title: "Post-Implementation", 
                description: "Ongoing optimization and support services",
                color: "green"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1 flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4 bg-${step.color}/10 border border-${step.color}/20`}>
                    {step.icon}
                  </div>
                  <div className="flex-grow h-1 bg-text-gray/20 rounded"></div>
                </div>
                <motion.div 
                  className="p-6 rounded-lg bg-white shadow-lg border border-text-gray/10 transition-all duration-300 hover:shadow-xl max-w-md"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-bold mb-2 text-text-dark">
                    {step.title}
                  </h3>
                  <p className="text-text-medium">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Implementation Services */}
      <motion.section 
        className="py-16 bg-navy"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={sectionVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-white">
              Our Implementation Services
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-text-gray">
              Comprehensive services to ensure your NetSuite implementation success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-blue" />,
                title: "Business Process Analysis",
                description: "Detailed analysis of your current processes and optimization recommendations",
                color: "blue"
              },
              {
                icon: <Wrench className="w-8 h-8 text-green" />,
                title: "System Configuration",
                description: "Custom NetSuite configuration tailored to your business requirements",
                color: "green"
              },
              {
                icon: <BarChart className="w-8 h-8 text-purple" />,
                title: "Performance Optimization",
                description: "System tuning and optimization for maximum performance and efficiency",
                color: "purple"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-lg bg-white shadow-lg border border-text-gray/10 transition-all duration-300 hover:shadow-xl"
              >
                <div className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center bg-${service.color}/10 border border-${service.color}/20`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-text-dark">
                  {service.title}
                </h3>
                <p className="text-text-medium">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 bg-gradient-to-br from-navy via-navy to-blue/90"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={sectionVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-white">
              Ready to Start Your Implementation?
            </h2>
            <p className="text-xl mb-8 text-text-gray">
              Let's discuss your NetSuite implementation needs and create a customized plan for your success
            </p>
            <motion.button
              onClick={handleContactClick}
              className="bg-blue hover:bg-blue/90 text-text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={handleContactModalClose} 
      />
    </div>
  );
};

export default ImplementationPage;
