
import React from 'react';

interface LandingProps {
  onStart: () => void;
}

const Landing: React.FC<LandingProps> = ({ onStart }) => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-20 lg:py-28 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6 order-2 lg:order-1">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-medium text-primary-dark dark:text-primary">New: AI Milestone Tracker</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-text-light dark:text-white">
                Screen se door,<br/>
                <span className="text-primary">care ka noor.</span><br/>
                Reclaim childhood.
              </h1>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
                Track milestones, manage screen time, and discover 100+ offline activities to help your child grow emotionally and physically strong.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button 
                  onClick={onStart}
                  className="flex h-12 px-6 items-center justify-center rounded-xl bg-primary hover:bg-primary-dark transition-all text-black text-base font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40"
                >
                  Start Free Check
                </button>
                <button className="flex h-12 px-6 items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-text-light dark:text-white text-base font-bold transition-colors">
                  Explore Activities
                </button>
              </div>
              <div className="flex items-center gap-4 pt-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <img key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900" src={`https://picsum.photos/seed/${i + 10}/100/100`} alt="User" />
                  ))}
                </div>
                <p>Trusted by 10,000+ happy parents</p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-transparent blur-3xl rounded-full opacity-60"></div>
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-2xl border-4 border-white dark:border-gray-800">
                <img 
                  src="https://picsum.photos/seed/play/800/600" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                  alt="Father and child playing" 
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Daily Goal</span>
                    <span className="flex items-center text-xs font-bold text-primary">
                      <span className="material-symbols-outlined text-sm mr-1">trending_up</span> On Track
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full w-3/4"></div>
                  </div>
                  <div className="mt-2 flex justify-between text-sm font-medium">
                    <span className="text-text-light dark:text-white">Offline Playtime</span>
                    <span className="text-text-light dark:text-white">45m / 60m</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 bg-white dark:bg-gray-900/50 border-y border-[#e7f3eb] dark:border-gray-800" id="impact">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <StatCard icon="groups" label="Parents Trusted" value="10,000+" trend="+15%" color="green" />
            <StatCard icon="toys" label="Activities Logged" value="50,000+" trend="+500/wk" color="blue" />
            <StatCard icon="timer_off" label="Screen Time Reduced" value="30%" trend="-5%" color="orange" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full py-20 px-4 sm:px-6" id="features">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why BachpanBalance?</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              We help you balance digital exposure with real-world development, ensuring your child gets the best start in life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon="notifications_active" 
              title="Early Warning System" 
              description="Catch developmental delays before they become problems with our AI tracker. Get timely alerts and actionable advice."
              color="green"
            />
            <FeatureCard 
              icon="health_and_safety" 
              title="Screen Detox" 
              description="Smart tools to limit digital exposure without tantrums. Build healthy habits with gentle reminders and lock schedules."
              color="blue"
            />
            <FeatureCard 
              icon="extension" 
              title="Developmental Play" 
              description="Curated offline activities that boost brain development and motor skills. No screens required, just pure fun and learning."
              color="purple"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const StatCard = ({ icon, label, value, trend, color }: any) => {
  const colorMap: any = {
    green: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
    blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
    orange: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400'
  };

  return (
    <div className="flex flex-col p-6 rounded-2xl bg-background-light dark:bg-background-dark border border-[#d0e7d7] dark:border-gray-700 hover:border-primary/50 transition-colors group">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${colorMap[color]}`}>
          <span className="material-symbols-outlined text-3xl">{icon}</span>
        </div>
        <span className={`flex items-center text-sm font-medium ${colorMap[color]} bg-opacity-10 px-2 py-1 rounded-md`}>
          {trend}
        </span>
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{label}</p>
      <p className="text-3xl font-bold mt-1 group-hover:text-primary transition-colors">{value}</p>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, color }: any) => {
  const colorMap: any = {
    green: 'bg-green-50 text-primary dark:bg-green-900/20 dark:text-green-400',
    blue: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
    purple: 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400'
  };

  return (
    <div className="flex flex-col h-full rounded-2xl border border-[#d0e7d7] dark:border-gray-800 bg-white dark:bg-gray-900 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className={`w-14 h-14 mb-6 rounded-xl flex items-center justify-center ${colorMap[color]}`}>
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
        {description}
      </p>
      <button className="inline-flex items-center text-primary font-bold mt-6 hover:underline">
        Learn more <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
      </button>
    </div>
  );
};

export default Landing;
