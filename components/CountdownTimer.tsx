'use client';

import { useCountdown } from '@/lib/hooks/useCountdown';
import { TARGET_DATE } from '@/lib/constants';
import { useEffect, useState } from 'react';

export default function CountdownTimer() {
  const timeLeft = useCountdown(TARGET_DATE);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-14 fade-in-up">
          <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-3">Countdown</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 mb-4">Đếm ngược đến sự kiện</h2>
          <div className="w-12 h-px bg-stone-300 mx-auto mb-4" />
          <p className="text-base text-stone-500 max-w-lg mx-auto">
            Thứ Năm, 26 tháng 2 năm 2026
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto">
          <TimeUnit value={timeLeft.days} label="Ngày" />
          <TimeUnit value={timeLeft.hours} label="Giờ" />
          <TimeUnit value={timeLeft.minutes} label="Phút" />
          <TimeUnit value={timeLeft.seconds} label="Giây" />
        </div>
      </div>
    </section>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center py-6 px-4 border border-stone-200 rounded-lg">
      <div className="text-4xl md:text-5xl font-light text-stone-900 mb-1 tabular-nums">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-xs text-stone-400 font-medium uppercase tracking-[0.15em]">
        {label}
      </div>
    </div>
  );
}
