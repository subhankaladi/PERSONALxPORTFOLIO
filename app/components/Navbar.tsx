'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AiOutlineHome, AiFillSketchCircle, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const offset = 80; // Adjust this value based on your navbar height
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Close mobile menu if open
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', href: '#home', icon: AiOutlineHome },
    { name: 'Skills', href: '#skills', icon: AiFillSketchCircle },
    { name: 'Projects', href: '#projects', icon: AiOutlineProject },
    { name: 'Contact', href: '#contact', icon: AiOutlineMail },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 mt-4 ${
        scrolled ? 'bg-transparent' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background Container with Animation */}
        <motion.div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[50px] 
                     bg-gradient-to-r from-gray-900/90 to-gray-800/90 
                     backdrop-blur-sm rounded-full border border-white/5
                     group transition-all duration-300"
          initial={{ width: "0%", opacity: 0, left: "0%" }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{
            boxShadow: "0 0 20px rgba(255,255,255,0.1)",
            borderColor: "rgba(255,255,255,0.2)",
          }}
        >
          {/* Animated Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
                       transition-opacity duration-300"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)"
            }}
          />
        </motion.div>

        <div className="flex items-center justify-between h-16 relative z-10">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="text-2xl font-bold text-white">
              Portfolio
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  className="relative group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href.substring(1))}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium 
                             transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                  <motion.div
                    className="absolute -top-6 left-1/3 transform -translate-x-1/2 pointer-events-none 
                             opacity-0 group-hover:opacity-100"
                    animate={{ 
                      y: [-10, 0],
                      scale: [0.5, 1]
                    }}
                    transition={{ 
                      duration: 0.3,
                      ease: "backOut"
                    }}
                  >
                    <item.icon className="text-2xl text-white filter drop-shadow-lg" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={item.href}
                onClick={(e) => handleScroll(e, item.href.substring(1))}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
