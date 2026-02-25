'use client';

export default function Location() {

    return (
        <section className="section relative bg-stone-50">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/backgroud_tet.png)' }} />
            <div className="container relative z-10">
                <div className="text-center mb-16 fade-in-up flex flex-col items-center">
                    <p className="text-xs tracking-[0.2em] uppercase text-white/80 font-bold mb-3 drop-shadow-sm">Location</p>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-wide drop-shadow-sm">Địa điểm</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-4 rounded-full" />
                    <p className="text-base text-white/90 max-w-lg mx-auto font-medium">
                        Thông tin chi tiết về địa điểm
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Tập trung */}
                        <div className="bg-white border border-stone-200 rounded-xl p-8 fade-in-up flex flex-col h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-9 h-9 rounded-full border border-stone-200 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-stone-900">Tập trung</h3>
                            </div>
                            <div className="space-y-4 text-sm flex-1 mb-6">
                                <div>
                                    <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">Địa điểm</p>
                                    <p className="text-stone-900 font-medium">Bãi xe 24/24</p>
                                </div>
                                <div>
                                    <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">Địa chỉ</p>
                                    <p className="text-stone-600">332 Tô Hiến Thành, Phường Hòa Hưng, TP HCM</p>
                                </div>
                            </div>
                            <div className="mt-auto">
                                <div className="h-40 w-full rounded-lg overflow-hidden border border-stone-200 relative group bg-stone-50">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        src="https://maps.google.com/maps?q=332+Tô+Hiến+Thành,+Phường+Hòa+Hưng,+TP+HCM&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                    {/* Lớp phủ chặn thao tác trên iframe ở mobile, focus thẳng vào link */}
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=332+Tô+Hiến+Thành,+Phường+Hòa+Hưng,+TP+HCM"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute inset-0 z-10 md:hidden"
                                        aria-label="Mở Google Maps"
                                    ></a>
                                </div>
                            </div>
                        </div>

                        {/* Địa điểm sự kiện */}
                        <div className="relative bg-white border border-stone-200 rounded-xl p-8 fade-in-up overflow-hidden flex flex-col h-full" style={{ animationDelay: '0.1s' }}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-9 h-9 rounded-full border border-stone-200 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-stone-900">Địa điểm</h3>
                            </div>
                            <div className="space-y-4 text-sm flex-1 mb-6">
                                <div>
                                    <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">Địa điểm</p>
                                    <p className="text-stone-900 font-medium">Khu du lịch Đại Nam</p>
                                </div>
                                <div>
                                    <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">Địa chỉ</p>
                                    <p className="text-stone-600">1765A Đại lộ Bình Dương, phường Phú An, Thành phố Hồ Chí Minh</p>
                                </div>
                            </div>
                            <div className="mt-auto">
                                <div className="h-40 w-full rounded-lg overflow-hidden border border-stone-200 relative group bg-stone-50">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        src="https://maps.google.com/maps?q=1765A+Đại+lộ+Bình+Dương,+phường+Phú+An,+Thành+phố+Hồ+Chí+Minh&t=&z=14&ie=UTF8&iwloc=&output=embed"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                    {/* Lớp phủ chặn thao tác trên iframe ở mobile, focus thẳng vào link */}
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=1765A+Đại+lộ+Bình+Dương,+phường+Phú+An,+Thành+phố+Hồ+Chí+Minh"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute inset-0 z-10 md:hidden"
                                        aria-label="Mở Google Maps"
                                    ></a>
                                </div>
                            </div>
                        </div>

                        {/* Dresscode */}
                        <div className="bg-white border border-stone-200 rounded-xl p-8 fade-in-up flex flex-col h-full" style={{ animationDelay: '0.2s' }}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-9 h-9 rounded-full border border-stone-200 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-stone-900">Dresscode</h3>
                            </div>
                            <div className="space-y-4 text-sm flex-1">
                                <div>
                                    <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">Tham quan</p>
                                    <p className="text-stone-900 font-medium leading-relaxed">Sơ mi trắng, quần hoặc chân váy tối màu <br /><span className="text-white bg-[#8b0000] px-2 py-0.5 rounded text-xs ml-1 inline-block mt-1">+ Khăn quàng đỏ</span></p>
                                </div>
                                <div className="pt-2 border-t border-stone-100">
                                    <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">Teambuilding</p>
                                    <p className="text-stone-900 font-medium leading-relaxed">Đồ thoải mái để vận động dưới nước</p>
                                </div>
                                <div className="pt-2 border-t border-stone-100">
                                    <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">Gala Dinner</p>
                                    <p className="text-stone-900 font-medium leading-relaxed">Sơ mi trắng, quần hoặc chân váy tối màu <br /><span className="text-white bg-[#8b0000] px-2 py-0.5 rounded text-xs ml-1 inline-block mt-1">+ Khăn quàng đỏ</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
