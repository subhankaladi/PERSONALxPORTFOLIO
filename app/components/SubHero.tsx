"use client"
import React, { useRef } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';

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

const SubHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const controls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.5]);

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
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
    hidden: { y: 50, opacity: 0 },
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

  return (
    
    
    <motion.section 
      ref={ref}
      className="relative min-h-[100vh] w-full bg-black flex flex-col items-center justify-center overflow-hidden mt-[-10vh] pt-0"
      style={{ opacity }}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.div 
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: "radial-gradient(circle at 70% 70%, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div 
        className="z-10 text-center px-4 max-w-4xl mx-auto w-full"
        style={{ y }}
      >
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8"
          variants={itemVariants}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-600">
            What I Do
          </span>
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
        >
          {[
            { 
              title: "Frontend Development", 
              description: "Expert in React, Next.js, TypeScript, and modern UI frameworks. Creating type-safe, responsive and interactive web applications with cutting-edge technologies.", 
              icon: "💻" 
            },
            { 
              title: "Full Stack Development", 
              description: "Building scalable full-stack applications with expertise in both frontend and backend technologies. Specialized in forex analysis algorithms and trading systems.", 
              icon: "🚀" 
            },
            { 
              title: "AI & Automation", 
              description: "Developing intelligent systems with Agentic AI, creating automated solutions, and implementing advanced algorithms for forex trading analysis.", 
              icon: "🤖" 
            }
          ].map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white/5 backdrop-blur-sm p-5 md:p-6 rounded-xl border border-white/10 hover:border-pink-500/30 transition-all"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">{service.icon}</div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm md:text-base">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="mt-12 md:mt-16"
          variants={itemVariants}
        >
          <button className="px-5 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-pink-500/30 transition-all">
            <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>
              View My Projects
            </a>
          </button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default SubHero;