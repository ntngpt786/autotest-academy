
import React from 'react';

interface HomeProps {
  onStart: () => void;
}

const Home: React.FC<HomeProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-12 py-12">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
          Master Modern <span className="text-indigo-600">Automation Testing</span>
        </h1>
        <p className="text-xl text-slate-600">
          The ultimate sandbox for learning Selenium, Playwright, and Cypress. 
          Real scenarios, complex locators, and AI-powered guidance.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <button 
            onClick={onStart}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-xl transition-all hover:scale-105 active:scale-95"
          >
            Start Practicing
          </button>
          <a 
            href="#locator-lab"
            className="bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-lg font-bold text-lg shadow-md transition-all"
          >
            Explore Locator Lab
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 w-full">
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Functional Tests</h3>
          <p className="text-slate-500 text-sm">Practice end-to-end flows like logins, multi-step forms, and checkouts.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-indigo-500">
          <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Locator Challenges</h3>
          <p className="text-slate-500 text-sm">Face complex CSS selectors, nested XPaths, and dynamic IDs in our Lab.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-emerald-500">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <h3 className="text-xl font-bold mb-2">AI Mentorship</h3>
          <p className="text-slate-500 text-sm">Stuck? Ask our Gemini-powered assistant for the best locators and test code.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
