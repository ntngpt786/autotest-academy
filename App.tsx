
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Scenarios from './pages/Scenarios';
import LocatorLab from './pages/LocatorLab';
import CheckoutPractice from './pages/CheckoutPractice';
import LoginPractice from './pages/LoginPractice';
import RegistrationPractice from './pages/RegistrationPractice';
import AiAssistant from './components/AiAssistant';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'scenarios': return <Scenarios />;
      case 'locator-lab': return <LocatorLab />;
      case 'checkout': return <CheckoutPractice />;
      case 'login': return <LoginPractice />;
      case 'registration': return <RegistrationPractice />;
      default: return <Home onStart={() => window.location.hash = 'scenarios'} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
        {renderPage()}
      </main>
      <AiAssistant />
      <footer className="bg-slate-900 text-slate-400 py-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} AutoTest Academy. Professional QA Sandbox.</p>
      </footer>
    </div>
  );
};

export default App;
