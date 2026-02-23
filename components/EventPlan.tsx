import { Map, Users, Cake, Gift, Camera, Info } from 'lucide-react';

export default function EventPlan() {
    const activities = [
        {
            title: 'Tham quan',
            description: 'Khám phá không gian văn hóa đặc sắc và check-in các địa điểm đẹp',
            note: 'Mang trang phục sơ mi trắng quần tối màu hoặc chân váy tối màu',
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
            note: 'Mang trang phục sang trọng',
            icon: <Cake className="w-6 h-6" />,
        },
        {
            title: 'Quà tặng may mắn',
            description: 'Vòng quay may mắn với nhiều phần quà hấp dẫn',
            icon: <Gift className="w-6 h-6" />,
        },
    ];

    return (
        <section className="section bg-[#f8f9fa]">
            <div className="container relative z-10">
                <div className="text-center mb-16 fade-in-up">
                    <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-3">Activities</p>
                    <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 mb-4">Hoạt động sự kiện</h2>
                    <div className="w-12 h-px bg-stone-300 mx-auto mb-4" />
                    <p className="text-base text-stone-500 max-w-lg mx-auto">
                        Bật mí loạt hoạt động "xịn sò" sắp diễn ra
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {activities.map((activity, index) => {
                        // Tạo hiệu ứng bất đối xứng: Thẻ đầu tiên sẽ nổi bật và chiếm 2 cột trên màn hình lớn
                        const isFeatured = index === 0;

                        return (
                            <div
                                key={index}
                                className={`group bg-white p-8 rounded-3xl border border-stone-100/80 shadow-sm hover:shadow-2xl hover:shadow-stone-200/50 hover:border-stone-200 transition-all duration-300 flex flex-col fade-in-up ${isFeatured ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                                    }`}
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <div className="flex items-start justify-between mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-stone-50 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-500 flex items-center justify-center text-stone-600">
                                        {activity.icon}
                                    </div>
                                    <div className="text-stone-200 group-hover:text-stone-100 transition-colors duration-500">
                                        <span className="text-5xl font-light opacity-30">
                                            0{index + 1}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl font-semibold text-stone-900 mb-3 group-hover:-translate-y-1 transition-transform duration-300">
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
