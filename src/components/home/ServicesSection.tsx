import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, LifeBuoy } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section className="w-full py-24 relative overflow-hidden bg-light-gray">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-text-dark">
            Our NetSuite Services
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-text-medium">
            Comprehensive NetSuite solutions to help your business succeed
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* NetSuite Consultation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-lg bg-white shadow-lg border border-text-gray/10 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start mb-6">
              <div className="p-3 rounded-full mr-4 bg-blue/10 border border-blue/20">
                <MessageSquare className="w-6 h-6 text-blue" />
              </div>
              <h3 className="text-2xl font-semibold text-text-dark">
                NetSuite Consultation
              </h3>
            </div>
            <p className="mb-6 text-text-medium">
              Expert guidance to help you make the most of your NetSuite investment with tailored strategies for your business.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-3 bg-blue"></div>
                <div>
                  <h4 className="font-medium mb-1 text-text-dark">Implementation</h4>
                  <p className="text-sm text-text-medium">Seamless NetSuite implementation tailored to your business needs</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-3 bg-blue"></div>
                <div>
                  <h4 className="font-medium mb-1 text-text-dark">Training</h4>
                  <p className="text-sm text-text-medium">Comprehensive training programs for your team</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-3 bg-blue"></div>
                <div>
                  <h4 className="font-medium mb-1 text-text-dark">Customization</h4>
                  <p className="text-sm text-text-medium">Tailored solutions to meet your specific requirements</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-3 bg-blue"></div>
                <div>
                  <h4 className="font-medium mb-1 text-text-dark">Integration</h4>
                  <p className="text-sm text-text-medium">Seamless integration with your existing systems</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* NetSuite Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-lg bg-white shadow-lg border border-text-gray/10 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start mb-6">
              <div className="p-3 rounded-full mr-4 bg-green/10 border border-green/20">
                <LifeBuoy className="w-6 h-6 text-green" />
              </div>
              <h3 className="text-2xl font-semibold text-text-dark">
                NetSuite Support
              </h3>
            </div>
            <p className="mb-6 text-text-medium">
              Ongoing support to ensure your NetSuite system runs smoothly and efficiently with 24/7 assistance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-3 bg-green"></div>
                <div>
                  <h4 className="font-medium mb-1 text-text-dark">24/7 Support</h4>
                  <p className="text-sm text-text-medium">Round-the-clock technical assistance when you need it</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-3 bg-green"></div>
                <div>
                  <h4 className="font-medium mb-1 text-text-dark">Issue Resolution</h4>
                  <p className="text-sm text-text-medium">Fast and effective problem-solving by certified experts</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-3 bg-green"></div>
                <div>
                  <h4 className="font-medium mb-1 text-text-dark">System Optimization</h4>
                  <p className="text-sm text-text-medium">Continuous improvements to enhance performance</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full mt-2 mr-3 bg-green"></div>
                <div>
                  <h4 className="font-medium mb-1 text-text-dark">User Training</h4>
                  <p className="text-sm text-text-medium">Ongoing education to maximize user productivity</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
