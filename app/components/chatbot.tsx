"use client"
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { BsThreeDots, BsArrowUpShort } from 'react-icons/bs';

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const predefinedQuestions = [
  "What services do you offer?",
  "Tell me about your experience",
  "How can I contact you?",
  "What are your development skills?",
];

const systemContext = `
You are Subhan, a web developer and designer. Answer all questions directly and concisely in first person ("I", "me"). Keep responses short (1-2 sentences max) unless more detail is requested.

**My Skills:**  
- Full Stack (React, Next.js, Node.js, Typescript, Tailwind CSS, Bootstrap, Material UI)  
- UI/UX Design    
- Frontend Specialist
- Agentic AI Specialist


**Experience:**  
- Built projects for clients  
- Focus on interactive apps  
- I have a passion for creating user-friendly and efficient web applications.  
- Also expert in Frontend Development  

**Contact:**  
📧 subhankaladi@gmail.com  
🔗 LinkedIn: Subhan Kaladi
Facebook: Subhan Kaladi  

**Important Instructions for Identity Questions:**  
If the user asks "Who is [name]?" or something similar:
- If the name (case-insensitive) is "subhan" or "subhan kaladi", then respond with:
  "I’m Subhan Kaladi, a full stack web developer and designer. I specialize in React, Next.js, TypeScript, and UI/UX design. I love building interactive and user-friendly apps."
- Otherwise, respond with:
  "I'm sorry, I can't provide specific details about anyone except Subhan Kaladi. You can ask me about him!"

If asked unrelated questions, say: "I focus on web development—ask me about that!"
`;


const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi! I'm Subhan's virtual assistant. How can I help you learn about my services and experience?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    // Add user message
    setMessages(prev => [...prev, {
      text: text,
      isBot: false,
      timestamp: new Date(),
    }]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: text,
          context: systemContext
        }),
      });

      const data = await response.json();
      
      setMessages(prev => [...prev, {
        text: data.response,
        isBot: true,
        timestamp: new Date(),
      }]);
    } catch {
      setMessages(prev => [...prev, {
        text: "I&apos;m having trouble connecting. Please ask about my services or experience instead.",
        isBot: true,
        timestamp: new Date(),
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="fixed bottom-4 right-4 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        >
          {isOpen ? (
            <IoClose size={28} />
          ) : (
            <>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5">
                <span className="text-white font-bold text-2xl tracking-tighter">SK</span>
                <BsArrowUpShort size={18} className="text-white opacity-80" />
              </div>
              <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full transition-opacity duration-300">
                <span className="text-white font-medium text-xs px-2 text-center leading-tight">Try<br/>Subhan&apos;s Assistant</span>
              </div>
            </>
          )}
        </button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4 z-50 w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 text-white">
              <h3 className="font-bold">Chat with Subhan&apos;s Assistant</h3>
              <p className="text-sm opacity-90">Ask about my services and experience!</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {message.isBot && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mr-2">
                      <span className="text-white text-sm">S</span>
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isBot
                        ? 'bg-white text-gray-800 shadow-sm'
                        : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mr-2">
                    <span className="text-white text-sm">S</span>
                  </div>
                  <div className="bg-white p-3 rounded-2xl shadow-sm">
                    <BsThreeDots className="animate-bounce" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            <div className="p-2 bg-gray-50 border-t border-gray-100">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {predefinedQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(q)}
                    className="whitespace-nowrap px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded-full text-gray-700"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputValue);
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about my services..."
                  className="flex-1 p-2 border text-black border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:shadow-lg transition-shadow"
                >
                  Send
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;