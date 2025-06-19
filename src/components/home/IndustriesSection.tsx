import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ShoppingCart, Cpu, Heart, DollarSign, Users2 } from 'lucide-react';

const IndustriesSection = () => {
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

  const industries = [
    {
      icon: Building2,
      title: "Manufacturing",
      description: "Streamline production, inventory management, and supply chain operations.",
      color: "blue"
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      description: "Optimize omnichannel operations, inventory, and customer experiences.",
      color: "green"
    },
    {
      icon: Cpu,
      title: "Technology",
      description: "Scale rapidly with flexible systems for project management and billing.",
      color: "purple"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Ensure compliance while improving patient care and operational efficiency.",
      color: "orange"
    },
    {
      icon: DollarSign,
      title: "Financial Services",
      description: "Manage complex financial processes with precision and regulatory compliance.",
      color: "blue"
    },
    {
      icon: Users2,
      title: "Professional Services",
      description: "Track projects, resources, and profitability with comprehensive visibility.",
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          iconBg: 'bg-blue/10 border-blue/20',
          iconColor: 'text-blue',
          hoverBg: 'hover:bg-blue/5'
        };
      case 'green':
        return {
          iconBg: 'bg-green/10 border-green/20',
          iconColor: 'text-green',
          hoverBg: 'hover:bg-green/5'
        };
      case 'purple':
        return {
          iconBg: 'bg-purple/10 border-purple/20',
          iconColor: 'text-purple',
          hoverBg: 'hover:bg-purple/5'
        };
      case 'orange':
        return {
          iconBg: 'bg-orange/10 border-orange/20',
          iconColor: 'text-orange',
          hoverBg: 'hover:bg-orange/5'
        };
      default:
        return {
          iconBg: 'bg-blue/10 border-blue/20',
          iconColor: 'text-blue',
          hoverBg: 'hover:bg-blue/5'
        };
    }
  };

  return (
    <motion.section 
      className="py-16 bg-navy"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-white">
            Industries We Serve
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-text-gray">
            Our NetSuite expertise spans across diverse industries, delivering tailored solutions 
            that address unique business challenges and requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const colorClasses = getColorClasses(industry.color);
            const Icon = industry.icon;
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" 
                }}
                transition={{ duration: 0.3 }}
                className={`bg-white rounded-lg p-6 shadow-lg border border-text-gray/10 ${colorClasses.hoverBg} transition-all duration-300 cursor-pointer`}
              >
                <div className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center border ${colorClasses.iconBg}`}>
                  <Icon className={`w-6 h-6 ${colorClasses.iconColor}`} />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-text-dark">
                  {industry.title}
                </h3>
                
                <p className="text-text-medium leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="mt-12 text-center"
          variants={sectionVariants}
        >
          <motion.button
            className="bg-blue hover:bg-blue/90 text-text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Industry Solutions
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default IndustriesSection;
