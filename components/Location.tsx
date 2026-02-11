'use client';

import { useEffect, useState } from 'react';
import { TARGET_DATE } from '@/lib/constants';

export default function Location() {
    const [revealVenue, setRevealVenue] = useState(false);

    useEffect(() => {
        const eventDate = new Date(TARGET_DATE);
        const now = new Date();
        const diffDays = (eventDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
        setRevealVenue(diffDays <= 3);
    }, []);

    return (
        <section className="section relative bg-stone-50">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/backgroud_tet.png)' }} />
            <div className="container relative z-10">
                <div className="text-center mb-16 fade-in-up">
                    <p className="text-xs tracking-[0.2em] uppercase text-white/60 mb-3">Venue</p>
                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Thông tin sự kiện</h2>
                    <div className="w-12 h-px bg-white/30 mx-auto mb-4" />
                    <p className="text-base text-white/80 max-w-lg mx-auto">
                        Thông tin chi tiết về địa điểm và quy định
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Tập trung */}
                        <div className="bg-white border border-stone-200 rounded-xl p-8 fade-in-up">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-9 h-9 rounded-full border border-stone-200 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-stone-900">Tập trung</h3>
                            </div>
                            <div className="space-y-4 text-sm">
                                <div>
                                    <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">Địa điểm</p>
                                    <p className="text-stone-900 font-medium">Công ty Thịnh Thế Vinh Hoa</p>
                                </div>
                                <div>
                                    <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">Địa chỉ</p>
                                    <p className="text-stone-600">37 Huỳnh Tịnh Của, Phường Xuân Hòa, Thành phố Hồ Chí Minh</p>
                                </div>
                            </div>
                        </div>

                        {/* Địa điểm sự kiện - blur cho đến <= 3 ngày trước sự kiện */}
                        <div className="relative bg-white border border-stone-200 rounded-xl p-8 fade-in-up overflow-hidden" style={{ animationDelay: '0.1s' }}>
                            <div className={revealVenue ? '' : 'blur-md select-none pointer-events-none'}>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-9 h-9 rounded-full border border-stone-200 flex items-center justify-center">
                                        <svg className="w-4 h-4 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-stone-900">Địa điểm</h3>
                                </div>
                                <div className="space-y-4 text-sm">
                                    <div>
                                        <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">Tên địa điểm</p>
                                        <p className="text-stone-900 font-medium">Khu du lịch Đại Nam</p>
                                    </div>
                                </div>
                            </div>
                            {!revealVenue && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <svg className="w-5 h-5 text-stone-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                        </svg>
                                        <p className="text-sm font-medium text-stone-500">Sẽ công bố sau</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Dresscode */}
                        <div className="bg-white border border-stone-200 rounded-xl p-8 fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-9 h-9 rounded-full border border-stone-200 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-stone-900">Dresscode</h3>
                            </div>
                            <div className="space-y-4 text-sm">
                                <div>
                                    <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">Áo</p>
                                    <p className="text-stone-900 font-medium">Sơ mi trắng</p>
                                </div>
                                <div>
                                    <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">Quần</p>
                                    <p className="text-stone-600">Tự do</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
