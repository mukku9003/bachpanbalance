
import React from 'react';

const RoutineBuilder: React.FC = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 py-8 md:px-10 lg:px-20 space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h1 className="text-4xl font-black mb-2">Routine Builder</h1>
          <p className="text-gray-500">Plan a perfect screen-free day for Aarav.</p>
        </div>
        <button className="bg-primary text-black font-bold px-6 py-3 rounded-xl shadow-lg hover:brightness-105 transition-all flex items-center gap-2">
          <span className="material-symbols-outlined">save</span>
          Save Routine
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <div className="bg-white dark:bg-surface-dark rounded-3xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm">
            <h3 className="font-bold text-xl mb-8 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">calendar_month</span>
              Daily Timeline
            </h3>
            
            <div className="space-y-4">
              <TimeSlot time="07:00 AM" title="Wake Up & Brush" type="routine" icon="wb_sunny" color="blue" />
              <TimeSlot time="08:30 AM" title="Outdoor Play" type="activity" icon="park" color="green" dur="60m" />
              <TimeSlot time="11:00 AM" title="Educational Clips" type="screen" icon="play_circle" color="orange" dur="20m" />
              <TimeSlot time="12:30 PM" title="Healthy Lunch" type="routine" icon="restaurant" color="blue" />
              <TimeSlot time="02:00 PM" title="Quiet Reading" type="activity" icon="menu_book" color="purple" dur="45m" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white dark:bg-surface-dark p-6 rounded-3xl border border-gray-100 dark:border-gray-800">
            <h4 className="font-bold mb-4">Activity Basket</h4>
            <p className="text-xs text-gray-400 mb-4 uppercase tracking-widest">Drag to add to timeline</p>
            <div className="space-y-3">
              <DraggableItem title="Shadow Puppets" icon="light" color="purple" />
              <DraggableItem title="LEGO Tower" icon="extension" color="orange" />
              <DraggableItem title="Finger Paint" icon="palette" color="primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimeSlot = ({ time, title, type, icon, color, dur }: any) => {
  const colorMap: any = {
    blue: 'border-blue-400 bg-blue-50 dark:bg-blue-900/10 text-blue-600',
    green: 'border-primary bg-green-50 dark:bg-green-900/10 text-primary-dark',
    orange: 'border-orange-400 bg-orange-50 dark:bg-orange-900/10 text-orange-600',
    purple: 'border-purple-400 bg-purple-50 dark:bg-purple-900/10 text-purple-600'
  };

  return (
    <div className={`flex items-center gap-4 p-4 rounded-2xl border-l-4 ${colorMap[color]} shadow-sm`}>
      <span className="text-xs font-bold text-gray-400 w-16 text-right shrink-0">{time}</span>
      <div className="flex-grow flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined">{icon}</span>
          <span className="font-bold text-text-main dark:text-white">{title}</span>
        </div>
        {dur && <span className="text-xs font-bold opacity-60">{dur}</span>}
      </div>
    </div>
  );
};

const DraggableItem = ({ title, icon, color }: any) => (
  <div className="flex items-center gap-3 p-3 bg-background-light dark:bg-gray-800 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 cursor-grab hover:border-primary transition-colors">
    <span className="material-symbols-outlined text-primary text-xl">{icon}</span>
    <span className="text-sm font-bold">{title}</span>
    <span className="material-symbols-outlined text-gray-300 ml-auto text-sm">drag_indicator</span>
  </div>
);

export default RoutineBuilder;
