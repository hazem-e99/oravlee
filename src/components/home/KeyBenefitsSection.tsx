import React from 'react';
import { CheckCircle, TrendingUp, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const KeyBenefitsSection = () => {
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

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Efficiency",
      description: "Streamline your business processes and reduce manual work by up to 60% with our optimized NetSuite solutions.",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Protect your business data with enterprise-grade security features and compliance standards built into NetSuite.",
      color: "green"
    },
    {
      icon: CheckCircle,
      title: "Improved Accuracy",
      description: "Eliminate human errors and ensure data consistency across all your business operations and reporting.",
      color: "purple"
    },
    {
      icon: Clock,
      title: "Real-time Insights",
      description: "Access up-to-date business intelligence and analytics to make informed decisions faster than ever before.",
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
            Why Choose Our NetSuite Solutions?
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-text-medium">
            Transform your business operations with proven benefits that drive growth and efficiency
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const colorClasses = getColorClasses(benefit.color);
            const Icon = benefit.icon;
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" 
                }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg p-6 shadow-lg border border-text-gray/10 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center border ${colorClasses.iconBg}`}>
                  <Icon className={`w-8 h-8 ${colorClasses.iconColor}`} />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-text-dark">
                  {benefit.title}
                </h3>
                
                <p className="text-text-medium leading-relaxed">
                  {benefit.description}
                </p>
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
              Ready to Experience These Benefits?
            </h3>
            <p className="text-text-medium mb-6 max-w-2xl mx-auto">
              Join over 50+ companies that have transformed their operations with our NetSuite expertise. 
              Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-blue hover:bg-blue/90 text-text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Free Consultation
              </motion.button>
              
              <motion.button
                className="bg-transparent border-2 border-blue text-blue hover:bg-blue hover:text-text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Case Studies
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default KeyBenefitsSection; 
