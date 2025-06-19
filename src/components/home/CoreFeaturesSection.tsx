import React from 'react';
import { Users, Briefcase, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const CoreFeaturesSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.8, 0.5, 1] } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.8, 0.5, 1] } },
  };

  return (
    <motion.section 
      className="w-full py-16 bg-navy" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-text-white"
            variants={sectionVariants}
          >
            Core Features
          </motion.h2>
          <motion.p 
            className="text-lg max-w-2xl mx-auto text-text-gray"
            variants={sectionVariants}
          >
            Comprehensive solutions designed to streamline your business operations
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Employee Management */}
          <motion.div 
            className="p-6 rounded-lg bg-white shadow-lg border border-text-gray/10"
            variants={cardVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full mr-4 bg-blue/10 border border-blue/20">
                <Users className="w-6 h-6 text-blue" />
              </div>
              <h3 className="text-xl font-semibold text-text-dark">
                Employee Management
              </h3>
            </div>
            <p className="mb-4 text-text-medium">
              Streamline your workforce management with our comprehensive employee
              management solution.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-text-medium">
                <span className="mr-2 text-blue">•</span>
                Employee self-service portal
              </li>
              <li className="flex items-center text-text-medium">
                <span className="mr-2 text-blue">•</span>
                Performance management tools
              </li>
              <li className="flex items-center text-text-medium">
                <span className="mr-2 text-blue">•</span>
                Time and attendance tracking
              </li>
            </ul>
          </motion.div>

          {/* Benefits Administration */}
          <motion.div 
            className="p-6 rounded-lg bg-white shadow-lg border border-text-gray/10"
            variants={cardVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full mr-4 bg-purple/10 border border-purple/20">
                <Briefcase className="w-6 h-6 text-purple" />
              </div>
              <h3 className="text-xl font-semibold text-text-dark">
                Benefits Administration
              </h3>
            </div>
            <p className="mb-4 text-text-medium">
              Simplify benefits management and ensure compliance with our
              comprehensive administration tools.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-text-medium">
                <span className="mr-2 text-purple">•</span>
                Benefits enrollment automation
              </li>
              <li className="flex items-center text-text-medium">
                <span className="mr-2 text-purple">•</span>
                Compliance monitoring
              </li>
              <li className="flex items-center text-text-medium">
                <span className="mr-2 text-purple">•</span>
                Claims processing
              </li>
            </ul>
          </motion.div>

          {/* Recruitment & Onboarding */}
          <motion.div 
            className="p-6 rounded-lg bg-white shadow-lg border border-text-gray/10"
            variants={cardVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full mr-4 bg-green/10 border border-green/20">
                <FileText className="w-6 h-6 text-green" />
              </div>
              <h3 className="text-xl font-semibold text-text-dark">
                Recruitment & Onboarding
              </h3>
            </div>
            <p className="mb-4 text-text-medium">
              Optimize your hiring process and ensure smooth onboarding with our
              integrated recruitment solution.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-text-medium">
                <span className="mr-2 text-green">•</span>
                Applicant tracking system
              </li>
              <li className="flex items-center text-text-medium">
                <span className="mr-2 text-green">•</span>
                Automated onboarding workflows
              </li>
              <li className="flex items-center text-text-medium">
                <span className="mr-2 text-green">•</span>
                Document management
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CoreFeaturesSection; 
