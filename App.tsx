
import React, { useState } from 'react';
import { AppView } from './types';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import ActivityLibrary from './pages/ActivityLibrary';
import Community from './pages/Community';
import LearnHome from './pages/LearnHome';
import Screening from './pages/Screening';
import RoutineBuilder from './pages/RoutineBuilder';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.LANDING);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigateTo = (view: AppView) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigateTo(AppView.DASHBOARD);
  };

  const renderView = () => {
    switch (currentView) {
      case AppView.LANDING:
        return <Landing onStart={handleLogin} />;
      case AppView.DASHBOARD:
        return <Dashboard onNavigate={navigateTo} />;
      case AppView.ACTIVITIES:
        return <ActivityLibrary onNavigate={navigateTo} />;
      case AppView.COMMUNITY:
        return <Community />;
      case AppView.LEARN:
        return <LearnHome />;
      case AppView.SCREENING:
        return <Screening onComplete={() => navigateTo(AppView.DASHBOARD)} />;
      case AppView.ROUTINE:
        return <RoutineBuilder />;
      default:
        return <Landing onStart={handleLogin} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark transition-colors duration-200">
      <Header currentView={currentView} navigateTo={navigateTo} isLoggedIn={isLoggedIn} />
      <main className="flex-grow">
        {renderView()}
      </main>
      {currentView === AppView.LANDING && <Footer />}
    </div>
  );
};

export default App;
