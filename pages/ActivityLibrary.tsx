
import React, { useState } from 'react';
import { AppView, Activity } from '../types';

const mockActivities: Activity[] = [
  { id: '1', title: 'Sensory Rice Bin', description: 'Develop fine motor skills through pouring and scooping.', duration: '30 mins', category: 'Sensory', ageGroup: '2-4 Yrs', image: 'https://picsum.photos/seed/rice/400/300', difficulty: 'Low' },
  { id: '2', title: 'Nature Scavenger Hunt', description: 'Explore outside with a fun nature-based checklist.', duration: '60 mins', category: 'Outdoor', ageGroup: '5-7 Yrs', image: 'https://picsum.photos/seed/nature/400/300', difficulty: 'Medium' },
  { id: '3', title: 'Storytelling Circle', description: 'Boost creativity by taking turns adding to a story.', duration: '15 mins', category: 'Creative', ageGroup: 'All Ages', image: 'https://picsum.photos/seed/story/400/300', difficulty: 'Low' },
  { id: '4', title: 'Finger Painting', description: 'Messy play that sparks artistic expression.', duration: '45 mins', category: 'Creative', ageGroup: '3-5 Yrs', image: 'https://picsum.photos/seed/paint/400/300', difficulty: 'Medium' },
  { id: '5', title: 'Obstacle Course', description: 'Indoor movement fun using pillows and chairs.', duration: '20 mins', category: 'Movement', ageGroup: '3-6 Yrs', image: 'https://picsum.photos/seed/gym/400/300', difficulty: 'High' },
  { id: '6', title: 'Leaf Hunting', description: 'Find and trace different types of leaves.', duration: '45 mins', category: 'Nature', ageGroup: 'All Ages', image: 'https://picsum.photos/seed/leaf/400/300', difficulty: 'Low' },
];

const ActivityLibrary: React.FC<{ onNavigate: (v: AppView) => void }> = ({ onNavigate }) => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filtered = mockActivities.filter(a => 
    (filter === 'All' || a.category === filter) &&
    (a.title.toLowerCase().includes(search.toLowerCase()) || a.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-8 md:px-10 lg:px-20 animate-in fade-in duration-500">
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-4xl font-black mb-4">Activity Library</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-8">
          Find the perfect screen-free engagement for your child based on their age, mood, and available time.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-primary">search</span>
            <input 
              type="text" 
              placeholder="Search motor skills, art, nature..."
              className="w-full pl-12 pr-4 h-14 rounded-2xl border-none bg-white dark:bg-surface-dark shadow-sm focus:ring-2 focus:ring-primary"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select 
            className="h-14 rounded-2xl border-none bg-white dark:bg-surface-dark shadow-sm px-6 font-bold focus:ring-2 focus:ring-primary"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Creative">Creative</option>
            <option value="Outdoor">Outdoor</option>
            <option value="Sensory">Sensory</option>
            <option value="Movement">Movement</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map(activity => (
          <div key={activity.id} className="group bg-white dark:bg-surface-dark rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
            <div className="aspect-[4/3] relative overflow-hidden">
              <img src={activity.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={activity.title} />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-lg text-xs font-bold">{activity.category}</span>
                <span className="px-3 py-1 bg-primary text-black rounded-lg text-xs font-bold">{activity.ageGroup}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{activity.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-6">{activity.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-50 dark:border-gray-800">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <span className="material-symbols-outlined text-[18px]">schedule</span>
                  {activity.duration}
                </div>
                <button className="text-primary font-bold hover:underline">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityLibrary;
