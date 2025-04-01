"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaLinkedinIn,FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
// import { ContactMessage } from '@/types';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _type: 'contactMessage',
          createdAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) throw new Error('Failed to submit');

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const socialLinks = [
    { name: 'Facebook', icon: FaFacebookF, link: 'https://www.facebook.com/subhanallahkaladi', color: 'hover:bg-blue-600' },
    { name: 'Instagram', icon: FaInstagram, link: 'https://instagram.com/subhan_kaladi', color: 'hover:bg-pink-600' },
    { name: 'Github', icon: FaGithub, link: "https://github.com/subhankaladi", color: 'hover:bg-gray-600' },
    { name: 'LinkedIn', icon: FaLinkedinIn, link: 'https://www.linkedin.com/in/subhan-kaladi-6242bb31b/', color: 'hover:bg-blue-500' },
    { name: 'Twitter', icon: FaTwitter, link: 'https://x.com/subhankaladi15', color: 'hover:bg-blue-400' },
    { name: 'YouTube', icon: FaYoutube, link: 'https://www.youtube.com/@subhankaladi', color: 'hover:bg-red-600' },
    // { name: 'Telegram', icon: FaTelegram, link: 'https://t.me/', color: 'hover:bg-blue-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section 
      id="contact" 
      className="min-h-screen bg-black py-20 relative overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Let's Connect
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-gray-300 text-center max-w-2xl mx-auto mb-12 text-lg"
        >
          Feel free to reach out for collaborations, opportunities, or just to say hello!
        </motion.p>

        {/* Email Section */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-xl mx-auto
                     border border-white/10 hover:border-purple-500/30 transition-all"
        >
          <div className="flex items-center justify-center gap-4">
            <MdEmail className="text-3xl text-purple-400" />
            <a 
              href="mailto:subhankaladi@gmail.com"
              className="text-white text-lg hover:text-purple-400 transition-colors"
            >
              subhankaladi@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center gap-3 p-4 rounded-xl
                         bg-white/5 backdrop-blur-sm border border-white/10
                         hover:border-purple-500/30 transition-all ${social.color}`}
            >
              <social.icon className="text-2xl" />
              <span className="text-white font-medium">{social.name}</span>
            </motion.a>
          ))}
        </div>

        {/* Updated Contact Form */}
        <motion.form
          variants={itemVariants}
          onSubmit={handleSubmit}
          className="mt-16 max-w-xl mx-auto"
        >
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 
                         focus:border-purple-500/50 outline-none text-white"
                required
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 
                         focus:border-purple-500/50 outline-none text-white"
                required
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 
                         focus:border-purple-500/50 outline-none text-white resize-none"
                required
              />
            </motion.div>
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600
                       text-white font-medium hover:shadow-lg hover:shadow-purple-500/20 
                       transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {submitStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-500 text-center mt-4"
              >
                Message sent successfully!
              </motion.p>
            )}

            {submitStatus === 'error' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-center mt-4"
              >
                Failed to send message. Please try again.
              </motion.p>
            )}
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
