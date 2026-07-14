
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { AppView } from '../types';

const data = [
  { name: 'Mon', usage: 1.2 },
  { name: 'Tue', usage: 2.5 },
  { name: 'Wed', usage: 1.5 },
  { name: 'Thu', usage: 1.8 },
  { name: 'Fri', usage: 3.2 },
  { name: 'Sat', usage: 2.0 },
  { name: 'Sun', usage: 2.2 },
];

const milestones = [
  { id: '1', title: 'Motor Skills Foundation', status: 'achieved', age: '2-3 Yrs' },
  { id: '2', title: 'Social Interaction & Language', status: 'in_progress', age: 'Current' },
  { id: '3', title: 'Cognitive Problem Solving', status: 'locked', age: '4 Yrs' },
];

interface DashboardProps {
  onNavigate: (view: AppView) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 py-8 md:px-10 lg:px-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black tracking-tight">Child Overview</h1>
          <p className="text-text-muted dark:text-primary font-medium">Welcome back, Priya</p>
        </div>
        <button className="flex items-center gap-2 rounded-xl h-10 px-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-bold shadow-sm hover:bg-gray-50 transition-all">
          <span className="material-symbols-outlined text-[20px]">print</span>
          Generate Report
        </button>
      </div>

      {/* Profile Card */}
      <div className="flex flex-col md:flex-row gap-6 p-6 bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 mb-8">
        <div className="flex-shrink-0 flex justify-center md:justify-start">
          <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden border-4 border-[#e7f3eb] dark:border-gray-700 shadow-inner">
            <img src="https://picsum.photos/seed/child1/400/400" className="w-full h-full object-cover" alt="Child" />
          </div>
        </div>
        <div className="flex flex-col flex-grow justify-center gap-4 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-1">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">Aarav Sharma</h2>
              <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-300">
                <span className="material-symbols-outlined mr-1 !text-sm">check_circle</span>
                On Track
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">3 Years, 2 Months</p>
            <p className="text-primary font-medium mt-1">Current Stage: Preschooler Exploration</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <button 
              onClick={() => onNavigate(AppView.SCREENING)}
              className="flex items-center justify-center rounded-lg h-10 px-5 bg-primary text-black text-sm font-bold shadow-md hover:brightness-105 transition-all"
            >
              Start AI Screening
            </button>
            <button 
              onClick={() => onNavigate(AppView.ACTIVITIES)}
              className="flex items-center justify-center rounded-lg h-10 px-5 bg-[#e7f3eb] dark:bg-gray-800 text-black dark:text-white text-sm font-bold hover:brightness-105 transition-all"
            >
              Explore Activities
            </button>
          </div>
        </div>
      </div>

      {/* Stats and Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          {/* Weekly Chart */}
          <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg">Weekly Usage (Hours)</h3>
              <div className="flex gap-2">
                <span className="size-3 rounded-full bg-primary"></span>
                <span className="text-xs text-gray-500">Usage vs. Goal</span>
              </div>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                  <Bar dataKey="usage" radius={[4, 4, 0, 0]}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.usage > 2 ? '#f87171' : '#19e65e'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Milestones */}
          <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-lg">Milestone Journey</h3>
              <button className="text-primary text-sm font-bold">Full Roadmap</button>
            </div>
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <div key={m.id} className={`flex gap-4 ${m.status === 'locked' ? 'opacity-50' : ''}`}>
                  <div className="flex flex-col items-center">
                    <div className={`size-8 rounded-full flex items-center justify-center border-2 ${
                      m.status === 'achieved' ? 'bg-primary border-primary text-black' : 
                      m.status === 'in_progress' ? 'border-primary text-primary' : 'border-gray-300 text-gray-400'
                    }`}>
                      <span className="material-symbols-outlined text-[18px]">
                        {m.status === 'achieved' ? 'check' : m.status === 'in_progress' ? 'play_arrow' : 'lock'}
                      </span>
                    </div>
                    {i < milestones.length - 1 && <div className="w-0.5 flex-grow bg-gray-100 dark:bg-gray-800 my-2"></div>}
                  </div>
                  <div className="pb-4">
                    <p className="text-xs font-bold text-text-muted">{m.age}</p>
                    <h4 className="font-bold">{m.title}</h4>
                    {m.status === 'in_progress' && (
                      <div className="mt-2 w-full max-w-xs h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div className="bg-primary h-full w-2/3"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 rounded-2xl border border-primary/20">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-primary">lightbulb</span>
              <h4 className="font-bold text-sm uppercase tracking-wider">Today's Tip</h4>
            </div>
            <p className="text-sm font-medium leading-relaxed">
              "Engagement over consumption. 15 minutes of parallel block building creates 3x more neural connections than passive video watching."
            </p>
          </div>

          <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <h4 className="font-bold mb-4">Quick Activities</h4>
            <div className="space-y-4">
              <QuickAction icon="brush" title="Messy Finger Paint" time="15 min" />
              <QuickAction icon="park" title="Nature Walk" time="30 min" />
              <QuickAction icon="extension" title="Puzzler Corner" time="10 min" />
            </div>
            <button 
              onClick={() => onNavigate(AppView.ACTIVITIES)}
              className="w-full mt-6 py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-black transition-all"
            >
              All Activities
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuickAction = ({ icon, title, time }: any) => (
  <div className="flex items-center gap-4 group cursor-pointer">
    <div className="size-10 rounded-xl bg-background-light dark:bg-gray-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
      <span className="material-symbols-outlined">{icon}</span>
    </div>
    <div>
      <p className="text-sm font-bold">{title}</p>
      <p className="text-xs text-gray-500">{time}</p>
    </div>
  </div>
);

export default Dashboard;
