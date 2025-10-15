// app/profile/page.jsx
import React from 'react'

/**
 * Profile page that mirrors the screenshot you provided.
 * Drop into app/profile/page.jsx (Next.js app router).
 *
 * Tailwind v4 should already be loaded in your project.
 */

const HEADER_BG = '#efeafd'      // pale lavender from screenshot
const VIZ_BG = '#0b1220'         // dark navy viz box
const TRACK_BG = '#eef3f7'       // pale track background for progress lines
const COMPLETE_GREEN = '#14c38e' // bright green progress bar
const PROG_DARK = '#0f1724'      // dark navy for in-progress bar
const CONTAINER_W = 'max-w-6xl'  // content width

const courses = [
  {
    id: 1,
    title: 'Unit 1: Install R',
    subtitle: 'Completed 2024-01-15',
    progress: 1,
    completed: true,
    icon: 'bars',
  },
  {
    id: 2,
    title: 'Unit 2: Introduction to R',
    subtitle: 'Completed 2024-01-22',
    progress: 1,
    completed: true,
    icon: 'wrench',
  },
  {
    id: 3,
    title: 'Unit 3: Plot Plot Plot',
    subtitle: 'In Progress',
    progress: 0.42,
    completed: false,
    icon: 'line',
  },
  {
    id: 4,
    title: 'Unit 4: Advanced Visualizations',
    subtitle: 'Locked',
    progress: 0.00,
    completed: false,
    icon: 'line',
  },
  {
    id: 5,
    title: 'Unit 5: Explorations & Insights',
    subtitle: 'Locked',
    progress: 0.00,
    completed: false,
    icon: 'line',
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Full-width header block (spans page) */}
      <div className="w-full" style={{ backgroundColor: HEADER_BG }}>
        <div className={`mx-auto ${CONTAINER_W} px-8 py-8 md:py-10`}>
          {/* Top row with titles and streak */}
          <div className="flex justify-between items-start">
            <div className="text-right text-sm text-slate-900">
              Day Streak: <span className="font-semibold">7</span>
            </div>
          </div>

          {/* main header area: avatar + username + stats + viz box */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-12 items-center gap-6">
            {/* left: avatar + username */}
            <div className="md:col-span-3 flex items-start gap-4">
              {/* Avatar svg reproducing the outlined circle with inner ring and bottom arc */}
              <div
                className="flex items-center justify-center"
                style={{ minWidth: 128, minHeight: 128 }}
                aria-hidden
              >
                <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* outer circle */}
                  <circle cx="64" cy="64" r="54" stroke="#0f1724" strokeWidth="4" fill="transparent" />
                  {/* small inner circle (head) */}
                  <circle cx="64" cy="42" r="14" stroke="#0f1724" strokeWidth="3" fill="transparent" />
                  {/* bottom semicircle (shoulder line) */}
                  <path d="M32 86C40 74 88 74 96 86" stroke="#0f1724" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>

              <div>
                <div className="text-lg font-medium tracking-tight">@username</div>
              </div>
            </div>

            {/* center stats: 3/7 unit progress, followers, following */}
            <div className="md:col-span-6 flex items-center justify-around">
              <div className="text-center">
                <div className="text-2xl font-semibold">3/7</div>
                <div className="text-sm text-slate-700 mt-1">unit progress</div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-semibold">30</div>
                <div className="text-sm text-slate-700 mt-1">followers</div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-semibold">30</div>
                <div className="text-sm text-slate-700 mt-1">following</div>
              </div>
            </div>

            {/* right: Viz of the Week box */}
            <div className="md:col-span-3 flex justify-end">
              <div
                className="w-56 h-28 rounded-sm p-4 shadow-md flex flex-col justify-center"
                style={{ backgroundColor: VIZ_BG }}
              >
                <div className="text-sm font-medium text-slate-100">Viz of the Week:</div>
                {/* kept intentionally empty to match screenshot */}
              </div>
            </div>
          </div>
        </div>

        {/* rounded bottom edge that visually matches screenshot */}
        <div className="w-full" style={{ height: 12, backgroundColor: HEADER_BG }}>
          <div className="mx-auto" style={{ maxWidth: '1440px' }}>
            {/* visual rounded bottom via radius on parent */}
          </div>
        </div>
      </div>

      {/* Course units area (white background) */}
      <section className="mx-auto max-w-6xl px-8 py-10">
        {/* Heading */}
        <div className="flex items-center gap-3 mb-6">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
            <circle cx="12" cy="12" r="10" stroke="#0f1724" strokeWidth="1.5" />
            <path d="M7 12h10" stroke="#0f1724" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <h2 className="text-lg font-semibold">Course Units</h2>
        </div>

        <div className="space-y-4">
          {courses.map((c) => (
            <div key={c.id} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-4">
                {/* icon box */}
                <div className="w-12 h-12 rounded-md flex items-center justify-center bg-white">
                  {/* choose icon by type */}
                  {c.icon === 'bars' && (
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
                      {/* small colorful bar chart to mimic screenshot's Unit 1 icon */}
                      <rect x="3" y="14" width="5" height="10" rx="1" fill="#ff7ab6" />
                      <rect x="10" y="10" width="5" height="14" rx="1" fill="#7cc7ff" />
                      <rect x="17" y="6" width="5" height="18" rx="1" fill="#ffd36b" />
                    </svg>
                  )}

                  {c.icon === 'wrench' && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M21.7 13.3l-2.4-2.4a2 2 0 0 0-2.8 0l-1.2 1.2-3.3-3.3 1.2-1.2a2 2 0 0 0 0-2.8L10.7 2.3 9.3 3.7l-1.9 1.9 4.2 4.2-4.8 4.8a5 5 0 1 0 7.1 7.1l4.8-4.8 4.2 4.2 1.4-1.4-2.8-2.8z" fill="#94a3b8"/>
                    </svg>
                  )}

                  {c.icon === 'line' && (
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M4 20h20" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M6 14l4-6 6 8 4-3" stroke="#6b7280" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>

                {/* main block */}
                <div className="flex-1">
                  <div className="text-sm md:text-base font-semibold text-slate-900">{c.title}</div>
                  <div className="text-xs text-slate-500 mt-1">{c.subtitle}</div>

                  {/* progress bar */}
                  <div className="mt-3">
                    <div className="h-3 rounded-full overflow-hidden" style={{ backgroundColor: TRACK_BG }}>
                      <div
                        style={{
                          width: `${Math.round(c.progress * 100)}%`,
                          height: '100%',
                          background: c.completed ? COMPLETE_GREEN : PROG_DARK,
                          borderRadius: 9999,
                          transition: 'width 400ms ease',
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* right check / spacer */}
                <div className="w-12 flex items-center justify-center">
                  {c.completed ? (
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white ring-1 ring-slate-200">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17l-5-5" stroke={COMPLETE_GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-8 h-8" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
