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
    <section className="section relative w-full overflow-hidden bg-[#faf8f5]">
      {/* Decorative Transition Element from Top */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#8b0000] to-transparent z-20 pointer-events-none opacity-80" />

      <img
        src="/img_section_1.jpeg"
        alt="Countdown Background"
        className="absolute inset-0 w-full h-full object-contain object-top md:object-cover md:object-center pointer-events-none opacity-40 md:opacity-100"
      />

      {/* Decorative Transition Element to Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#faf8f5] to-transparent z-20 pointer-events-none" />

      <div className="container relative z-10 pt-10">
        <div className="text-center mb-14 fade-in-up flex flex-col items-center">
          <div className="inline-block bg-white/70 backdrop-blur-lg px-8 py-6 md:px-12 md:py-8 rounded-3xl border border-white/60 shadow-lg">
            <p className="text-xs tracking-[0.2em] uppercase text-[#8b0000] font-bold mb-3 drop-shadow-sm">Countdown</p>
            <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-wide bg-gradient-to-r from-[#8b0000] to-red-600 bg-clip-text text-transparent drop-shadow-sm">Refresh – Reborn – Rise</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#8b0000]/30 to-transparent mx-auto mb-4 rounded-full" />
            <p className="text-base text-stone-800 max-w-lg mx-auto font-medium">
              Đếm ngược đến sự kiện<br />
              <span className="font-semibold text-stone-900 drop-shadow-sm">Thứ Năm, 26 tháng 02 năm 2026</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto mb-16">
          <TimeUnit value={timeLeft.days} label="Ngày" />
          <TimeUnit value={timeLeft.hours} label="Giờ" />
          <TimeUnit value={timeLeft.minutes} label="Phút" />
          <TimeUnit value={timeLeft.seconds} label="Giây" />
        </div>

        {/* Quote Section */}
        <div className="max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative bg-white/80 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/50 shadow-lg hover:shadow-2xl hover:border-[#8b0000]/20 transition-all duration-700 group">
            {/* Decorative Quote Mark */}
            <div className="absolute top-6 left-6 text-6xl text-[#8b0000]/10 font-serif leading-none group-hover:text-[#8b0000]/20 group-hover:-translate-y-2 transition-transform duration-500">&quot;</div>

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
            <div className="absolute bottom-6 right-6 text-6xl text-[#8b0000]/10 font-serif leading-none group-hover:text-[#8b0000]/20 group-hover:translate-y-2 transition-transform duration-500">&quot;</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="group relative overflow-hidden text-center py-6 px-4 border border-white/60 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg hover:bg-white/95 hover:border-[#8b0000]/40 hover:shadow-2xl hover:shadow-[#8b0000]/20 hover:-translate-y-2 transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-[#8b0000]/0 to-[#8b0000]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 text-4xl md:text-5xl font-light text-stone-900 mb-2 tabular-nums group-hover:text-[#8b0000] group-hover:scale-110 transition-transform duration-500">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="relative z-10 text-xs text-stone-500 font-medium uppercase tracking-[0.15em] group-hover:text-[#8b0000]/70 transition-colors duration-500">
        {label}
      </div>
    </div>
  );
}
