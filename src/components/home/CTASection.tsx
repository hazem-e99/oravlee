import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  onContactClick: () => void;
}

const CTASection = ({ onContactClick }: CTASectionProps) => {
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

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.8, 0.5, 1] 
      } 
    },
  };

  return (
    <motion.section 
      className="py-16 bg-gradient-to-br from-navy via-navy to-purple/90"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <motion.div 
        className="container mx-auto px-4 text-center"
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-text-white"
            variants={sectionVariants}
          >
            Ready to Transform Your{' '}
            <span className="text-blue">NetSuite Experience</span>?
          </motion.h2>
          
          <motion.p 
            className="text-lg mb-8 max-w-2xl mx-auto text-text-gray"
            variants={sectionVariants}
          >
            Get started with our expert NetSuite consulting services today. 
            Our team of certified professionals is ready to help you optimize 
            your business processes and maximize your NetSuite investment.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={sectionVariants}
          >
            <motion.button
              onClick={onContactClick}
              className="bg-blue hover:bg-blue/90 text-text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
            
            <motion.button
              className="bg-transparent border-2 border-blue text-blue hover:bg-blue hover:text-text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            variants={sectionVariants}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-text-gray/20">
              <div className="text-3xl font-bold text-blue mb-2">50+</div>
              <div className="text-text-gray">Successful Projects</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-text-gray/20">
              <div className="text-3xl font-bold text-green mb-2">98%</div>
              <div className="text-text-gray">Client Satisfaction</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-text-gray/20">
              <div className="text-3xl font-bold text-purple mb-2">24/7</div>
              <div className="text-text-gray">Support Available</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default CTASection; 
