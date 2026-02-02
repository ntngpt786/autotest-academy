
import React from 'react';
import { Scenario } from '../types';

const scenarios: Scenario[] = [
  { id: 'login', title: 'Login Authentication', description: 'Test valid/invalid credentials, error messages, and redirects.', difficulty: 'Beginner', category: 'Functional' },
  { id: 'registration', title: 'Dynamic Registration', description: 'Interact with various input types, checkboxes, and radio buttons.', difficulty: 'Beginner', category: 'Functional' },
  { id: 'checkout', title: 'E-commerce Checkout', description: 'Add items to cart, enter shipping details, and complete purchase.', difficulty: 'Intermediate', category: 'Functional' },
  { id: 'wait', title: 'Dynamic Content', description: 'Practice waiting for elements that load after a delay or API call.', difficulty: 'Intermediate', category: 'Wait' },
  { id: 'api', title: 'API Integration', description: 'Validate UI updates based on mocked API response data.', difficulty: 'Advanced', category: 'API' },
];

const Scenarios: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-slate-800">Functional Scenarios</h2>
        <p className="text-slate-600 mt-2">Choose a workflow to practice your end-to-end automation scripts.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scenarios.map((scenario) => (
          <div 
            key={scenario.id} 
            className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer flex flex-col"
            onClick={() => {
                if (['login', 'registration', 'checkout'].includes(scenario.id)) {
                  window.location.hash = scenario.id;
                } else {
                  alert(`The "${scenario.title}" practice page is coming in the next release! Try Login, Registration, or Checkout.`);
                }
            }}
          >
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-4">
                <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${
                  scenario.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                  scenario.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {scenario.difficulty}
                </span>
                <span className="text-xs font-medium text-slate-400">{scenario.category}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">{scenario.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{scenario.description}</p>
            </div>
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center text-indigo-600 font-semibold text-sm">
              Launch Scenario
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scenarios;
