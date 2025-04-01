"use client"
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        stiffness: 100,
        damping: 10
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
      className="relative h-[100vh] w-full flex flex-col items-center justify-center overflow-hidden pb-0 mb-[-10vh]"
      style={{ y }}
      initial="hidden"
      animate={mainControls}
      variants={containerVariants}
    >
      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50" />
      </motion.div>
      <motion.div 
        className="absolute top-20 left-20 w-40 h-40 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 blur-xl opacity-30"
        animate={{
          y: [0, 40, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 blur-xl opacity-30"
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div className="z-10 text-center px-4">
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 md:mb-6"
          variants={itemVariants}
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Subhan Kaladi</span>
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
    }, isDeleting ? 50 : 100);
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