import React, { useState, useRef, useEffect } from 'react';
import { XIcon, Building2, Phone, Mail, User, MessageSquare, Briefcase, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormModal = ({
  isOpen,
  onClose
}: ContactFormModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSuccess, setFormSuccess] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const validateForm = (formData: FormData) => {
    const errors: Record<string, string> = {};
    const email = formData.get('email') as string;
    const name = formData.get('name') as string;
    const message = formData.get('message') as string;
    const company = formData.get('company') as string;
    const phone = formData.get('phone') as string;
    const industry = formData.get('industry') as string;

    if (!name) {
      errors.name = 'Name is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!company) {
      errors.company = 'Company name is required';
    }
    if (!phone) {
      errors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(phone)) {
      errors.phone = 'Please enter a valid phone number';
    }
    if (!industry) {
      errors.industry = 'Industry is required';
    }
    if (!message) {
      errors.message = 'Message is required';
    } else if (message.length < 20) {
      errors.message = 'Message must be at least 20 characters';
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormErrors({});
    const formData = new FormData(e.currentTarget);
    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormSuccess(true);
      setTimeout(() => {
        onClose();
        setFormSuccess(false);
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormErrors({ submit: 'Failed to submit form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        >
          <div
            className="absolute inset-0"
            onClick={onClose}
          />
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl w-full max-w-2xl border border-text-gray/20 shadow-xl overflow-hidden"
          >
            <div className="flex justify-between items-center p-6 bg-navy border-b border-text-gray/20">
              <h3 className="text-2xl font-bold text-text-white">Contact Us</h3>
              <button
                onClick={onClose}
                className="text-text-gray hover:text-text-white transition-colors duration-300 p-2 rounded-lg hover:bg-text-gray/10"
              >
                <XIcon className="w-6 h-6" />
              </button>
            </div>
            
            {formSuccess ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green/10 rounded-full flex items-center justify-center border border-green/20">
                  <MessageSquare className="w-8 h-8 text-green" />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-text-dark">Message Sent Successfully!</h4>
                <p className="text-text-medium">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="group">
                  <label className="flex items-center text-sm font-medium mb-1.5 text-text-medium">
                    <User className="w-4 h-4 mr-2 text-blue" />
                    Full Name <span className="ml-1 text-orange">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className={`w-full px-3 py-2 bg-light-gray rounded-lg border ${
                      formErrors.name 
                        ? 'border-orange focus:border-orange' 
                        : 'border-text-gray/30 focus:border-blue'
                    } transition-all duration-300 outline-none focus:ring-2 focus:ring-blue/20 text-text-dark`}
                    placeholder="Enter your full name"
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-sm text-orange">
                      {formErrors.name}
                    </p>
                  )}
                </div>

                <div className="group">
                  <label className="flex items-center text-sm font-medium mb-1.5 text-text-medium">
                    <Mail className="w-4 h-4 mr-2 text-blue" />
                    Email <span className="ml-1 text-orange">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className={`w-full px-3 py-2 bg-light-gray rounded-lg border ${
                      formErrors.email 
                        ? 'border-orange focus:border-orange' 
                        : 'border-text-gray/30 focus:border-blue'
                    } transition-all duration-300 outline-none focus:ring-2 focus:ring-blue/20 text-text-dark`}
                    placeholder="Enter your email address"
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-sm text-orange">
                      {formErrors.email}
                    </p>
                  )}
                </div>

                <div className="group">
                  <label className="flex items-center text-sm font-medium mb-1.5 text-text-medium">
                    <Building2 className="w-4 h-4 mr-2 text-blue" />
                    Company <span className="ml-1 text-orange">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    className={`w-full px-3 py-2 bg-light-gray rounded-lg border ${
                      formErrors.company 
                        ? 'border-orange focus:border-orange' 
                        : 'border-text-gray/30 focus:border-blue'
                    } transition-all duration-300 outline-none focus:ring-2 focus:ring-blue/20 text-text-dark`}
                    placeholder="Enter your company name"
                  />
                  {formErrors.company && (
                    <p className="mt-1 text-sm text-orange">
                      {formErrors.company}
                    </p>
                  )}
                </div>

                <div className="group">
                  <label className="flex items-center text-sm font-medium mb-1.5 text-text-medium">
                    <Phone className="w-4 h-4 mr-2 text-blue" />
                    Phone <span className="ml-1 text-orange">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className={`w-full px-3 py-2 bg-light-gray rounded-lg border ${
                      formErrors.phone 
                        ? 'border-orange focus:border-orange' 
                        : 'border-text-gray/30 focus:border-blue'
                    } transition-all duration-300 outline-none focus:ring-2 focus:ring-blue/20 text-text-dark`}
                    placeholder="Enter your phone number"
                  />
                  {formErrors.phone && (
                    <p className="mt-1 text-sm text-orange">
                      {formErrors.phone}
                    </p>
                  )}
                </div>

                <div className="group">
                  <label className="flex items-center text-sm font-medium mb-1.5 text-text-medium">
                    <Briefcase className="w-4 h-4 mr-2 text-blue" />
                    Industry <span className="ml-1 text-orange">*</span>
                  </label>
                  <select
                    name="industry"
                    className={`w-full px-3 py-2 bg-light-gray rounded-lg border ${
                      formErrors.industry 
                        ? 'border-orange focus:border-orange' 
                        : 'border-text-gray/30 focus:border-blue'
                    } transition-all duration-300 outline-none focus:ring-2 focus:ring-blue/20 text-text-dark`}
                  >
                    <option value="">Select your industry</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="retail">Retail</option>
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="financial">Financial Services</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                  {formErrors.industry && (
                    <p className="mt-1 text-sm text-orange">
                      {formErrors.industry}
                    </p>
                  )}
                </div>

                <div className="group">
                  <label className="flex items-center text-sm font-medium mb-1.5 text-text-medium">
                    <MessageSquare className="w-4 h-4 mr-2 text-blue" />
                    Message <span className="ml-1 text-orange">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className={`w-full px-3 py-2 bg-light-gray rounded-lg border ${
                      formErrors.message 
                        ? 'border-orange focus:border-orange' 
                        : 'border-text-gray/30 focus:border-blue'
                    } transition-all duration-300 outline-none focus:ring-2 focus:ring-blue/20 text-text-dark resize-none`}
                    placeholder="Tell us about your project requirements..."
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-sm text-orange">
                      {formErrors.message}
                    </p>
                  )}
                </div>

                {formErrors.submit && (
                  <div className="p-4 bg-orange/10 border border-orange/20 rounded-lg">
                    <p className="text-orange text-sm">{formErrors.submit}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue hover:bg-blue/90 disabled:bg-text-gray/50 text-text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactFormModal;
