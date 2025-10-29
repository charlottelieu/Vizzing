'use client';
import './globals.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const navItems = [
    { href: '/course', icon: 'mingcute:book-6-line', label: 'Course' },
    { href: '/create', icon: 'mingcute:add-fill', label: 'Create' },
    { href: '/feed', icon: 'mingcute:home-6-line', label: 'Feed' },
    { href: '/profile', icon: 'mingcute:user-1-line', label: 'Profile' },
  ];

  const noNavbarPages = ['/', '/signin', '/signup'];
  const showNavbar = !noNavbarPages.includes(pathname);

  return (
    <html lang="en" className="dark">
      <body className="bg-gray-900 text-white min-h-screen">
        <main className = "min-h-screen">
          {children}
          </main>

        {/* Bottom Navbar */}
        {showNavbar && (
          <nav className="fixed bottom-0 left-0 right-0 h-16 bg-[#F5F1E9] border-t border-gray-300 flex justify-around items-center z-50">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col items-center justify-center text-black"
                >
                  <Icon
                    icon={item.icon}
                    className={`w-6 h-6 ${isActive ? 'stroke-2' : 'stroke-1'}`}
                  />
                  <span className="text-xs mt-1">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        )}
      </body>
    </html>
  );
}