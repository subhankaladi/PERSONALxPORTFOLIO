"use client"
import React, { useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import {  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiSanity, SiPython } from 'react-icons/si';
import { FaRobot } from 'react-icons/fa';

const Skills = () => {
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
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50
      }
    }
  };

  const skills = [
    {
      category: "Frontend Development",
      items: [
        // { name: "HTML5", icon: SiHtml5, level: 95, color: "hover:text-orange-500" },
        // { name: "CSS3", icon: SiCss3, level: 90, color: "hover:text-blue-400" },
        { name: "JavaScript", icon: SiJavascript, level: 85, color: "hover:text-yellow-400" },
        { name: "TypeScript", icon: SiTypescript, level: 80, color: "hover:text-blue-500" },
        { name: "React.js", icon: SiReact, level: 85, color: "hover:text-blue-400" },
        { name: "Next.js", icon: SiNextdotjs, level: 90, color: "hover:text-white" }
      ]
    },
    {
      category: "Backend,Data Management & AI Development",
      items: [
        { name: "Node.js", icon: SiNodedotjs, level: 85, color: "hover:text-green-500" },
        { name: "Sanity CMS", icon: SiSanity, level: 80, color: "hover:text-pink-500" },
        { name: "Agentic AI", icon: FaRobot, level: 75, color: "hover:text-purple-400" },
        { name: "Python", icon: SiPython, level: 80, color: "hover:text-yellow-400" },
        // { name: "MongoDB", icon: SiMongodb, level: 75, color: "hover:text-green-400" },
        // { name: "Git", icon: SiGit, level: 90, color: "hover:text-orange-500" }
      ]
    }
  ];

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center py-20 overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#ffffff05_12%,transparent_12.5%,transparent_87%,#ffffff05_87.5%,#ffffff05),linear-gradient(150deg,#ffffff05_12%,transparent_12.5%,transparent_87%,#ffffff05_87.5%,#ffffff05),linear-gradient(30deg,#ffffff05_12%,transparent_12.5%,transparent_87%,#ffffff05_87.5%,#ffffff05),linear-gradient(150deg,#ffffff05_12%,transparent_12.5%,transparent_87%,#ffffff05_87.5%,#ffffff05),linear-gradient(60deg,#ffffff08_25%,transparent_25.5%,transparent_75%,#ffffff08_75%,#ffffff08)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-white/10"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${10 + Math.random() * 10}s linear infinite`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Technical Skills
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skills.map((category) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-white text-center mb-8">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="group relative bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 border border-white/10 hover:border-purple-500/30"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                        <skill.icon className={`text-2xl text-white/70 transition-colors duration-300 ${skill.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <span className="text-white font-medium">{skill.name}</span>
                          <span className="text-white/70">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;