"use client"
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiSanity } from 'react-icons/si';
import { RiRobot2Fill } from 'react-icons/ri';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const skills = [
    { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "React.js", icon: SiReact, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "Sanity CMS", icon: SiSanity, color: "text-red-500" },
    { name: "Agentic AI", icon: RiRobot2Fill, color: "text-purple-500" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
      y: -50,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1
      }
    }
  };

  return (
    <section 
      id="skills" 
      ref={ref} 
      className="min-h-screen bg-black py-20 relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "30px 30px"
          }}
        />
      </div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <motion.h2 
          variants={cardVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Technical Skills
          </span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              custom={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm 
                         rounded-xl p-6 flex flex-col items-center justify-center
                         border border-white/10 hover:border-purple-500/30 transition-all"
            >
              <skill.icon className={`text-4xl md:text-5xl mb-4 ${skill.color}`} />
              <h3 className="text-white text-lg font-medium text-center">{skill.name}</h3>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-3 rounded-full"
              />
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          variants={cardVariants}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl text-white mb-6">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Forex Analysis", "Trading Algorithms", "UI/UX Design",
              "API Development", "Database Design", "Cloud Services",
              "Git & Version Control", "Responsive Design", "Performance Optimization"
            ].map((skill, index) => (
              <motion.span
                key={skill}
                variants={cardVariants}
                custom={index}
                className="px-4 py-2 bg-white/5 rounded-full text-white/80 text-sm
                         border border-white/10 hover:border-purple-500/30 transition-all"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;