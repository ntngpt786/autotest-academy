
import React, { useState } from 'react';

const LoginPractice: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Automation Tip: Students can test 'admin' / 'password123'
    setTimeout(() => {
      setLoading(false);
      if (username === 'admin' && password === 'password123') {
        setSuccess(true);
      } else {
        setError('Invalid username or password. Please try again.');
      }
    }, 1000);
  };

  if (success) {
    return (
      <div className="max-w-md mx-auto mt-12 p-8 bg-white rounded-2xl shadow-xl text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2" id="welcome-message">Welcome back, Admin!</h2>
        <p className="text-slate-500 mb-6">Login successful. You can now access the dashboard.</p>
        <button 
          onClick={() => setSuccess(false)}
          className="bg-slate-100 text-slate-600 px-6 py-2 rounded-lg hover:bg-slate-200 font-semibold"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-12">
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Login Practice</h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm" id="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Username</label>
            <input 
              type="text" 
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Enter 'admin'"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input 
              type="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Enter 'password123'"
              required
            />
          </div>
          <button 
            type="submit"
            id="login-button"
            disabled={loading}
            className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition-colors flex justify-center items-center"
          >
            {loading ? 'Authenticating...' : 'Login'}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t text-xs text-slate-400">
          <p className="font-bold mb-1">QA Hints:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Success credentials: <code>admin</code> / <code>password123</code></li>
            <li>Failure triggers an alert with <code>id="error-message"</code></li>
            <li>Success triggers a welcome with <code>id="welcome-message"</code></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoginPractice;
