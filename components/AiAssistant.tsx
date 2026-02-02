
import React, { useState, useRef, useEffect } from 'react';
import { getTestingAdvice } from '../services/geminiService';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [html, setHtml] = useState('');
  const [advice, setAdvice] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [advice]);

  const handleAsk = async () => {
    if (!query) return;
    setIsLoading(true);
    const result = await getTestingAdvice(html || 'The current page', query);
    setAdvice(result || 'No advice received.');
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-white w-96 max-h-[600px] flex flex-col rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-4">
          <div className="bg-indigo-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="font-bold">Test Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-indigo-500 p-1 rounded transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 text-sm scroll-smooth">
            {!advice && !isLoading && (
              <div className="text-slate-500 text-center py-8">
                <p>Hello! I'm your AI testing mentor. Paste a snippet of HTML or describe what you want to test.</p>
              </div>
            )}
            
            {advice && (
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 whitespace-pre-wrap prose prose-sm prose-indigo">
                    {advice}
                </div>
            )}

            {isLoading && (
              <div className="flex justify-center py-4">
                <div className="flex gap-1">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t bg-slate-50 space-y-2">
            <input 
              type="text" 
              placeholder="What do you want to test?" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full text-sm border-slate-200 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2"
              onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
            />
            <textarea 
              placeholder="Paste HTML snippet (optional)" 
              value={html}
              onChange={(e) => setHtml(e.target.value)}
              className="w-full text-xs border-slate-200 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2 h-16 resize-none"
            />
            <button 
              onClick={handleAsk}
              disabled={isLoading || !query}
              className="w-full bg-indigo-600 text-white text-sm font-bold py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-all"
            >
              Get Testing Advice
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:bg-indigo-700 transition-all hover:scale-110 active:scale-95 group"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Ask AI Mentor</span>
        </button>
      )}
    </div>
  );
};

export default AiAssistant;
