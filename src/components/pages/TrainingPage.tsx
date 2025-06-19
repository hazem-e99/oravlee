import React, { useState } from 'react';
import { CheckIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const TrainingPage = () => {
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);

  const modules = [
    {
      title: "Interactive Learning",
      description: "Engage with hands-on exercises and real-world case studies to deepen understanding.",
      features: [
        "Practical exercises",
        "Real-world scenarios",
        "Interactive sessions",
        "Group activities"
      ],
      duration: "2 weeks",
      color: "blue"
    },
    {
      title: "Modular Structure",
      description: "Break down complex topics into digestible modules for flexible learning paths.",
      features: [
        "Step-by-step learning",
        "Flexible scheduling",
        "Progress tracking",
        "Customizable pace"
      ],
      duration: "3 weeks",
      color: "green"
    },
    {
      title: "Continuous Improvement",
      description: "Foster ongoing skill development with regular updates and advanced topics.",
      features: [
        "Regular updates",
        "Advanced topics",
        "Skill assessments",
        "Performance tracking"
      ],
      duration: "4 weeks",
      color: "purple"
    },
    {
      title: "Blended Approach",
      description: "Combine self-paced study with expert-led sessions for a comprehensive experience.",
      features: [
        "Self-paced learning",
        "Expert guidance",
        "Virtual sessions",
        "Resource library"
      ],
      duration: "2 weeks",
      color: "orange"
    },
    {
      title: "Practical Application",
      description: "Focus on immediate usability of learned skills in your daily operations.",
      features: [
        "Real-time practice",
        "Work simulations",
        "Problem-solving",
        "Best practices"
      ],
      duration: "3 weeks",
      color: "blue"
    },
    {
      title: "Customizable Tracks",
      description: "Tailor training content to specific departmental or role-based requirements.",
      features: [
        "Role-specific content",
        "Department focus",
        "Custom modules",
        "Flexible curriculum"
      ],
      duration: "2 weeks",
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          iconBg: 'bg-blue/10 border-blue/20',
          iconColor: 'text-blue',
          accent: 'text-blue'
        };
      case 'green':
        return {
          iconBg: 'bg-green/10 border-green/20',
          iconColor: 'text-green',
          accent: 'text-green'
        };
      case 'purple':
        return {
          iconBg: 'bg-purple/10 border-purple/20',
          iconColor: 'text-purple',
          accent: 'text-purple'
        };
      case 'orange':
        return {
          iconBg: 'bg-orange/10 border-orange/20',
          iconColor: 'text-orange',
          accent: 'text-orange'
        };
      default:
        return {
          iconBg: 'bg-blue/10 border-blue/20',
          iconColor: 'text-blue',
          accent: 'text-blue'
        };
    }
  };

  return (
    <div className="w-full min-h-screen bg-secondary-bg">
      {/* Main Section */}
      <section 
        className="relative py-32 overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-navy via-navy to-blue/90"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy/80 via-navy/70 to-blue/60"></div>
        <div className="container mx-auto px-4 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center my-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-text-white">
              NetSuite <span className="text-blue">Training</span>
            </h1>
            <p className="text-2xl max-w-3xl mx-auto leading-relaxed text-text-gray">
              Comprehensive training programs designed to help your team
              maximize the value of your NetSuite investment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Left: Training Programs Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 h-full border border-text-gray/10 shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-8 text-text-dark">
                Our Training Programs
              </h3>
              <div className="space-y-8">
                {[
                  {
                    title: "End-User Training",
                    description: "Comprehensive training for daily users covering navigation, transactions, reporting, and best practices. Perfect for new team members or those transitioning to NetSuite.",
                    color: "blue"
                  },
                  {
                    title: "Administrator Training",
                    description: "Advanced training for system administrators covering user management, security settings, customizations, and system maintenance.",
                    color: "green"
                  },
                  {
                    title: "Custom Development Training",
                    description: "Specialized training for developers covering SuiteScript, workflows, custom records, and integration development.",
                    color: "purple"
                  },
                  {
                    title: "Executive Overview",
                    description: "High-level training for executives and managers focusing on reporting, analytics, and strategic use of NetSuite features.",
                    color: "orange"
                  }
                ].map((program, index) => {
                  const colorClasses = getColorClasses(program.color);
                  return (
                    <motion.div
                      key={program.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="group"
                    >
                      <h4 className={`text-lg font-semibold mb-2 ${colorClasses.accent}`}>
                        {program.title}
                      </h4>
                      <p className="text-text-medium transition-colors duration-300">
                        {program.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 h-full border border-text-gray/10 shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-8 text-text-dark">
                Request More Info From an Expert
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-sm font-medium mb-1.5 text-text-medium transition-colors duration-300">
                      Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 bg-light-gray rounded-lg border border-text-gray/30 focus:border-blue transition-all duration-300 outline-none focus:ring-2 focus:ring-blue/20 text-text-dark" 
                      placeholder="Your name" 
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium mb-1.5 text-text-medium transition-colors duration-300">
                      Email
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 bg-light-gray rounded-lg border border-text-gray/30 focus:border-blue transition-all duration-300 outline-none focus:ring-2 focus:ring-blue/20 text-text-dark" 
                      placeholder="your.email@company.com" 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-sm font-medium mb-1.5 text-text-medium transition-colors duration-300">
                      Company
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 bg-light-gray rounded-lg border border-text-gray/30 focus:border-blue transition-all duration-300 outline-none focus:ring-2 focus:ring-blue/20 text-text-dark" 
                      placeholder="Company name" 
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium mb-1.5 text-text-medium transition-colors duration-300">
                      Phone
                    </label>
                    <input 
                      type="tel" 
                      className="w-full px-3 py-2 bg-light-gray rounded-lg border border-text-gray/30 focus:border-blue transition-all duration-300 outline-none focus:ring-2 focus:ring-blue/20 text-text-dark" 
                      placeholder="Your phone number" 
                    />
                  </div>
                </div>
                <div className="group">
                  <label className="block text-sm font-medium mb-1.5 text-text-medium transition-colors duration-300">
                    Training Interest
                  </label>
                  <select className="w-full px-3 py-2 bg-light-gray rounded-lg border border-text-gray/30 focus:border-blue transition-all duration-300 outline-none focus:ring-2 focus:ring-blue/20 text-text-dark">
                    <option>Select training type</option>
                    <option>End-User Training</option>
                    <option>Administrator Training</option>
                    <option>Custom Development Training</option>
                    <option>Executive Overview</option>
                  </select>
                </div>
                <div className="group">
                  <label className="block text-sm font-medium mb-1.5 text-text-medium transition-colors duration-300">
                    Message
                  </label>
                  <textarea 
                    rows={4} 
                    className="w-full px-3 py-2 bg-light-gray rounded-lg border border-text-gray/30 focus:border-blue transition-all duration-300 outline-none focus:ring-2 focus:ring-blue/20 text-text-dark" 
                    placeholder="Tell us about your training needs..."
                  ></textarea>
                </div>
                <motion.button 
                  type="submit" 
                  className="w-full bg-blue hover:bg-blue/90 text-text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request Information
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Modules Section */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-dark">
              Our Training Approach
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-text-medium">
              Discover our comprehensive training methodology designed for maximum learning effectiveness
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => {
              const colorClasses = getColorClasses(module.color);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 shadow-lg border border-text-gray/10 hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center border ${colorClasses.iconBg}`}>
                    <span className={`text-lg font-bold ${colorClasses.iconColor}`}>
                      {index + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-text-dark">
                    {module.title}
                  </h3>
                  
                  <p className="text-text-medium mb-4">
                    {module.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {module.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckIcon className={`w-4 h-4 mr-2 ${colorClasses.iconColor}`} />
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className={`text-sm font-medium ${colorClasses.accent}`}>
                    Duration: {module.duration}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-navy via-navy to-purple/90">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-white">
              Ready to Empower Your Team?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-text-gray">
              Invest in comprehensive NetSuite training and unlock your team's full potential
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-blue hover:bg-blue/90 text-text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Training Today
              </motion.button>
              
              <motion.button
                className="bg-transparent border-2 border-blue text-blue hover:bg-blue hover:text-text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Training Catalog
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TrainingPage;
