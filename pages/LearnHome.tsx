
import React from 'react';

const courses = [
  { id: '1', title: 'Understanding Sensory Needs', progress: 65, duration: '12 lessons', img: 'https://picsum.photos/seed/learn1/400/250' },
  { id: '2', title: 'Healthy Digital Boundaries', progress: 0, duration: '8 lessons', img: 'https://picsum.photos/seed/learn2/400/250' },
];

const LearnHome: React.FC = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 py-8 md:px-10 lg:px-20 space-y-12 animate-in fade-in duration-500">
      <header>
        <h1 className="text-4xl font-black mb-4">Knowledge Base</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Master the art of balanced parenting with expert-led courses.</p>
      </header>

      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map(course => (
            <div key={course.id} className="group bg-white dark:bg-surface-dark rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row">
              <div className="w-full md:w-48 h-48 md:h-auto overflow-hidden">
                <img src={course.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt={course.title} />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{course.title}</h3>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{course.duration}</p>
                </div>
                <div className="mt-6">
                  <div className="flex justify-between items-center text-xs font-bold mb-2">
                    <span>PROGRESS</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{width: `${course.progress}%`}}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Expert Articles</h2>
          <button className="text-primary font-bold">View All</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1,2,3,4].map(i => (
            <div key={i} className="bg-white dark:bg-surface-dark p-4 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all cursor-pointer">
              <div className="aspect-square rounded-xl overflow-hidden mb-4">
                <img src={`https://picsum.photos/seed/art${i}/300/300`} className="w-full h-full object-cover" alt="Article" />
              </div>
              <h4 className="font-bold text-sm leading-tight mb-2">Why "Screen se Door" Philosophy Works</h4>
              <p className="text-xs text-gray-400">5 min read</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LearnHome;
