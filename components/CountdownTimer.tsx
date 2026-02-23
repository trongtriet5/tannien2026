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
    <section className="section bg-[#f5f5f5]">
      <div className="container">
        <div className="text-center mb-14 fade-in-up">
          <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-3">Countdown</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 mb-4">Đếm ngược đến sự kiện</h2>
          <div className="w-12 h-px bg-stone-300 mx-auto mb-4" />
          <p className="text-base text-stone-500 max-w-lg mx-auto">
            Thứ Năm, 26 tháng 2 năm 2026
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto mb-16">
          <TimeUnit value={timeLeft.days} label="Ngày" />
          <TimeUnit value={timeLeft.hours} label="Giờ" />
          <TimeUnit value={timeLeft.minutes} label="Phút" />
          <TimeUnit value={timeLeft.seconds} label="Giây" />
        </div>

        {/* Quote Section */}
        <div className="max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative bg-stone-50 rounded-2xl p-8 md:p-12 border border-stone-200">
            {/* Decorative Quote Mark */}
            <div className="absolute top-6 left-6 text-6xl text-stone-200 font-serif leading-none">"</div>

            <div className="relative z-10 space-y-4 text-stone-700 leading-relaxed">
              <p className="text-base md:text-lg">
                Có một chuyến xe đặc biệt đang chờ chúng ta phía trước.<br />
                Chuyến xe ấy sẽ không đưa chúng ta đến một vùng đất xa lạ,<br />
                mà đưa tất cả cùng du hành ngược thời gian – trở về cội nguồn của chính mình.
              </p>

              <p className="text-base md:text-lg">
                Trở về những ngày áo trắng tinh khôi,<br />
                những buổi sáng đầy nắng,<br />
                những ước mơ còn nguyên vẹn và nụ cười chưa vướng lo toan.
              </p>

              <p className="text-base md:text-lg">
                Trong hành trình lần này, chúng ta sẽ cùng nhau sống lại một phần thanh xuân ấy - giản dị, trong trẻo và đầy năng lượng.
              </p>

              <p className="text-base md:text-lg">
                Vì vậy, cả nhà hãy chuẩn bị <strong className="text-base">áo sơ mi trắng</strong> để cùng nhau bước lên chuyến tàu thời gian này nhé 🤍
              </p>

              <p className="text-base md:text-lg italic pt-4 border-t border-stone-200">
                Thanh xuân có thể đã qua, nhưng cảm xúc thì vẫn còn nguyên vẹn – và chúng ta sẽ cùng nhau viết tiếp nó.
              </p>
            </div>

            {/* Decorative Quote Mark */}
            <div className="absolute bottom-6 right-6 text-6xl text-stone-200 font-serif leading-none">"</div>
          </div>
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
