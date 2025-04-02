"use client"
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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
  const isInView = useInView(ref, { once: false, amount: 0.2 });

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
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 opacity-10"
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
        animate={isInView ? "visible" : "hidden"}
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