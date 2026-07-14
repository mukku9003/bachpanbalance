
import React from 'react';
import { AppView } from '../types';

interface HeaderProps {
  currentView: AppView;
  navigateTo: (view: AppView) => void;
  isLoggedIn: boolean;
}

const Header: React.FC<HeaderProps> = ({ currentView, navigateTo, isLoggedIn }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e7f3eb] dark:border-gray-800 bg-white/95 dark:bg-background-dark/95 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-4 max-w-[1280px] mx-auto">
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => navigateTo(AppView.LANDING)}
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 text-primary">
            <span className="material-symbols-outlined">child_care</span>
          </div>
          <h2 className="text-lg font-bold tracking-tight text-text-light dark:text-white">BachpanBalance</h2>
        </div>

        {isLoggedIn && (
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: 'Dashboard', view: AppView.DASHBOARD },
              { label: 'Activities', view: AppView.ACTIVITIES },
              { label: 'Routines', view: AppView.ROUTINE },
              { label: 'Community', view: AppView.COMMUNITY },
              { label: 'Learn', view: AppView.LEARN },
            ].map((item) => (
              <button
                key={item.view}
                onClick={() => navigateTo(item.view)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  currentView === item.view ? 'text-primary font-bold' : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}

        {!isLoggedIn && currentView === AppView.LANDING && (
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
            <a href="#impact" className="text-sm font-medium hover:text-primary transition-colors">Impact</a>
            <a href="#resources" className="text-sm font-medium hover:text-primary transition-colors">Resources</a>
          </nav>
        )}

        <div className="flex items-center gap-4">
          {!isLoggedIn ? (
            <button 
              onClick={() => navigateTo(AppView.SCREENING)}
              className="flex h-10 px-5 items-center justify-center rounded-xl bg-primary hover:bg-primary-dark transition-colors text-black text-sm font-bold shadow-sm shadow-primary/20"
            >
              Start Free Check
            </button>
          ) : (
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-500 hover:text-primary dark:text-gray-400">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
                <img src="https://picsum.photos/seed/parent/100/100" alt="User" />
              </div>
            </div>
          )}
          <button className="md:hidden p-2 text-text-light dark:text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
