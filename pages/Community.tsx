
import React from 'react';

const posts = [
  { id: '1', user: 'Priya S.', avatar: 'https://picsum.photos/seed/user1/100/100', role: 'Super Parent', time: '2h ago', title: 'How I reduced screen time by 50% in one week', content: 'I was desperate. My son wouldn\'t eat without YouTube. We started by cutting 10 mins a day...', likes: 24, comments: 12, tags: ['MealTime', 'Toddler'] },
  { id: '2', user: 'Rahul J.', avatar: 'https://picsum.photos/seed/user2/100/100', role: 'Parent', time: '5h ago', title: 'Need advice: Tantrums when turning off TV', content: 'Every time I turn off the TV, my daughter (4yo) has a meltdown that lasts 20 minutes...', likes: 8, comments: 18, tags: ['Tantrums', 'AdviceNeeded'] },
];

const Community: React.FC = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 py-8 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Sidebar Nav */}
      <aside className="hidden lg:block lg:col-span-3 space-y-6">
        <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
          <h3 className="font-bold mb-4 uppercase text-xs tracking-widest text-gray-400">General</h3>
          <nav className="space-y-2">
            <button className="flex items-center gap-3 w-full px-4 py-2 rounded-xl bg-primary/10 text-primary font-bold"><span className="material-symbols-outlined">forum</span> Screen Struggles</button>
            <button className="flex items-center gap-3 w-full px-4 py-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-50 transition-colors"><span className="material-symbols-outlined">visibility</span> Early Signs</button>
            <button className="flex items-center gap-3 w-full px-4 py-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-50 transition-colors"><span className="material-symbols-outlined">star</span> Success Stories</button>
          </nav>
        </div>
      </aside>

      {/* Main Feed */}
      <main className="lg:col-span-6 space-y-6">
        <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
          <h2 className="text-2xl font-bold mb-2">Support Community</h2>
          <p className="text-gray-500 mb-6 text-sm">Join 1.2k members sharing their screen-free journeys.</p>
          <div className="flex gap-4">
            <button className="flex-1 bg-primary text-black font-bold py-3 rounded-xl shadow-md hover:brightness-105 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">add</span> Start Discussion
            </button>
            <button className="px-5 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 transition-all">
              <span className="material-symbols-outlined">notifications</span>
            </button>
          </div>
        </div>

        {posts.map(post => (
          <article key={post.id} className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all cursor-pointer">
            <div className="flex items-center gap-3 mb-4">
              <img src={post.avatar} className="size-10 rounded-full" alt={post.user} />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm">{post.user}</span>
                  <span className="px-2 py-0.5 bg-green-50 dark:bg-green-900/20 text-primary-dark text-[10px] font-bold rounded-full">{post.role}</span>
                </div>
                <span className="text-xs text-gray-400">{post.time}</span>
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">{post.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-4 leading-relaxed">{post.content}</p>
            <div className="flex gap-2 mb-4">
              {post.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-gray-50 dark:bg-gray-800 text-gray-500 text-[10px] font-bold rounded">#{tag}</span>
              ))}
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-50 dark:border-gray-800">
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-1.5 text-gray-500 hover:text-primary transition-colors text-sm font-medium">
                  <span className="material-symbols-outlined text-[18px]">thumb_up</span> {post.likes}
                </button>
                <button className="flex items-center gap-1.5 text-gray-500 hover:text-primary transition-colors text-sm font-medium">
                  <span className="material-symbols-outlined text-[18px]">chat_bubble</span> {post.comments}
                </button>
              </div>
              <button className="text-gray-400 hover:text-primary"><span className="material-symbols-outlined">bookmark</span></button>
            </div>
          </article>
        ))}
      </main>

      {/* Widgets */}
      <aside className="hidden xl:block xl:col-span-3 space-y-6">
        <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
          <h3 className="font-bold mb-4 flex items-center gap-2"><span className="material-symbols-outlined text-orange-500">local_fire_department</span> Trending</h3>
          <div className="space-y-4">
            <TrendingItem title="Best sensory toys for 2y olds under ₹500?" comments={45} />
            <TrendingItem title="My experience with speech therapy" comments={28} />
            <TrendingItem title="Is it autism or just speech delay?" comments={112} />
          </div>
        </div>
      </aside>
    </div>
  );
};

const TrendingItem = ({ title, comments }: any) => (
  <div className="group cursor-pointer">
    <p className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">{title}</p>
    <p className="text-xs text-gray-400 mt-1">{comments} comments</p>
  </div>
);

export default Community;
