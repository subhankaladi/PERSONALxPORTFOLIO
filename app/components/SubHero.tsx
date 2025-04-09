"use client"
import React, { useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

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
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

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

  return (
    <motion.section 
      ref={ref}
      className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden py-20"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Modern dot grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Gradient lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500/50 to-transparent top-1/4 animate-[move-right_5s_ease-in-out_infinite]" />
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent top-2/4 animate-[move-left_7s_ease-in-out_infinite]" />
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent top-3/4 animate-[move-right_6s_ease-in-out_infinite]" />
      </div>

      {/* Content container with glass effect */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12"
          variants={itemVariants}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
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
              icon: "💻",
              gradient: "from-pink-500 to-rose-500"
            },
            { 
              title: "Full Stack Development", 
              description: "Building scalable full-stack applications with expertise in both frontend and backend technologies. Specialized in forex analysis algorithms and trading systems.", 
              icon: "🚀",
              gradient: "from-purple-500 to-indigo-500"
            },
            { 
              title: "AI & Automation", 
              description: "Developing intelligent systems with Agentic AI, creating automated solutions, and implementing advanced algorithms for forex trading analysis.", 
              icon: "🤖",
              gradient: "from-blue-500 to-cyan-500"
            }
          ].map((service, index) => (
            <motion.div 
              key={index}
              className="group relative bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/25 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Gradient border on hover */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16"
          variants={itemVariants}
        >
          <button className="px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
            <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>
              View My Projects
            </a>
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SubHero;