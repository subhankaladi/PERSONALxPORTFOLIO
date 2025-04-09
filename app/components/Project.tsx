"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiPython } from 'react-icons/si';
import { IconType } from 'react-icons';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  type: "project" | "repository";
  icon: IconType;
}

const Project = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects: Project[] = [
    {
      title: "BlogSite",
      description: "A modern blog platform built with Next.js and TypeScript, featuring a clean UI and smooth animations.",
      image: "/blogsite.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubLink: "https://github.com/subhankaladi/blogsite-with-sanity/tree/main/next-sanity-blog",
      liveLink: "https://blogsite-with-sanity.vercel.app/",
      type: "project",
      icon: FaCode
    },
    {
      title: "NikeJordee E-commerce",
      description: "Full-stack e-commerce platform with modern UI, shopping cart, and payment integration.",
      image: "/nikejordee.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity"],
      githubLink: "https://github.com/subhankaladi/Giaic-Hackathon-3/tree/main/day-7-complete/NikeJordee",
      liveLink: "https://nikeejordee.vercel.app/",
      type: "project",
      icon: FaServer
    },
    {
      title: "PyQuiz",
      description: "Interactive Python quiz application with real-time scoring and progress tracking.",
      image: "/pyquiz.png",
      technologies: ["Python", "Next.js", "TypeScript"],
      githubLink: "https://github.com/subhankaladi",
      liveLink: "https://pyquizmaster.vercel.app/",
      type: "project",
      icon: FaDatabase
    },
    {
      title: "GIAIC-Q2",
      description: "Next.js and TypeScript projects from GIAIC Quarter 2, showcasing advanced web development skills.",
      image: "/giaic-q2.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubLink: "https://github.com/subhankaladi/GIAIC-Q2",
      type: "repository",
      icon: SiNextdotjs
    },
    {
      title: "NikeJordee Repository",
      description: "Complete source code for the NikeJordee e-commerce platform with detailed documentation.",
      image: "/nikejordee-repo.png",
      technologies: ["Next.js", "TypeScript", "Sanity"],
      githubLink: "https://github.com/subhankaladi/Giaic-Hackathon-3/tree/main/day-7-complete/NikeJordee",
      type: "repository",
      icon: SiTypescript
    },
    {
      title: "GIAIC-Q3-PythonxAgenticAI",
      description: "Python and Agentic AI projects from GIAIC Quarter 3, demonstrating AI development expertise.",
      image: "/giaic-q3.png",
      technologies: ["Python", "AI", "LangChain"],
      githubLink: "https://github.com/subhankaladi/GIAIC-Q3_Python-AgenticAI",
      type: "repository",
      icon: SiPython
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
        bounce: 0.4
      }
    }
  };

  return (
    <section 
      id="projects" 
      ref={ref} 
      className="min-h-screen bg-black py-20 relative overflow-hidden"
    >
      {/* Interactive background */}
      <div className="absolute inset-0">
        {/* Base grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        {/* Interactive light effect that follows mouse */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl pointer-events-none transition-opacity duration-300"
          style={{
            left: `${mousePosition.x - 250}px`,
            top: `${mousePosition.y - 250}px`,
            opacity: isInView ? 1 : 0
          }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl -top-48 -left-48"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-pink-500/20 to-orange-500/20 blur-3xl -bottom-48 -right-48"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Interactive grid lines */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent top-1/3"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent top-2/3"
          animate={{
            x: ["100%", "-100%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Interactive floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0.5 + Math.random() * 1.5
            }}
            animate={{
              y: [null, Math.random() * -100],
              x: [null, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Interactive connection lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"
            style={{
              width: `${100 + Math.random() * 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Projects & Repositories
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden
                       border border-white/10 hover:border-purple-500/30 transition-all"
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 10px 30px -10px rgba(147, 51, 234, 0.3)"
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="text-6xl text-white/20" />
                  </div>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <project.icon className="text-xl text-purple-400" />
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-white/5 rounded-full text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/80 hover:text-purple-400 transition-colors"
                  >
                    <FaGithub className="text-xl" />
                    <span>GitHub</span>
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/80 hover:text-purple-400 transition-colors"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Project;