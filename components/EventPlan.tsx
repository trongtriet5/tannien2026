import { Map, Users, Cake, Gift, Camera, Info } from 'lucide-react';

export default function EventPlan() {
    const activities = [
        {
            title: 'Tham quan',
            description: 'Khám phá không gian văn hóa đặc sắc và check-in các địa điểm đẹp',
            note: 'Mang trang phục sơ mi trắng quần tối màu hoặc chân váy tối màu + khăn quàng đỏ',
            icon: <Map className="w-6 h-6" />,
        },
        {
            title: 'Teambuilding',
            description: 'Các hoạt động gắn kết tập thể vui nhộn và ý nghĩa',
            note: 'Mang trang phục thoải mái để vận động mạnh',
            icon: <Users className="w-6 h-6" />,
        },
        {
            title: 'Chụp ảnh lưu niệm',
            description: 'Ghi lại những khoảnh khắc đáng nhớ cùng đồng nghiệp',
            icon: <Camera className="w-6 h-6" />,
        },
        {
            title: 'Gala Dinner',
            description: 'Tiệc tối sang trọng với ẩm thực phong phú',
            note: 'Mang trang phục sơ mi trắng quần tối màu hoặc chân váy tối màu + khăn quàng đỏ',
            icon: <Cake className="w-6 h-6" />,
        },
        {
            title: 'Quà tặng may mắn',
            description: 'Vòng quay may mắn với nhiều phần quà hấp dẫn',
            icon: <Gift className="w-6 h-6" />,
        },
    ];

    return (
        <section className="section relative w-full overflow-hidden bg-[#faf8f5]">
            {/* Decorative Transition Element from Top */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#faf8f5] to-transparent z-20 pointer-events-none" />

            <img
                src="/img_section_1.jpeg"
                alt="Event Plan Background"
                className="absolute inset-0 w-full h-full object-contain object-top md:object-cover md:object-center pointer-events-none opacity-40 md:opacity-100"
            />

            {/* Decorative Transition Element to Bottom */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#faf8f5] to-transparent z-20 pointer-events-none" />

            <div className="container relative z-10 pt-10">
                <div className="text-center mb-16 fade-in-up flex flex-col items-center">
                    <div className="inline-block bg-white/70 backdrop-blur-lg px-8 py-6 md:px-12 md:py-8 rounded-3xl border border-white/60 shadow-lg">
                        <p className="text-xs tracking-[0.2em] uppercase text-[#8b0000] font-bold mb-3 drop-shadow-sm">Activities</p>
                        <h2 className="text-3xl md:text-5xl font-black text-stone-900 mb-4 tracking-wide uppercase drop-shadow-sm">Hoạt động sự kiện</h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#8b0000]/30 to-transparent mx-auto mb-4 rounded-full" />
                        <p className="text-base text-stone-800 max-w-lg mx-auto font-medium">
                            Bật mí loạt hoạt động &quot;xịn sò&quot; sắp diễn ra
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {activities.map((activity, index) => {
                        // Tạo hiệu ứng bất đối xứng: Thẻ đầu tiên sẽ nổi bật và chiếm 2 cột trên màn hình lớn
                        const isFeatured = index === 0;

                        return (
                            <div
                                key={index}
                                className={`group bg-white/85 backdrop-blur-md p-8 rounded-3xl border border-white/60 shadow-lg hover:shadow-2xl hover:shadow-[#8b0000]/15 hover:border-[#8b0000]/30 hover:bg-white/95 hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col fade-in-up ${isFeatured ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                                    }`}
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <div className="flex items-start justify-between mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-stone-100 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-[#8b0000] group-hover:to-red-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#8b0000]/30 group-hover:scale-110 transition-all duration-500 flex items-center justify-center text-stone-600">
                                        {activity.icon}
                                    </div>
                                    <div className="text-stone-200/60 group-hover:text-[#8b0000]/20 transition-colors duration-500">
                                        <span className="text-5xl font-bold opacity-30">
                                            0{index + 1}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex-1 mt-2">
                                    <h3 className="text-xl md:text-2xl font-semibold text-stone-900 mb-3 group-hover:text-[#8b0000] transition-colors duration-300">
                                        {activity.title}
                                    </h3>
                                    <p className="text-stone-600 leading-relaxed mb-6 group-hover:-translate-y-1 transition-transform duration-300 delay-75">
                                        {activity.description}
                                    </p>
                                </div>

                                {activity.note && (
                                    <div className="mt-auto pt-5 border-t border-stone-100">
                                        <div className="flex items-start gap-2.5 text-sm text-stone-500 bg-stone-50/50 p-3 rounded-xl">
                                            <Info className="w-4 h-4 mt-0.5 text-stone-400 flex-shrink-0" />
                                            <span className="italic leading-snug">{activity.note}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
