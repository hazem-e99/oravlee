import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 42, 56, 0.8), rgba(30, 42, 56, 0.8)), url('/images/6.jpg')`
      }}
    >
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-text-white"
          >
            Transform Your Business with 
            <span className="block text-blue">NetSuite Excellence</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-text-gray"
          >
            Unlock your business potential with our comprehensive NetSuite consulting, implementation, and support services. We help companies streamline operations, boost efficiency, and drive sustainable growth.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="bg-blue hover:bg-blue/90 text-text-white py-4 px-8 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center group">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="bg-transparent border-2 border-text-white/30 hover:border-purple text-text-white hover:text-purple py-4 px-8 rounded-lg font-medium transition-all duration-300 hover:shadow-lg flex items-center group">
              <PlayCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-70"
          >
            <span className="text-sm font-medium text-text-gray">Trusted by 500+ companies worldwide</span>
            <div className="flex gap-6">
              <div className="w-16 h-8 bg-light-gray/20 rounded border border-text-gray/30"></div>
              <div className="w-16 h-8 bg-light-gray/20 rounded border border-text-gray/30"></div>
              <div className="w-16 h-8 bg-light-gray/20 rounded border border-text-gray/30"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-text-gray/50 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-text-gray/50 rounded-full mt-2"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
