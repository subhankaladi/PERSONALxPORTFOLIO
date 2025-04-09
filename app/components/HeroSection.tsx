"use client"
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
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
        stiffness: 50
      }
    }
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const offset = 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.section 
      id="home"
      ref={ref}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black"
      initial="hidden"
      animate={mainControls}
      variants={containerVariants}
    >
      {/* Modern grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/90 to-black/70" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-screen filter blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-screen filter blur-[128px] animate-pulse" />

      <div className="z-10 text-center px-4">
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 md:mb-6"
          variants={itemVariants}
        >
          Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Subhan Kaladi</span>
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          <span className="inline-block">
            <TypewriterEffect 
              strings={[
                "Full Stack Developer ",
                "UI/UX Designer ",
                "Tech Enthusiast ",
                "Problem Solver ",
                "AI Agent Developer "
              ]}
            />
          </span>
        </motion.p>
        <motion.div 
          className="flex flex-wrap gap-3 sm:gap-4 justify-center"
          variants={itemVariants}
        >
          <button className="px-5 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
            <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>
              View My Work
            </a>
          </button>
          <button className="px-5 py-2 sm:px-6 sm:py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-all">
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>
              Contact Me
            </a>
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Optimized TypewriterEffect
const TypewriterEffect = ({ strings }: { strings: string[] }) => {
  const [currentStringIndex, setCurrentStringIndex] = React.useState(0);
  const [currentText, setCurrentText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = strings[currentStringIndex];
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentStringIndex((currentStringIndex + 1) % strings.length);
      }
    }, isDeleting ? 100 : 150); // Slowed down typing speed
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentStringIndex, strings]);
  
  return (
    <span className="relative">
      {currentText}
      <span className="absolute -right-2 w-1 h-8 bg-white inline-block animate-pulse" />
    </span>
  );
};

export default HeroSection;