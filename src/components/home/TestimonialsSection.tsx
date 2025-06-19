import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section className="w-full py-24 relative overflow-hidden bg-navy">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-text-white">
            What Our Clients Say
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-text-gray">
            Hear from businesses that have transformed their operations with our NetSuite solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white shadow-xl border border-text-gray/10 hover:scale-105 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-6">
              <Quote className="w-10 h-10 text-blue" />
            </div>
            <p className="mb-6 text-lg text-gray-800">
              "Bellatrix transformed our entire business operations. The NetSuite implementation was seamless and the results exceeded our expectations."
            </p>
            <div className="border-t border-text-gray/20 pt-4">
              <h4 className="font-semibold text-xl text-text-dark">
                Sarah Johnson
              </h4>
              <p className="text-sm text-text-gray">
                CEO, TechCorp Solutions
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white shadow-xl border border-text-gray/10 hover:scale-105 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-6">
              <Quote className="w-10 h-10 text-purple" />
            </div>
            <p className="mb-6 text-lg text-gray-800">
              "The level of expertise and support provided by the Bellatrix team is unmatched. Our productivity has increased by 40%."
            </p>
            <div className="border-t border-text-gray/20 pt-4">
              <h4 className="font-semibold text-xl text-text-dark">
                Michael Chen
              </h4>
              <p className="text-sm text-text-gray">
                Operations Director, Global Manufacturing
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white shadow-xl border border-text-gray/10 hover:scale-105 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-6">
              <Quote className="w-10 h-10 text-green" />
            </div>
            <p className="mb-6 text-lg text-gray-800">
              "Working with Bellatrix has been a game-changer. Their deep NetSuite knowledge and professional approach delivered exceptional results."
            </p>
            <div className="border-t border-text-gray/20 pt-4">
              <h4 className="font-semibold text-xl text-text-dark">
                Emily Rodriguez
              </h4>
              <p className="text-sm text-text-gray">
                CFO, Innovate Solutions
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
