import React from 'react';
import { CheckIcon, Users, Briefcase, Award, BarChart2, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectManagementPage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-secondary-bg">
      {/* Hero Section */}
      <motion.section 
        className="w-full py-24 bg-gradient-to-br from-navy via-navy to-green/90 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy/80 via-navy/70 to-green/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={sectionVariants}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-white">
                Project Management <span className="text-green">Solutions</span>
              </h1>
              <p className="text-xl mb-8 text-text-gray">
                Streamline your project workflows, enhance team collaboration, and deliver projects on time with our comprehensive NetSuite project management solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button 
                  variants={buttonVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green hover:bg-green/90 text-text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Schedule a Demo
                </motion.button>
                <motion.button 
                  variants={buttonVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-green text-green hover:bg-green hover:text-text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
                >
                  View Features
                </motion.button>
              </div>
            </motion.div>
            <div className="lg:flex justify-end hidden">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Project Management" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Key Features Section */}
      <motion.section 
        className="py-16 bg-light-gray"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <motion.h2 className="text-3xl font-bold mb-12 text-center text-text-dark" variants={sectionVariants}>
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-lg border border-text-gray/10 shadow-lg hover:shadow-xl transition-all duration-300" 
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-blue/10 border border-blue/20 flex items-center justify-center">
                <Users className="w-8 h-8 text-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-text-dark">
                Team Collaboration
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-green" />
                  <span className="text-text-medium">Real-time team communication</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-green" />
                  <span className="text-text-medium">Task assignment and tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-green" />
                  <span className="text-text-medium">Document sharing and version control</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg border border-text-gray/10 shadow-lg hover:shadow-xl transition-all duration-300" 
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-green/10 border border-green/20 flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-green" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-text-dark">
                Project Planning
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-green" />
                  <span className="text-text-medium">Resource allocation</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-green" />
                  <span className="text-text-medium">Timeline management</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-green" />
                  <span className="text-text-medium">Budget tracking</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg border border-text-gray/10 shadow-lg hover:shadow-xl transition-all duration-300" 
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
                  <span className="text-text-medium">Project performance metrics</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-green" />
                  <span className="text-text-medium">Resource utilization reports</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-green" />
                  <span className="text-text-medium">Custom dashboards</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={sectionVariants}>
              <h2 className="text-3xl font-bold mb-6 text-text-dark">
                Why Choose Our Project Management Solution?
              </h2>
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start p-4 bg-light-gray rounded-lg border border-text-gray/10"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-blue/10 border border-blue/20 flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-text-dark">
                      Proven Track Record
                    </h4>
                    <p className="text-text-medium">
                      Successfully delivered 500+ projects with 98% client satisfaction rate.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start p-4 bg-light-gray rounded-lg border border-text-gray/10"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-green/10 border border-green/20 flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-green" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-text-dark">
                      Enterprise Security
                    </h4>
                    <p className="text-text-medium">
                      Bank-level security with role-based access control and data encryption.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start p-4 bg-light-gray rounded-lg border border-text-gray/10"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-purple/10 border border-purple/20 flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-purple" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-text-dark">
                      24/7 Support
                    </h4>
                    <p className="text-text-medium">
                      Round-the-clock technical support and consultation from our expert team.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={cardVariants}>
              <div className="bg-light-gray p-8 rounded-lg border border-text-gray/10 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-text-dark text-center">
                  Project Success Metrics
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue mb-2">95%</div>
                    <div className="text-sm text-text-secondary">On-Time Delivery</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green mb-2">40%</div>
                    <div className="text-sm text-text-secondary">Time Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple mb-2">85%</div>
                    <div className="text-sm text-text-secondary">Resource Efficiency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange mb-2">99%</div>
                    <div className="text-sm text-text-secondary">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Showcase */}
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
              Advanced Project Management Features
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-text-medium">
              Powerful tools designed to streamline your project workflow from start to finish
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Gantt Charts",
                description: "Visual project timelines with dependencies",
                color: "blue"
              },
              {
                title: "Time Tracking",
                description: "Automated time logging and reporting",
                color: "green"
              },
              {
                title: "Resource Planning",
                description: "Optimize team allocation and workload",
                color: "purple"
              },
              {
                title: "Budget Control",
                description: "Real-time budget monitoring and alerts",
                color: "orange"
              }
            ].map((feature, index) => {
              const getColorClasses = (color: string) => {
                switch (color) {
                  case 'blue':
                    return { bg: 'bg-blue/10', border: 'border-blue/20', text: 'text-blue' };
                  case 'green':
                    return { bg: 'bg-green/10', border: 'border-green/20', text: 'text-green' };
                  case 'purple':
                    return { bg: 'bg-purple/10', border: 'border-purple/20', text: 'text-purple' };
                  case 'orange':
                    return { bg: 'bg-orange/10', border: 'border-orange/20', text: 'text-orange' };
                  default:
                    return { bg: 'bg-blue/10', border: 'border-blue/20', text: 'text-blue' };
                }
              };
              
              const colorClasses = getColorClasses(feature.color);
              
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-white p-6 rounded-lg shadow-lg border border-text-gray/10 text-center hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-lg ${colorClasses.bg} border ${colorClasses.border} flex items-center justify-center`}>
                    <span className={`text-2xl font-bold ${colorClasses.text}`}>
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-text-dark">{feature.title}</h3>
                  <p className="text-text-medium text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
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
          <motion.div
            variants={sectionVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-white">
              Ready to Revolutionize Your Project Management?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-text-gray">
              Join thousands of teams already using our platform to deliver successful projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-green hover:bg-green/90 text-text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
              </motion.button>
              
              <motion.button
                className="bg-transparent border-2 border-green text-green hover:bg-green hover:text-text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ProjectManagementPage; 
