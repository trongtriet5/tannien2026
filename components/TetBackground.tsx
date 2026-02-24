import { useEffect, useState } from 'react';

export default function TetBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Góc trên bên trái: Cành mai/đào */}
      <div className="absolute -top-10 -left-10 w-48 h-48 md:w-64 md:h-64 opacity-20 transform -scale-x-100 rotate-12">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#8b0000] fill-current">
          <path d="M50 0 C40 20, 30 40, 20 60 C10 80, 0 100, 0 100 C10 90, 20 80, 30 70 C40 60, 50 50, 60 40 C70 30, 80 20, 90 10 C100 0, 100 0, 100 0" />
          <circle cx="30" cy="40" r="5" />
          <circle cx="45" cy="25" r="4" />
          <circle cx="60" cy="50" r="6" />
          <circle cx="20" cy="65" r="4" />
        </svg>
      </div>

      {/* Góc dưới bên phải: Lồng đèn đỏ */}
      <div className="absolute bottom-10 right-10 w-32 h-32 md:w-48 md:h-48 opacity-10 animate-pulse">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#8b0000] fill-current">
          <ellipse cx="50" cy="50" rx="30" ry="40" />
          <rect x="40" y="5" width="20" height="5" />
          <rect x="40" y="90" width="20" height="5" />
          <line x1="50" y1="95" x2="50" y2="110" stroke="#8b0000" strokeWidth="2" />
        </svg>
      </div>

      {/* Pattern truyền thống lấp ló */}
      <div className="absolute inset-0 opacity-[0.03] pattern-clouds" />
    </div>
  );
}
