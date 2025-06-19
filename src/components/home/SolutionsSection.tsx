import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Settings, Users, BarChart3, Globe } from 'lucide-react';

const SolutionsSection = () => {
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

  const solutions = [
    {
      icon: Settings,
      title: "Implementation & Setup",
      description: "Complete NetSuite implementation from planning to go-live with minimal disruption to your business operations.",
      features: [
        "Data migration & cleanup",
        "Custom workflow design",
        "Integration configuration",
        "User training & support"
      ],
      color: "blue"
    },
    {
      icon: Users,
      title: "Customization & Development",
      description: "Tailor NetSuite to your unique business processes with custom scripts, forms, and workflows.",
      features: [
        "SuiteScript development",
        "Custom forms & fields",
        "Workflow automation",
        "Third-party integrations"
      ],
      color: "purple"
    },
    {
      icon: BarChart3,
      title: "Optimization & Support",
      description: "Continuous improvement and support to maximize your NetSuite investment and operational efficiency.",
      features: [
        "Performance optimization",
        "Process improvement",
        "24/7 technical support",
        "Regular health checks"
      ],
      color: "green"
    },
    {
      icon: Globe,
      title: "Training & Consulting",
      description: "Comprehensive training programs and strategic consulting to ensure your team maximizes NetSuite capabilities.",
      features: [
        "Role-based training",
        "Best practices consulting",
        "Change management",
        "Ongoing education"
      ],
      color: "orange"
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
    <motion.section 
      className="py-16 bg-light-gray"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          variants={sectionVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-dark">
            Comprehensive NetSuite Solutions
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-text-medium">
            From initial implementation to ongoing optimization, we provide end-to-end NetSuite services 
            that grow with your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const colorClasses = getColorClasses(solution.color);
            const Icon = solution.icon;
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" 
                }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg p-8 shadow-lg border border-text-gray/10"
              >
                <div className="flex items-start mb-6">
                  <div className={`p-3 rounded-lg mr-4 border ${colorClasses.iconBg}`}>
                    <Icon className={`w-8 h-8 ${colorClasses.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3 text-text-dark">
                      {solution.title}
                    </h3>
                    <p className="text-text-medium leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-text-medium">
                      <div className={`w-2 h-2 rounded-full mr-3 ${colorClasses.iconColor.replace('text-', 'bg-')}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  className={`inline-flex items-center ${colorClasses.accent} hover:${colorClasses.accent}/80 font-medium transition-all duration-300`}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="mt-16 bg-white rounded-lg p-8 shadow-lg border border-text-gray/10"
          variants={sectionVariants}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-text-dark">
              Not Sure Which Solution Is Right for You?
            </h3>
            <p className="text-text-medium mb-6 max-w-2xl mx-auto">
              Our NetSuite experts will assess your current systems and business requirements 
              to recommend the best approach for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-blue hover:bg-blue/90 text-text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Assessment
              </motion.button>
              
              <motion.button
                className="bg-transparent border-2 border-blue text-blue hover:bg-blue hover:text-text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Solutions
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SolutionsSection;
