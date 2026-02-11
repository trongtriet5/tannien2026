'use client';

import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Đếm ngược', href: '#countdown' },
  { label: 'Lịch trình', href: '#schedule' },
  { label: 'Hoạt động', href: '#activities' },
  { label: 'Địa điểm', href: '#venue' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 bg-white/80 backdrop-blur-xl border border-stone-200/60 rounded-full px-2 py-1.5 shadow-lg shadow-stone-900/5">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 whitespace-nowrap ${activeSection === item.href.slice(1)
                ? 'bg-stone-900 text-white'
                : 'text-stone-500 hover:text-stone-900 hover:bg-stone-100'
              }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
