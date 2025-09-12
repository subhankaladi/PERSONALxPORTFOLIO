// "use client"

// import { useState, useEffect } from 'react';
// import Head from 'next/head';

// interface LinkItem {
//   id: number;
//   title: string;
//   url: string;
//   type: 'personal' | 'company';
// }

// interface NoteItem {
//   id: number;
//   title: string;
//   description: string;
//   url: string;
// }

// export default function LinksPage() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const linkItems: LinkItem[] = [
//     { id: 1, title: 'GitHub', url: 'https://github.com/subhankaladi', type: 'personal' },
//     { id: 2, title: 'LinkedIn', url: 'https://www.linkedin.com/in/subhankaladi/', type: 'personal' },
//     // { id: 3, title: 'Twitter', url: '#', type: 'personal' },
//     // { id: 4, title: 'Instagram', url: '#', type: 'personal' },
//     // { id: 5, title: 'Blog', url: '#', type: 'personal' },
//     { id: 6, title: 'Codentic LinkedIN', url: 'https://www.linkedin.com/company/codentic/?viewAsMember=true', type: 'company' },
//     { id: 7, title: 'Codentic Instagram', url: 'https://www.instagram.com/codentic_official/?hl=ne', type: 'company' },
//     // { id: 8, title: 'Codentic Contact', url: '#', type: 'company' },
//   ];

//   const noteItems: NoteItem[] = [
//     { id: 1, title: 'AgentRunner Class Comprehensive Notes', description: 'Complete guide to AgentRunner implementation', url: '/AgentRunner.pdf' },
//     { id: 2, title: 'Code Base MSQS', description: 'OpenAI Agents SDK Code base mcqs', url: '/codebase.pdf' },
//     { id: 3, title: 'Concept Base MCQS', description: 'OpenAI Agents SDK Concept Base MCQS', url: '/conceptbase.pdf' },
//     // { id: 4, title: 'UI/Animation Principles', description: 'Creating engaging user interfaces', url: '#' },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-900 text-white ">
//       <Head>
//         <title>Subhan Kaladi | Links</title>
//         <meta name="description" content="Subhan Kaladi's portfolio links" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="container mx-auto px-4 py-12">
//         {/* Header Section */}
//         <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//           <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700 mb-4">
//             Subhan Kaladi
//           </h1>
//           <p className="text-xl text-gray-300">CEO of Codentic</p>
//         </div>

//         {/* Links Section */}
//         <section className="mb-20">
//           <h2 className="text-2xl font-semibold mb-8 text-center text-red-500">My Links</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
//             {linkItems.map((item, index) => (
//               <div
//                 key={item.id}
//                 className={`p-4 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-750 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-red-900/20 border-l-4 ${item.type === 'personal' ? 'border-red-600' : 'border-purple-600'} transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
//                 style={{ transitionDelay: `${index * 100}ms` }}
//               >
//                 <a href={item.url} className="flex items-center justify-between">
//                   <span className="font-medium">{item.title}</span>
//                   <span className={`text-xs px-2 py-1 rounded ${item.type === 'personal' ? 'bg-red-900/30 text-red-300' : 'bg-purple-900/30 text-purple-300'}`}>
//                     {item.type === 'personal' ? 'Personal' : 'Codentic'}
//                   </span>
//                 </a>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Notes Section */}
//         <section>
//           <h2 className="text-2xl font-semibold mb-8 text-center text-red-500">Notes & Resources</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
//             {noteItems.map((note, index) => (
//               <div
//                 key={note.id}
//                 className={`bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-red-900/10 transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
//                 style={{ transitionDelay: `${(index + 8) * 100}ms` }}
//               >
//                 <div className="mb-4 flex items-start justify-between">
//                   <h3 className="text-lg font-semibold text-red-400">{note.title}</h3>
//                   <span className="bg-red-900/20 text-red-300 text-xs px-2 py-1 rounded">PDF</span>
//                 </div>
//                 <p className="text-gray-400 mb-4">{note.description}</p>
//                 <a href={note.url} className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors">
//                   Download Resource
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
//                   </svg>
//                 </a>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="text-center py-8 text-gray-500 text-sm">
//         <p>© {new Date().getFullYear()} Subhan Kaladi. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }


"use client"

import { useState, useEffect } from 'react';
import Head from 'next/head';

interface LinkItem {
  id: number;
  title: string;
  url: string;
  type: 'personal' | 'company';
  icon: string;
}

interface NoteItem {
  id: number;
  title: string;
  description: string;
  url: string;
}

export default function LinksPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const linkItems: LinkItem[] = [
    { id: 1, title: 'GitHub', url: 'https://github.com/subhankaladi', type: 'personal', icon: '👨‍💻' },
    { id: 2, title: 'LinkedIn', url: 'https://www.linkedin.com/in/subhankaladi/', type: 'personal', icon: '💼' },
    { id: 3, title: 'Whatsapp Channel', url: 'https://whatsapp.com/channel/0029Vavb6Jy6buMQjQ0l8A45', type: 'personal', icon: '🐦' },
    // { id: 4, title: 'Instagram', url: '#', type: 'personal', icon: '📸' },
    // { id: 5, title: 'Blog', url: '#', type: 'personal', icon: '✍️' },
    { id: 6, title: 'Codentic LinkedIN', url: 'https://www.linkedin.com/company/codentic/?viewAsMember=true', type: 'company', icon: '🏢' },
    { id: 7, title: 'Codentic Instagram', url: 'https://www.instagram.com/codentic_official/?hl=ne', type: 'company', icon: '📱' },
  ];

  const noteItems: NoteItem[] = [
    { id: 1, title: 'AgentRunner Class Comprehensive Notes', description: 'Complete guide to AgentRunner implementation', url: '/AgentRunner.pdf' },
    { id: 2, title: 'Code Base MSQS', description: 'OpenAI Agents SDK Code base mcqs', url: '/codebase.pdf' },
    { id: 3, title: 'Concept Base MCQS', description: 'OpenAI Agents SDK Concept Base MCQS', url: '/conceptbase.pdf' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Subhan Kaladi | Links</title>
        <meta name="description" content="Subhan Kaladi's portfolio links" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-6">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600">SK</span>
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600 mb-4">
            Subhan Kaladi
          </h1>
          <p className="text-xl text-gray-300">CEO of Codentic</p>
        </div>

        {/* Links Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600">
            My Links
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {linkItems.map((item, index) => (
              <div
                key={item.id}
                className={`p-4 bg-gray-800 rounded-xl shadow-lg transition-all duration-300 transform ${hoveredItem === item.id ? 'scale-105 shadow-purple-500/20' : 'hover:scale-105'} border border-gray-700 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a 
                  href={item.url} 
                  className="flex items-center justify-between"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <span className="font-medium">{item.title}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${item.type === 'personal' ? 'bg-purple-900/30 text-purple-300' : 'bg-blue-900/30 text-blue-300'}`}>
                    {item.type === 'personal' ? 'Personal' : 'Codentic'}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Notes Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600">
            Notes & Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {noteItems.map((note, index) => (
              <div
                key={note.id}
                className={`bg-gray-800 rounded-xl p-6 shadow-lg transition-all duration-300 transform ${hoveredItem === note.id + 10 ? 'scale-105 shadow-blue-500/20' : 'hover:scale-105'} border border-gray-700 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(index + 8) * 100}ms` }}
                onMouseEnter={() => setHoveredItem(note.id + 10)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600">
                    {note.title}
                  </h3>
                  <span className="bg-purple-900/20 text-purple-300 text-xs px-2 py-1 rounded">PDF</span>
                </div>
                <p className="text-gray-400 mb-4">{note.description}</p>
                <a 
                  href={note.url} 
                  className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                  download
                >
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

      {/* Animated background elements */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10"
            style={{
              width: `${100 + i * 100}px`,
              height: `${100 + i * 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float${i % 3} 15s ease-in-out infinite`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float0 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(30px, 30px) rotate(180deg); }
        }
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-40px, 20px) rotate(120deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(10px, -30px) rotate(240deg); }
        }
      `}</style>
    </div>
  );
}