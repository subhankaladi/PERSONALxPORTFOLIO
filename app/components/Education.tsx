"use client"
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaCode, FaPython, FaRobot } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs } from 'react-icons/si';
import { IconType } from 'react-icons';

interface Course {
  quarter: string;
  title: string;
  icon: IconType;
  status: "Completed" | "Ongoing";
  description: string;
}

interface EducationItem {
  title: string;
  period: string;
  description?: string;
  icon: IconType;
  color: string;
  courses?: Course[];
}

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const educationData: EducationItem[] = [
    {
      title: "Intermediate in Medical Science",
      period: "2021-2023",
      description: "Completed intermediate studies with focus on Medical Sciences.",
      icon: FaGraduationCap,
      color: "from-green-400 to-green-600"
    },
    {
      title: "GIAIC - Artificial Intelligence & Computing",
      period: "2024 - Present",
      icon: FaCode,
      courses: [
        {
          quarter: "Quarter 1",
          title: "Advanced TypeScript",
          icon: SiTypescript,
          status: "Completed",
          description: "Mastered TypeScript at an advanced level with practical implementations."
        },
        {
          quarter: "Quarter 2",
          title: "Next.js Development",
          icon: SiNextdotjs,
          status: "Completed",
          description: "Comprehensive study of Next.js framework and modern web development."
        },
        {
          quarter: "Quarter 3",
          title: "Python & Agentic AI",
          icon: FaPython,
          status: "Ongoing",
          description: "Currently focusing on Python and Agentic AI development."
        }
      ],
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "PIAIC - Artificial Intelligence Program",
      period: "2023 - Present",
      icon: FaRobot,
      courses: [
        {
          quarter: "Quarter 1",
          title: "Python Programming",
          icon: FaPython,
          status: "Completed",
          description: "Completed comprehensive Python programming fundamentals."
        },
        {
          quarter: "Quarter 2",
          title: "Agentic AI Fundamentals",
          icon: FaRobot,
          status: "Ongoing",
          description: "Learning core concepts of Agentic AI and its applications."
        },
        {
          quarter: "Quarter 3",
          title: "LangChain & Multi-Agent Systems",
          icon: FaCode,
          status: "Ongoing",
          description: "Focusing on LangChain and multi-agent system development."
        }
      ],
      color: "from-purple-400 to-purple-600"
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
    <section ref={ref} className="min-h-screen bg-black py-20 relative overflow-hidden">
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
            Educational Journey
          </span>
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {educationData.map((edu) => (
            <motion.div
              key={edu.title}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10
                       hover:border-purple-500/30 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${edu.color}`}>
                  <edu.icon className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{edu.title}</h3>
                  <p className="text-gray-400">{edu.period}</p>
                </div>
              </div>

              {edu.courses && (
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {edu.courses.map((course) => (
                    <motion.div
                      key={course.quarter}
                      variants={itemVariants}
                      className="bg-white/5 rounded-xl p-4 border border-white/10"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <course.icon className="text-xl text-purple-400" />
                        <h4 className="font-medium text-white">{course.title}</h4>
                      </div>
                      <p className="text-sm text-gray-400 mb-2">{course.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">{course.quarter}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          course.status === "Completed" 
                            ? "bg-green-500/20 text-green-400"
                            : "bg-blue-500/20 text-blue-400"
                        }`}>
                          {course.status}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Online Courses Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Additional Online Courses</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Web Development",
              "Frontend Development",
              "Backend Development",
              "UI/UX Design",
              "React.js",
              "Next.js",
              "TypeScript",
              "Python Programming"
            ].map((course) => (
              <motion.span
                key={course}
                variants={itemVariants}
                className="px-4 py-2 bg-white/5 rounded-full text-white/80
                         border border-white/10 hover:border-purple-500/30 transition-all"
              >
                {course}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;