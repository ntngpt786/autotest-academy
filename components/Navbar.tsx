
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <nav className="bg-indigo-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center space-x-2">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <a href="#home" className="text-xl font-bold tracking-tight">AutoTest<span className="text-indigo-200">Academy</span></a>
        </div>
        
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="#home" className="hover:text-indigo-200 transition-colors">Home</a>
          <a href="#scenarios" className="hover:text-indigo-200 transition-colors">Functional Scenarios</a>
          <a href="#locator-lab" className="hover:text-indigo-200 transition-colors">Locator Lab</a>
          
          <button 
            onClick={handleShare}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full border transition-all ${
              copied ? 'bg-emerald-500 border-emerald-400' : 'bg-white/10 border-white/20 hover:bg-white/30'
            }`}
          >
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Link Copied!</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                <span>Share App</span>
              </>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
