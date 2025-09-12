"use client"

import { useState, useEffect } from 'react';
import Head from 'next/head';

interface LinkItem {
  id: number;
  title: string;
  url: string;
  type: 'personal' | 'company';
}

interface NoteItem {
  id: number;
  title: string;
  description: string;
  url: string;
}

export default function LinksPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const linkItems: LinkItem[] = [
    { id: 1, title: 'GitHub', url: '#', type: 'personal' },
    { id: 2, title: 'LinkedIn', url: 'https://www.linkedin.com/in/subhankaladi/', type: 'personal' },
    { id: 3, title: 'Twitter', url: '#', type: 'personal' },
    { id: 4, title: 'Instagram', url: '#', type: 'personal' },
    { id: 5, title: 'Blog', url: '#', type: 'personal' },
    { id: 6, title: 'Codentic LinkedIN', url: 'https://www.linkedin.com/company/codentic/?viewAsMember=true', type: 'company' },
    { id: 7, title: 'Codentic Instagram', url: 'https://www.instagram.com/codentic_official/?hl=ne', type: 'company' },
    // { id: 8, title: 'Codentic Contact', url: '#', type: 'company' },
  ];

  const noteItems: NoteItem[] = [
    { id: 1, title: 'AgentRunner Class Comprehensive Notes', description: 'Complete guide to AgentRunner implementation', url: '/AgentRunner.pdf' },
    { id: 2, title: 'Code Base MSQS', description: 'OpenAI Agents SDK Code base mcqs', url: '/codebase.pdf' },
    { id: 3, title: 'Concept Base MCQS', description: 'OpenAI Agents SDK Concept Base MCQS', url: '/conceptbase.pdf' },
    // { id: 4, title: 'UI/Animation Principles', description: 'Creating engaging user interfaces', url: '#' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white ">
      <Head>
        <title>Subhan Kaladi | Links</title>
        <meta name="description" content="Subhan Kaladi's portfolio links" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700 mb-4">
            Subhan Kaladi
          </h1>
          <p className="text-xl text-gray-300">CEO of Codentic</p>
        </div>

        {/* Links Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 text-center text-red-500">My Links</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {linkItems.map((item, index) => (
              <div
                key={item.id}
                className={`p-4 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-750 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-red-900/20 border-l-4 ${item.type === 'personal' ? 'border-red-600' : 'border-purple-600'} transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <a href={item.url} className="flex items-center justify-between">
                  <span className="font-medium">{item.title}</span>
                  <span className={`text-xs px-2 py-1 rounded ${item.type === 'personal' ? 'bg-red-900/30 text-red-300' : 'bg-purple-900/30 text-purple-300'}`}>
                    {item.type === 'personal' ? 'Personal' : 'Codentic'}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Notes Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-center text-red-500">Notes & Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {noteItems.map((note, index) => (
              <div
                key={note.id}
                className={`bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-red-900/10 transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(index + 8) * 100}ms` }}
              >
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-red-400">{note.title}</h3>
                  <span className="bg-red-900/20 text-red-300 text-xs px-2 py-1 rounded">PDF</span>
                </div>
                <p className="text-gray-400 mb-4">{note.description}</p>
                <a href={note.url} className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors">
                  Download Resource
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Subhan Kaladi. All rights reserved.</p>
      </footer>
    </div>
  );
}