import React, { useState } from 'react';
import { CheckIcon, XIcon, Phone, Mail, MessageSquare, Users, Wrench, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';

const SupportPage = () => {
  const [showPopup, setShowPopup] = useState(false);

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
        className="w-full py-24 bg-gradient-to-br from-navy via-navy to-blue/90"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy/80 via-navy/70 to-blue/60"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-white" variants={sectionVariants}>
            Oracle NetSuite <span className="text-blue">Support Services</span>
          </motion.h1>
          <motion.p className="text-xl max-w-2xl mx-auto mb-8 text-text-gray" variants={sectionVariants}>
            Maximize your NetSuite investment with our comprehensive support
            services
          </motion.p>
          <motion.button 
            className="bg-blue hover:bg-blue/90 text-text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => setShowPopup(true)}
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request Support
          </motion.button>
        </div>
      </motion.section>

      {/* Two-column Section */}
      <motion.section 
        className="py-16 bg-light-gray"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div variants={sectionVariants}>
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="NetSuite Support Services" className="rounded-lg w-full h-auto shadow-lg" />
            </motion.div>
            <motion.div variants={sectionVariants}>
              <h2 className="text-3xl font-bold mb-6 text-text-dark">
                Bellatrix Support Services
              </h2>
              <p className="mb-6 text-text-medium">
                Our NetSuite support services are designed to help you get the
                most out of your NetSuite investment. From day-to-day assistance
                to strategic guidance, our team of certified NetSuite experts is
                here to help.
              </p>
              <p className="mb-6 text-text-medium">
                With Bellatrix as your support partner, you'll have access to a
                dedicated team that understands your business and your NetSuite
                implementation, ensuring faster issue resolution and continuous
                improvement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button 
                  className="bg-blue hover:bg-blue/90 text-text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                  variants={buttonVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
                <motion.button 
                  className="bg-transparent border-2 border-blue text-blue hover:bg-blue hover:text-text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                  onClick={() => setShowPopup(true)}
                  variants={buttonVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Support
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Quote Section */}
      <motion.section 
        className="py-12 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div className="max-w-3xl mx-auto" variants={sectionVariants}>
            <h3 className="text-2xl font-bold mb-4 text-text-dark">
              Need NetSuite support? We can help!
            </h3>
            <p className="mb-6 text-text-medium">
              Answer the question to get started with our dedicated support
              team.
            </p>
            <motion.button 
              className="bg-green hover:bg-green/90 text-text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => setShowPopup(true)}
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Continue
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* 3-column list Section */}
      <motion.section 
        className="py-16 bg-light-gray"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-white rounded-lg p-8 shadow-lg border border-text-gray/10"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <p className="mb-8 text-center max-w-3xl mx-auto text-text-medium">
              Our NetSuite support services are designed to provide you with the
              assistance you need, when you need it. From troubleshooting to
              optimization, we've got you covered.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div variants={cardVariants}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue/10 border border-blue/20 flex items-center justify-center mr-3">
                    <Wrench className="w-6 h-6 text-blue" />
                  </div>
                  <h4 className="font-semibold text-text-dark">
                    Technical Support
                  </h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 mr-2 flex-shrink-0 text-green" />
                    <span className="text-text-medium">Issue troubleshooting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 mr-2 flex-shrink-0 text-green" />
                    <span className="text-text-medium">Error resolution</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 mr-2 flex-shrink-0 text-green" />
                    <span className="text-text-medium">
                      Performance optimization
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 mr-2 flex-shrink-0 text-green" />
                    <span className="text-text-medium">System monitoring</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div variants={cardVariants}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-green/10 border border-green/20 flex items-center justify-center mr-3">
                    <Users className="w-6 h-6 text-green" />
                  </div>
                  <h4 className="font-semibold text-text-dark">
                    Functional Support
                  </h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 mr-2 flex-shrink-0 text-green" />
                    <span className="text-text-medium">User assistance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 mr-2 flex-shrink-0 text-green" />
                    <span className="text-text-medium">Process optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 mr-2 flex-shrink-0 text-green" />
                    <span className="text-text-medium">Configuration changes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 mr-2 flex-shrink-0 text-green" />
                    <span className="text-text-medium">Report creation</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div variants={cardVariants}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-purple/10 border border-purple/20 flex items-center justify-center mr-3">
                    <BarChart2 className="w-6 h-6 text-purple" />
                  </div>
                  <h4 className="font-semibold text-text-dark">
                    Strategic Support
                  </h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 mr-2 flex-shrink-0 text-green" />
                    <span className="text-text-medium">Business analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 mr-2 flex-shrink-0 text-green" />
                    <span className="text-text-medium">Best practices</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 mr-2 flex-shrink-0 text-green" />
                    <span className="text-text-medium">System upgrades</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 mr-2 flex-shrink-0 text-green" />
                    <span className="text-text-medium">Training recommendations</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Support Plans Section */}
      <motion.section 
        className="py-16 bg-navy"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-white">
              Choose Your Support Plan
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-text-gray">
              Flexible support options designed to meet your specific needs and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Essential",
                price: "Contact Us",
                description: "Basic support for small teams",
                features: [
                  "Email support",
                  "Knowledge base access",
                  "Basic troubleshooting",
                  "Business hours support"
                ],
                color: "blue",
                popular: false
              },
              {
                name: "Professional",
                price: "Contact Us", 
                description: "Advanced support for growing businesses",
                features: [
                  "Priority email & phone support",
                  "Dedicated support manager",
                  "Performance optimization",
                  "24/7 emergency support"
                ],
                color: "green",
                popular: true
              },
              {
                name: "Enterprise",
                price: "Contact Us",
                description: "Premium support for large organizations",
                features: [
                  "White-glove support service",
                  "On-site support visits",
                  "Custom integrations",
                  "Strategic consulting"
                ],
                color: "purple",
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`relative bg-white rounded-lg p-8 shadow-xl border ${plan.popular ? 'border-green ring-2 ring-green/20' : 'border-text-gray/10'} transition-all duration-300`}
                whileHover={{ scale: 1.02 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green text-text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                                  <h3 className="text-2xl font-bold mb-2 text-text-dark">{plan.name}</h3>
                <p className="text-text-medium mb-4">{plan.description}</p>
                <div className="text-3xl font-bold text-text-dark mb-2">{plan.price}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-green" />
                      <span className="text-text-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${plan.popular 
                    ? 'bg-green hover:bg-green/90 text-text-white shadow-lg hover:shadow-xl' 
                    : 'bg-transparent border-2 border-blue text-blue hover:bg-blue hover:text-text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowPopup(true)}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
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
              Get In Touch
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-text-medium">
              Ready to get started? Contact our support team today
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-lg border border-text-gray/10"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue/10 border border-blue/20 flex items-center justify-center">
                <Phone className="w-8 h-8 text-blue" />
              </div>
                              <h3 className="text-lg font-semibold mb-2 text-text-dark">Call Us</h3>
                <p className="text-text-medium">+1 (555) 123-4567</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-lg border border-text-gray/10"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green/10 border border-green/20 flex items-center justify-center">
                <Mail className="w-8 h-8 text-green" />
              </div>
                              <h3 className="text-lg font-semibold mb-2 text-text-dark">Email Us</h3>
                <p className="text-text-medium">support@bellatrix.com</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-lg border border-text-gray/10"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple/10 border border-purple/20 flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-purple" />
              </div>
                              <h3 className="text-lg font-semibold mb-2 text-text-dark">Live Chat</h3>
                <p className="text-text-medium">24/7 Support Available</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-navy/50 backdrop-blur-sm">
          <div className="absolute inset-0" onClick={() => setShowPopup(false)}></div>
          <div className="relative bg-white p-8 rounded-lg w-full max-w-md mx-4 shadow-xl">
            <button
              className="absolute top-4 right-4 text-text-secondary hover:text-text-dark transition-colors duration-300"
              onClick={() => setShowPopup(false)}
            >
              <XIcon className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold mb-4 text-text-dark">Contact Support</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-text-medium">Name</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 bg-light-gray rounded-lg border border-text-gray/30 focus:border-blue transition-all duration-300 outline-none focus:ring-2 focus:ring-blue/20 text-text-dark" 
                  placeholder="Your name" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-text-medium">Email</label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 bg-light-gray rounded-lg border border-text-gray/30 focus:border-blue transition-all duration-300 outline-none focus:ring-2 focus:ring-blue/20 text-text-dark" 
                  placeholder="your.email@company.com" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-text-medium">Issue Type</label>
                <select className="w-full px-3 py-2 bg-light-gray rounded-lg border border-text-gray/30 focus:border-blue transition-all duration-300 outline-none focus:ring-2 focus:ring-blue/20 text-text-dark">
                  <option>Technical Issue</option>
                  <option>Account Question</option>
                  <option>Billing Inquiry</option>
                  <option>Feature Request</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-text-medium">Message</label>
                <textarea 
                  rows={4} 
                  className="w-full px-3 py-2 bg-light-gray rounded-lg border border-text-gray/30 focus:border-blue transition-all duration-300 outline-none focus:ring-2 focus:ring-blue/20 text-text-dark" 
                  placeholder="Describe your issue..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue hover:bg-blue/90 text-text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportPage;
