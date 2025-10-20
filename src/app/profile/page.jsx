'use client';
import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { app } from 'src/app/firebase/config';
import { useRouter } from 'next/navigation';


const HEADER_BG = '#efeafd';
const VIZ_BG = '#0b1220';
const TRACK_BG = '#eef3f7';
const COMPLETE_GREEN = '#14c38e';
const PROG_DARK = '#0f1724';
const CONTAINER_W = 'max-w-6xl';


const courses = [
  { id: 1, title: 'Unit 1: Install R', subtitle: 'Completed 2024-01-15', progress: 1, completed: true, icon: 'line' },
  { id: 2, title: 'Unit 2: Introduction to R', subtitle: 'Completed 2024-01-22', progress: 1, completed: true, icon: 'line' },
  { id: 3, title: 'Unit 3: Plot Plot Plot', subtitle: 'In Progress', progress: 0.42, completed: false, icon: 'line' },
  { id: 4, title: 'Unit 4: Advanced Visualizations', subtitle: 'Locked', progress: 0.0, completed: false, icon: 'line' },
  { id: 5, title: 'Unit 5: Final Project', subtitle: 'Locked', progress: 0.0, completed: false, icon: 'line' },
  { id: 6, title: 'Unit 6: World of Github', subtitle: 'Locked', progress: 0.0, completed: false, icon: 'line' },
];

const auth = getAuth(app);
const db = getFirestore(app);

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('courses'); // 'courses' | 'inbox' | 'posts'
  const [posts, setPosts] = useState([]);
  const router = useRouter();  
  // Listen to Firestore posts for the current user
  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;

    const postsRef = collection(db, 'users', user.uid, 'posts');
    const q = query(postsRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPosts(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-900" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Header */}
      <div className="w-full" style={{ backgroundColor: HEADER_BG }}>
        <div className={`mx-auto ${CONTAINER_W} px-8 py-8 md:py-10`}>
          <div className="flex justify-end text-sm text-slate-900">Day Streak: <span className="font-semibold">7</span></div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-12 items-center gap-6">
            {/* Avatar + username */}
            <div className="md:col-span-3 flex items-start gap-4">
              <div className="flex items-center justify-center" style={{ minWidth: 128, minHeight: 128 }}>
                <svg width="128" height="128" viewBox="0 0 128 128" fill="none">
                  <circle cx="64" cy="64" r="54" stroke="#0f1724" strokeWidth="4" fill="transparent" />
                  <circle cx="64" cy="42" r="14" stroke="#0f1724" strokeWidth="3" fill="transparent" />
                  <path d="M32 86C40 74 88 74 96 86" stroke="#0f1724" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-medium tracking-tight">@username</div>
              </div>
            </div>

            {/* Stats */}
            <div className="md:col-span-6 flex items-center justify-around">
              <div className="text-center"><div className="text-2xl font-semibold">3/7</div><div className="text-sm text-slate-700 mt-1">unit progress</div></div>
              <div className="text-center"><div className="text-2xl font-semibold">30</div><div className="text-sm text-slate-700 mt-1">followers</div></div>
              <div className="text-center"><div className="text-2xl font-semibold">30</div><div className="text-sm text-slate-700 mt-1">following</div></div>
            </div>

            {/* Viz box */}
            <div className="md:col-span-3 flex justify-end">
              <div className="w-56 h-28 rounded-sm p-4 shadow-md flex flex-col justify-center" style={{ backgroundColor: VIZ_BG }}>
                <div className="text-sm font-medium text-slate-100">Viz of the Week:</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <section className="mx-auto max-w-6xl px-8 py-10">
        <div className="flex items-center gap-6 mb-6 border-b border-gray-200 pb-3">
          {[
            { key: 'courses', label: 'Course Units' },
            { key: 'inbox', label: 'Inbox' },
            { key: 'posts', label: 'Posts' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`text-lg font-semibold transition-colors ${
                activeTab === tab.key
                  ? 'text-purple-600 border-b-2 border-purple-600 pb-1'
                  : 'text-slate-700 hover:text-purple-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tabs content */}
        {activeTab === 'courses' && (
          <div className="space-y-4">
            {courses.map((c) => (
              <div key={c.id} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-md flex items-center justify-center bg-white">
                    {/* icon rendering skipped for brevity */}
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 20h20" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round"/><path d="M6 14l4-6 6 8 4-3" stroke="#6b7280" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm md:text-base font-semibold text-slate-900">{c.title}</div>
                    <div className="text-xs text-slate-500 mt-1">{c.subtitle}</div>
                    <div className="mt-3">
                      <div className="h-3 rounded-full overflow-hidden" style={{ backgroundColor: TRACK_BG }}>
                        <div style={{
                          width: `${Math.round(c.progress * 100)}%`,
                          height: '100%',
                          background: c.completed ? COMPLETE_GREEN : PROG_DARK,
                          borderRadius: 9999,
                          transition: 'width 400ms ease',
                        }}/>
                      </div>
                    </div>
                  </div>
                  <div className="w-12 flex items-center justify-center">
                    {c.completed ? (
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white ring-1 ring-slate-200">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17l-5-5" stroke={COMPLETE_GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    ) : <div className="w-8 h-8"/>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'inbox' && (
          <div className="flex justify-center items-center h-48 text-slate-500 italic">No notifications</div>
        )}

        {activeTab === 'posts' && (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {posts.length === 0 && (
      <p className="col-span-full text-center text-gray-500 italic">
        No posts yet
      </p>
    )}
    {posts.map((post) => (
      <div
        key={post.id}
        className="border rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition"
        onClick={() => router.push(`/profile/details/${post.id}`)}
      >
        <img
          src={post.imageUrl}
          alt={post.caption || "Post image"}
          className="w-full h-48 object-cover"
        />
        {post.caption && <p className="p-2 text-sm">{post.caption}</p>}
      </div>
    ))}
  </div>
)}

      </section>
    </main>
  );
}
