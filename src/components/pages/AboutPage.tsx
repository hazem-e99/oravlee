import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Shield, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-secondary-bg">
      <section className="relative py-32 bg-cover bg-center overflow-hidden min-h-screen flex items-center bg-navy">
        <div className="absolute inset-0 bg-gradient-to-br from-navy/80 via-navy/70 to-purple/60"></div>
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-text-white drop-shadow-lg">
              About <span className="text-blue">Bellatrix</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-text-gray drop-shadow-lg">
              Your trusted partner for NetSuite solutions, committed to transforming your business operations with expert guidance and innovative strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
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
              Our Track Record
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-text-medium">
              Numbers that reflect our commitment to excellence and client success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="p-6 rounded-lg text-center bg-white shadow-lg border border-text-gray/10 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl font-bold mb-2 text-blue">50+</h3>
              <p className="text-text-medium">Successful Implementations</p>
            </motion.div>
            <motion.div 
              className="p-6 rounded-lg text-center bg-white shadow-lg border border-text-gray/10 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl font-bold mb-2 text-green">30+</h3>
              <p className="text-text-medium">Industries Served</p>
            </motion.div>
            <motion.div 
              className="p-6 rounded-lg text-center bg-white shadow-lg border border-text-gray/10 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl font-bold mb-2 text-purple">95%</h3>
              <p className="text-text-medium">Client Satisfaction Rate</p>
            </motion.div>
            <motion.div 
              className="p-6 rounded-lg text-center bg-white shadow-lg border border-text-gray/10 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl font-bold mb-2 text-orange">10+</h3>
              <p className="text-text-medium">Years of Experience</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-text-white"
          >
            Our Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg text-center bg-white shadow-lg border border-text-gray/10 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-blue/10 border border-blue/20">
                <Users className="w-8 h-8 text-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-text-dark">
                Client-Centric Approach
              </h3>
              <p className="text-text-medium">
                Your success is our priority. We listen, understand, and deliver solutions that exceed expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg text-center bg-white shadow-lg border border-text-gray/10 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-green/10 border border-green/20">
                <Award className="w-8 h-8 text-green" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-text-dark">
                Excellence in Execution
              </h3>
              <p className="text-text-medium">
                We maintain the highest standards in every project, ensuring quality and precision in our deliverables.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg text-center bg-white shadow-lg border border-text-gray/10 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-purple/10 border border-purple/20">
                <Shield className="w-8 h-8 text-purple" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-text-dark">
                Trust & Reliability
              </h3>
              <p className="text-text-medium">
                Built on a foundation of trust, we provide reliable solutions and ongoing support you can count on.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Leadership Team
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-text-medium">
              Industry experts dedicated to driving your NetSuite success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg bg-white shadow-lg border border-text-gray/10 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue/20">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-text-dark">
                John Smith
              </h3>
              <p className="mb-2 text-blue font-medium">
                Chief Executive Officer
              </p>
              <p className="text-sm text-text-medium">
                15+ years of experience in ERP implementations and business transformation
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg bg-white shadow-lg border border-text-gray/10 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-green/20">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b1e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-text-dark">
                Sarah Johnson
              </h3>
              <p className="mb-2 text-green font-medium">
                Chief Technology Officer
              </p>
              <p className="text-sm text-text-medium">
                NetSuite certified expert with deep technical knowledge and implementation expertise
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg bg-white shadow-lg border border-text-gray/10 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-purple/20">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-text-dark">
                Michael Chen
              </h3>
              <p className="mb-2 text-purple font-medium">
                Head of Consulting
              </p>
              <p className="text-sm text-text-medium">
                Strategic advisor helping businesses optimize their operations with NetSuite solutions
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
