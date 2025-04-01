"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/subhankaladi", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/subhan-kaladi-6242bb31b/", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://x.com/subhankaladi15", label: "Twitter" },
    { icon: FaInstagram, href: "https://instagram.com/subhan_kaladi", label: "Instagram" },
    { icon: FaYoutube, href: "https://www.youtube.com/@subhankaladi", label: "YouTube" },
    // { icon: FaTelegram, href: "https://t.me/yourusername", label: "Telegram" },
    { icon: MdEmail, href: "mailto:subhankaladi@gmail.com", label: "Email" }
  ];

  // Add state for email and submission status
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Add form submission handler
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically make an API call to handle the subscription
      setStatus('success');
      setEmail('');
      // Reset success message after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, purple 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, blue 0%, transparent 50%)',
            'radial-gradient(circle at 0% 0%, purple 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
              Subhan Kaladi
            </h3>
            <p className="text-gray-400">
              Full Stack Developer & AI Enthusiast
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <social.icon className="text-2xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Stay Updated</h4>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 
                         text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500
                         text-white font-medium hover:opacity-90 transition-opacity"
              >
                Subscribe
              </motion.button>
              
              {/* Success Message */}
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-green-400 text-sm mt-2"
                >
                  Thank you for subscribing! 🎉
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400"
        >
          <p>© {currentYear} Subhan Kaladi. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;