import { Gift, Trophy, Crown, Star } from 'lucide-react';

export default function Prizes() {
    return (
        <section className="section relative w-full overflow-hidden bg-[#faf8f5]">
            {/* Decorative Transition Element from Top */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#faf8f5] to-transparent z-20 pointer-events-none" />

            {/* Background elements */}
            <img
                src="/backgroud_tet.png"
                alt="Prizes Background"
                className="absolute inset-0 w-full h-full object-contain object-top md:object-cover md:object-center pointer-events-none opacity-40 md:opacity-100"
            />

            {/* Decorative Transition Element to Bottom */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#faf8f5] to-transparent z-20 pointer-events-none" />

            <div className="container relative z-10 pt-16 pb-16">
                {/* Header */}
                <div className="text-center mb-16 fade-in-up flex flex-col items-center">
                    <p className="text-xs tracking-[0.2em] uppercase text-white/80 font-bold mb-3 drop-shadow-sm">Rewards</p>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-wide uppercase drop-shadow-sm">Cơ cấu giải thưởng</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-4 rounded-full" />
                    <p className="text-base text-white/90 max-w-lg mx-auto font-medium">
                        Nhiều phần quà bất ngờ, hấp dẫn
                    </p>
                </div>

                {/* Prize cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                    {/* LUCKY DRAW */}
                    <div className="group bg-white/85 backdrop-blur-md p-8 rounded-3xl border border-white/60 shadow-lg hover:shadow-2xl hover:shadow-[#8b0000]/15 hover:border-[#8b0000]/30 hover:bg-white/95 hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col fade-in-up"
                        style={{ animationDelay: `0.15s` }}>
                        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-sm border border-stone-100 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-[#8b0000] group-hover:to-red-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#8b0000]/30 group-hover:scale-110 transition-all duration-500 text-stone-600 mb-6 mx-auto">
                            <Gift className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-center text-stone-900 mb-2 uppercase tracking-wide group-hover:text-[#8b0000] transition-colors">Giải Lucky Draw</h3>
                        <p className="text-center font-bold text-[#8b0000] bg-[#8b0000]/10 py-1.5 px-4 rounded-full text-sm inline-block mx-auto mb-8 border border-[#8b0000]/20">Đầy tính bất ngờ</p>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 p-2 rounded-xl hover:bg-stone-50 transition-colors">
                                <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                                <div><span className="font-bold text-stone-800 block">10 Giải Đặc Biệt</span></div>
                            </li>
                            <li className="flex items-start gap-4 p-2 rounded-xl hover:bg-stone-50 transition-colors">
                                <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                                <div><span className="font-bold text-stone-800 block">10 Giải Nhất</span></div>
                            </li>
                            <li className="flex items-start gap-4 p-2 rounded-xl hover:bg-stone-50 transition-colors">
                                <Star className="w-5 h-5 text-stone-400 flex-shrink-0 mt-1" />
                                <div><span className="font-bold text-stone-800 block">10 Giải Nhì</span></div>
                            </li>
                            <li className="flex items-start gap-4 p-2 rounded-xl hover:bg-stone-50 transition-colors">
                                <Star className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                                <div><span className="font-bold text-stone-800 block">20 Giải Ba</span></div>
                            </li>
                            <li className="flex items-start gap-4 p-2 rounded-xl hover:bg-stone-50 transition-colors">
                                <Star className="w-5 h-5 text-stone-300 flex-shrink-0 mt-1" />
                                <div><span className="font-bold text-stone-800 block">20 Giải Khuyến Khích</span></div>
                            </li>
                        </ul>
                    </div>

                    {/* CHUNG CUỘC */}
                    <div className="group bg-white/85 backdrop-blur-md p-8 rounded-3xl border border-white/60 shadow-lg hover:shadow-2xl hover:shadow-yellow-500/20 hover:border-yellow-500/30 hover:bg-white/95 hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col fade-in-up relative overflow-hidden"
                        style={{ animationDelay: `0.3s` }}>
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-sm border border-stone-100 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-yellow-500 group-hover:to-yellow-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-yellow-500/30 group-hover:scale-110 transition-all duration-500 text-stone-600 mb-6 mx-auto">
                            <Trophy className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-center text-stone-900 mb-2 uppercase tracking-wide group-hover:text-yellow-600 transition-colors">Giải Chung Cuộc</h3>
                        <p className="text-center font-bold text-yellow-700 bg-yellow-100 py-1.5 px-4 rounded-full text-sm inline-block mx-auto mb-8 border border-yellow-200">Ghi nhận xứng đáng</p>

                        <ul className="space-y-5 mt-4">
                            <li className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-yellow-50/80 to-white rounded-2xl border border-yellow-100/80 shadow-sm relative group-hover:shadow-md transition-shadow">
                                <span className="absolute -top-4 -right-2 text-4xl drop-shadow-md">🥇</span>
                                <span className="font-bold text-stone-800 mb-1.5 text-lg uppercase tracking-wider">01 Giải Nhất</span>
                            </li>
                            <li className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-slate-50/80 to-white rounded-2xl border border-slate-100/80 shadow-sm relative group-hover:shadow-md transition-shadow">
                                <span className="absolute -top-4 -right-2 text-4xl drop-shadow-md">🥈</span>
                                <span className="font-bold text-stone-800 mb-1.5 text-lg uppercase tracking-wider">01 Giải Nhì</span>
                            </li>
                        </ul>
                    </div>

                    {/* CÁ NHÂN BÔNG HẬU */}
                    <div className="group bg-white/85 backdrop-blur-md p-8 rounded-3xl border border-white/60 shadow-lg hover:shadow-2xl hover:shadow-rose-500/20 hover:border-rose-300/40 hover:bg-white/95 hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col fade-in-up md:mt-12"
                        style={{ animationDelay: `0.45s` }}>
                        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-sm border border-stone-100 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-rose-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-pink-500/30 group-hover:scale-110 transition-all duration-500 text-stone-600 mb-6 mx-auto">
                            <Crown className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-center text-stone-900 mb-2 uppercase tracking-wide group-hover:text-rose-600 transition-colors">Cá Nhân <br className="hidden lg:block" />Bông Hậu</h3>
                        <p className="text-center font-bold text-rose-700 bg-rose-100 py-1.5 px-4 rounded-full text-sm inline-block mx-auto mb-8 border border-rose-200">Tỏa sáng lộng lẫy</p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-4 p-3 rounded-2xl hover:bg-rose-50/80 border border-transparent hover:border-rose-100 transition-all">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-rose-100 to-rose-50 text-rose-500 font-bold text-xl flex-shrink-0 shadow-inner">
                                    🌟
                                </div>
                                <div><span className="font-bold text-stone-800 block text-lg">02 Bông Hậu</span></div>
                            </li>
                            <li className="flex items-center gap-4 p-3 rounded-2xl hover:bg-rose-50/80 border border-transparent hover:border-rose-100 transition-all">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-pink-100 to-pink-50 text-pink-500 font-bold text-xl flex-shrink-0 shadow-inner">
                                    🌟
                                </div>
                                <div><span className="font-bold text-stone-800 block text-lg">01 Á Hậu 1</span></div>
                            </li>
                            <li className="flex items-center gap-4 p-3 rounded-2xl hover:bg-rose-50/80 border border-transparent hover:border-rose-100 transition-all">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-stone-100 to-stone-50 text-stone-500 font-bold text-xl flex-shrink-0 shadow-inner">
                                    🌟
                                </div>
                                <div><span className="font-bold text-stone-800 block text-lg">01 Á Hậu 2</span></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
