
import React, { useState } from 'react';

const RegistrationPractice: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    role: 'tester',
    skills: [] as string[],
    newsletter: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCheckboxChange = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill) 
        ? prev.skills.filter(s => s !== skill) 
        : [...prev.skills, skill]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto mt-12 p-8 bg-white rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-slate-900 mb-4" id="registration-success">Registration Complete!</h2>
        <div className="bg-slate-50 p-6 rounded-xl space-y-3">
          <p className="text-sm"><strong>Username:</strong> {formData.username}</p>
          <p className="text-sm"><strong>Email:</strong> {formData.email}</p>
          <p className="text-sm"><strong>Role:</strong> {formData.role}</p>
          <p className="text-sm"><strong>Skills:</strong> {formData.skills.join(', ') || 'None'}</p>
        </div>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 text-indigo-600 font-bold hover:underline"
        >
          Register another user
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-12">
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">User Registration Lab</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Username</label>
              <input 
                name="reg-username"
                type="text" 
                required
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                className="w-full p-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input 
                name="reg-email"
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full p-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Role</label>
            <select 
              id="role-select"
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
              className="w-full p-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="tester">QA Tester</option>
              <option value="engineer">Automation Engineer</option>
              <option value="manager">Test Manager</option>
            </select>
          </div>

          <div>
            <span className="block text-sm font-medium text-slate-700 mb-2">Primary Skills</span>
            <div className="flex flex-wrap gap-4">
              {['Selenium', 'Playwright', 'Cypress', 'API Testing'].map(skill => (
                <label key={skill} className="flex items-center gap-2 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={formData.skills.includes(skill)}
                    onChange={() => handleCheckboxChange(skill)}
                    className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                  />
                  <span className="text-sm text-slate-600 group-hover:text-slate-900">{skill}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
            <input 
              id="newsletter"
              type="checkbox" 
              checked={formData.newsletter}
              onChange={(e) => setFormData({...formData, newsletter: e.target.checked})}
              className="w-4 h-4 text-indigo-600"
            />
            <label htmlFor="newsletter" className="text-sm text-indigo-900">Subscribe to monthly Automation Tips</label>
          </div>

          <button 
            type="submit"
            className="w-full bg-slate-900 text-white font-bold py-3 rounded-lg hover:bg-slate-800 transition-colors"
          >
            Complete Registration
          </button>
        </form>

        <div className="mt-8 pt-6 border-t text-xs text-slate-400">
          <p className="font-bold mb-1">Automation Challenges:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Handle multiple checkbox selections.</li>
            <li>Select options from a dynamic <code>&lt;select&gt;</code> element.</li>
            <li>Verify successful submission by finding <code>id="registration-success"</code>.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPractice;
