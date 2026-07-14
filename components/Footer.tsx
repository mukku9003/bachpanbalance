
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-20 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined">child_care</span>
              </div>
              <h2 className="text-lg font-bold">BachpanBalance</h2>
            </div>
            <p className="text-gray-500 leading-relaxed text-sm">
              Empowering parents to reclaim childhood from digital screens through science-backed methods and real-world connection.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">AI Tracker</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Guidebooks</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Activities</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Community</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-primary transition-colors">Support Groups</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Expert Q&A</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Success Stories</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-xs">© 2024 BachpanBalance. "Screen se door, care ka noor."</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">share</span></a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">thumb_up</span></a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">mail</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
