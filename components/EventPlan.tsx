import { Map, Users, Cake, Gift, Camera, Coins } from 'lucide-react';

export default function EventPlan() {
    const activities = [
        {
            title: 'Tham quan',
            description: 'Khám phá không gian văn hóa đặc sắc và check-in các địa điểm đẹp',
            icon: <Map className="w-6 h-6" />,
        },
        {
            title: 'Teambuilding',
            description: 'Các hoạt động gắn kết tập thể vui nhộn và ý nghĩa',
            icon: <Users className="w-6 h-6" />,
        },
        {
            title: 'Chụp ảnh lưu niệm',
            description: 'Ghi lại những khoảnh khắc đáng nhớ cùng đồng nghiệp',
            icon: <Camera className="w-6 h-6" />,
        },
        {
            title: 'Gala Dinner',
            description: 'Tiệc tối sang trọng với ẩm thực phong phú (Trang phục sang trọng)',
            icon: <Cake className="w-6 h-6" />,
        },
        {
            title: 'Quà tặng may mắn',
            description: 'Vòng quay may mắn với nhiều phần quà hấp dẫn',
            icon: <Gift className="w-6 h-6" />,
        },
        {
            title: 'Lì xì',
            description: 'Nhận lộc may mắn đầu năm ',
            icon: <Coins className="w-6 h-6" />,
        },
    ];

    return (
        <section className="section bg-white">
            <div className="container">
                <div className="text-center mb-16 fade-in-up">
                    <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-3">Activities</p>
                    <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 mb-4">Hoạt động sự kiện</h2>
                    <div className="w-12 h-px bg-stone-300 mx-auto mb-4" />
                    <p className="text-base text-stone-500 max-w-lg mx-auto">
                        Bật mí loạt hoạt động "xịn sò" sắp diễn ra
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 max-w-5xl mx-auto border border-stone-200 rounded-xl overflow-hidden">
                    {activities.map((activity, index) => (
                        <div key={index} className="bg-white p-8 hover:bg-stone-50 transition-colors duration-300">
                            <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 mb-5">
                                {activity.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-stone-900 mb-2">{activity.title}</h3>
                            <p className="text-sm text-stone-600 leading-relaxed">{activity.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
