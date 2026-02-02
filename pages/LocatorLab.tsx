
import React, { useState } from 'react';

const LocatorLab: React.FC = () => {
  const [showHint, setShowHint] = useState<string | null>(null);

  const challenges = [
    { id: 'btn-1', name: 'Simple Button', hint: 'ID: #primary-action' },
    { id: 'nested-span', name: 'Deeply Nested Text', hint: 'XPath: //div[@class="outer"]//span[text()="Find Me"]' },
    { id: 'dynamic-id', name: 'Unstable ID', hint: 'CSS: button[class*="magic-btn"]' },
    { id: 'table-cell', name: 'Table Navigation', hint: 'CSS: table tr:nth-child(2) td:last-child' },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-indigo-900 text-white p-8 rounded-2xl shadow-inner">
        <h2 className="text-3xl font-bold mb-2">The Locator Lab 🧪</h2>
        <p className="text-indigo-200 opacity-90 max-w-2xl">
          Designed to be tricky. These elements use nested structures, dynamic classes, and hidden attributes to test your selection skills.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Challenge Section */}
        <section className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 space-y-12">
            <div className="space-y-4">
                <h3 className="text-lg font-bold border-b pb-2">1. The ID Challenge</h3>
                <button 
                  id="primary-action"
                  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                >
                  Standard ID Button
                </button>
                <div className="text-xs text-slate-400 bg-slate-50 p-2 rounded">Target this using <code>#primary-action</code></div>
            </div>

            <div className="space-y-4">
                <h3 className="text-lg font-bold border-b pb-2">2. Deep Nesting</h3>
                <div className="outer p-4 bg-slate-50 border rounded">
                    <div className="middle p-4 bg-white border rounded">
                        <div className="inner p-4 bg-slate-100 border rounded flex justify-center">
                            <span data-testid="nested-target" className="font-bold text-pink-600">Find Me Deep Inside</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-lg font-bold border-b pb-2">3. The Table Trap</h3>
                <table className="min-w-full divide-y divide-slate-200 border">
                    <thead>
                        <tr className="bg-slate-50">
                            <th className="px-4 py-2 text-left text-xs font-medium text-slate-500 uppercase">Product</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-slate-500 uppercase">Price</th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-slate-500 uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200">
                        <tr>
                            <td className="px-4 py-2 text-sm text-slate-900">Automation Kit</td>
                            <td className="px-4 py-2 text-sm text-slate-500">$99.00</td>
                            <td className="px-4 py-2 text-sm">
                                <button className="text-indigo-600 hover:text-indigo-900 font-medium">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 text-sm text-slate-900">Selenium Pro</td>
                            <td className="px-4 py-2 text-sm text-slate-500">$149.00</td>
                            <td className="px-4 py-2 text-sm">
                                <button className="text-indigo-600 hover:text-indigo-900 font-medium">Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="space-y-4">
                <h3 className="text-lg font-bold border-b pb-2">4. Dynamic Classes</h3>
                <button 
                  className={`magic-btn-${Math.floor(Math.random() * 1000)} bg-emerald-500 text-white px-4 py-2 rounded shadow transition-all`}
                >
                  Unstable ID Button
                </button>
                <p className="text-xs text-slate-400 italic">This button's ID/class changes on every refresh.</p>
            </div>
        </section>

        {/* Instructions/Help Section */}
        <aside className="space-y-6">
            <div className="bg-slate-800 text-slate-100 p-6 rounded-xl shadow-lg sticky top-24">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1a1 1 0 112 0v1a1 1 0 11-2 0zM13.464 15.05a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 14a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" /></svg>
                    Practice Goals
                </h3>
                <ul className="space-y-4 text-sm">
                    <li className="flex gap-3">
                        <span className="bg-indigo-500 w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center text-[10px]">1</span>
                        <span>Identify the <b>Standard ID</b> button using the unique <code>id</code> attribute.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="bg-indigo-500 w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center text-[10px]">2</span>
                        <span>Locate the <b>Deeply Nested</b> text using <code>data-testid</code> or a hierarchical CSS selector.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="bg-indigo-500 w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center text-[10px]">3</span>
                        <span>Find the "Edit" button for the second row in the table using <code>nth-child</code>.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="bg-indigo-500 w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center text-[10px]">4</span>
                        <span>Target the <b>Dynamic Button</b> using a partial class selector (e.g., <code>[class*='magic-btn']</code>).</span>
                    </li>
                </ul>
                
                <div className="mt-8 pt-6 border-t border-slate-700">
                    <h4 className="font-bold text-indigo-400 mb-2">Need a Hint?</h4>
                    <div className="grid grid-cols-2 gap-2">
                        {challenges.map(c => (
                            <button 
                                key={c.id}
                                onClick={() => setShowHint(showHint === c.id ? null : c.id)}
                                className="text-xs bg-slate-700 hover:bg-slate-600 px-3 py-2 rounded transition-colors text-left"
                            >
                                {c.name}
                            </button>
                        ))}
                    </div>
                    {showHint && (
                        <div className="mt-4 p-3 bg-indigo-900/50 border border-indigo-500 rounded text-xs animate-pulse">
                            <strong>Hint:</strong> {challenges.find(c => c.id === showHint)?.hint}
                        </div>
                    )}
                </div>
            </div>
        </aside>
      </div>
    </div>
  );
};

export default LocatorLab;
