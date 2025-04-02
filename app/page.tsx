import Contact from "./components/Contact";
import Education from "./components/Education";
import HeroSection from "./components/HeroSection";
import Project from "./components/Project";
import Skills from "./components/Skills";
import SubHero from "./components/SubHero";
import Chatbot from "./components/chatbot";

export default function Home() {
  return (
    <div className="relative">
      {/* Animated Timeline Line */}
      <div className="fixed left-8 top-0 h-full w-[2px] pointer-events-none z-40 hidden md:block">
        <div className="h-full w-full bg-white/10" />
        <div 
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-500 to-blue-500 origin-top"
          style={{
            height: "var(--scroll-height, 0%)",
            transition: "height 0.1s ease-out"
          }}
        />
        <div
          className="absolute w-4 h-4 bg-white rounded-full left-1/2 -translate-x-1/2"
          style={{
            top: "var(--scroll-height, 0%)",
            transition: "top 0.1s ease-out",
            boxShadow: "0 0 10px rgba(255,255,255,0.5)"
          }}
        >
          <div className="absolute inset-0 rounded-full animate-ping bg-white/50" />
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <HeroSection/>
        <SubHero/>
        <Chatbot />
        <Skills/>
        <Contact/>
        <Education/>
        <Project/>
      </div>

      {/* Script for scroll animation */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('scroll', function() {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            document.documentElement.style.setProperty('--scroll-height', scrollPercent + '%');
          });
        `
      }} />
    </div>
  );
}
