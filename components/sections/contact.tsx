'use client'
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { supabase } from '@/lib/supabaseClient';
import { FaRegPaperPlane } from 'react-icons/fa';

const ContactSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

   const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

   const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const isNameValid = validateField('name', formData.name);
    const isEmailValid = validateField('email', formData.email);
    const isPhoneValid = validateField('phone', formData.phone);
    const isMessageValid = validateField('message', formData.message);

    if (!isNameValid || !isEmailValid || !isPhoneValid || !isMessageValid) {
      return;
    }

    setLoading(true);

    const { error } = await supabase.from('contact').insert([
      {
        name: formData.name,
        email: formData.email,
        number: formData.phone,
        description: formData.message,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error(error);
      // Show error to user
      setErrors(prev => ({ ...prev, message: 'Failed to send message. Please try again.' }));

      return;
    }

    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setErrors({ name: '', email: '', phone: '', message: '' });

    setTimeout(() => setSubmitted(false), 2000);
  };


  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
    // Validation function
  const validateField = (name: string, value: string) => {
    let error = '';

    switch (name) {
      case 'name':
        if (value.trim().length < 2) {
          error = 'Name must be at least 2 characters';
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'phone':
        const phoneRegex = /^[+]?[0-9]{10}$/;
        if (!phoneRegex.test(value.replace(/\s/g, ''))) {
          error = 'Please enter a valid phone number (10 digits)';
        }
        break;
      case 'message':
        if (value.trim().length < 10) {
          error = 'Message must be at least 10 characters';
        }
        break;
    }

    setErrors(prev => ({ ...prev, [name]: error }));
    return error === '';
  };
 

  return (
    <>
  <section
  ref={containerRef}
  className={`relative min-h-screen bg-white py-10 overflow-hidden transition-all duration-300 ${
    submitted ? 'blur-sm' : ''
  }`}
>
   <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-300 via-purple-200 to-lime-200 opacity-40 blur-3xl" />
      </div>
      <motion.div
        style={{ y }}
        className="absolute top-40 right-20 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-50"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute bottom-40 left-20 w-80 h-80 bg-gray-100 rounded-full blur-3xl opacity-50"
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20 font-serif"
            className="text-center max-w-4xl mx-auto mb-6 font-serif"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-sm font-bold tracking-[0.3em] uppercase text-gray-500 mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact Us
          </motion.p>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-black">
              Stop blending in. Start standing out.
            </h2>
            <p className="text-xl text-gray-600">
              Let's turn your business into everyone's new obsession.
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Form & Info Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Side - Interactive Map */}
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-full h-[340px] rounded-3xl overflow-hidden shadow-lg border-2 border-gray-200 bg-gray-50 flex items-center justify-center relative">
              {/* Interactive Map (Google Maps Embed) */}
              <iframe
                title="WinX Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.964624760368!2d77.6010960750819!3d12.96652728736413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167e1e9b5f3d%3A0x7a2e9e7b7c7e7b7b!2sWeWork%20Galaxy!5e0!3m2!1sen!2sin!4v1718030000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 280 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-3xl"
              />
              {/* Animated marker */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                initial={{ scale: 0.7, opacity: 0.7 }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-8 h-8 bg-gradient-to-tr from-purple-400 via-pink-400 to-lime-300 rounded-full border-4 border-white shadow-lg" />
                <div className="absolute left-1/2 top-full w-1 h-8 bg-gradient-to-b from-purple-400 to-transparent -translate-x-1/2" />
              </motion.div>
            </div>
            <div className="mt-4 text-center text-gray-600 text-sm">
              <span className="font-bold text-black">Our HQ:</span> WeWork Galaxy, Residency Road, Bengaluru
            </div>
          </motion.div>

          {/* Right Side - Smaller Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-gradient-to-br from-[#f8fafc] via-white to-[#e0e7ef] rounded-3xl p-8 shadow-2xl relative z-10">
              <h3 className="text-2xl font-black text-black mb-3 font-serif" >
                Let's make some magic happen
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                Slide into our DMs 📩<br />
                <span className="text-xs">
                  We promise we're more fun than this website makes us sound.
                </span>
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <div className="relative mb-4">
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="peer w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-black placeholder-transparent outline-none focus:border-black focus:bg-white transition-all duration-300 text-sm"
                    placeholder="Your Name"
                    whileFocus={{ scale: 1.01 }}
                  />
                  <label
                    className={`
                      absolute left-4 top-3 text-xs font-bold uppercase tracking-wide text-gray-500 pointer-events-none transition-all duration-200
                      ${formData.name || focusedField === 'name' ? 'text-xs -top-3 bg-white px-1' : ''}
                      peer-focus:text-xs peer-focus:-top-3 peer-focus:bg-white peer-focus:px-1
                    `}
                  >
                    Your Name *
                  </label>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs mt-1 font-semibold"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                {/* Email & Phone Row */}
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-black mb-2 uppercase tracking-wide">
                      Email *
                    </label>
                    <motion.input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl
                               text-black placeholder-gray-400 outline-none
                               focus:border-black focus:bg-white transition-all duration-300 text-sm"
                      placeholder="your@email.com"
                      whileFocus={{ scale: 1.01 }}
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs mt-1 font-semibold"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-black mb-2 uppercase tracking-wide">
                      Phone *
                    </label>
                    <motion.input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl
                               text-black placeholder-gray-400 outline-none
                               focus:border-black focus:bg-white transition-all duration-300 text-sm"
                      placeholder="+91 XXX XXX XXXX"
                      whileFocus={{ scale: 1.01 }}
                    />
                     {errors.phone && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs mt-1 font-semibold"
                      >
                        {errors.phone}
                      </motion.p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-black mb-2 uppercase tracking-wide">
                    Project Details *
                  </label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={3}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl
                             text-black placeholder-gray-400 outline-none resize-none
                             focus:border-black focus:bg-white transition-all duration-300 text-sm"
                    placeholder="What's your vision?"
                    whileFocus={{ scale: 1.01 }}
                  />
                   {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs mt-1 font-semibold"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                   whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-gradient-to-r from-[#181f7c] to-[#a34fdc] text-white font-bold text-base rounded-xl flex items-center justify-center gap-2  transition-all duration-300"
                >
                  <span className="relative z-10"> {loading ? 'Sending...' : 'Submit & Let’s Talk'}</span>
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-green-600 text-center font-semibold"
        >
          Thank you! We'll be in touch soon. 🚀
        </motion.div>
      )}

      <p className="text-xs text-gray-400 mt-2 text-center">
        We respect your privacy. Your info stays with us.
      </p>
    </section>
  {submitted && (
  <motion.div
    className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-md"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-white rounded-3xl p-10 max-w-md text-center shadow-2xl"
    >
      <div className="mb-4 flex justify-center">
        <FaRegPaperPlane className="text-5xl text-purple-500" />
      </div>

      <h3 className="text-4xl font-serif font-black text-black mb-2">
        Message Sent!
      </h3>

      <p className="text-gray-600 text-sm mb-4">
        We got your details. Our team will reach out faster than your Wi-Fi loads.
      </p>

      <div className="text-xs text-gray-400">
        This window will close automatically
      </div>
    </motion.div>
  </motion.div>
  )}

    </>
  );
};

export default ContactSection;