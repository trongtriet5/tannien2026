export default function Timeline() {
    const events = [
        { time: '08:00', title: 'Đón khách', description: 'Đón tiếp CBNV và gia đình' },
        { time: '09:00', title: 'Khai mạc', description: 'Lời chào mừng từ Ban lãnh đạo' },
        { time: '10:00', title: 'Tiệc buffet', description: 'Thưởng thức các món ăn đặc sản' },
        { time: '11:30', title: 'Trò chơi', description: 'Các hoạt động vui chơi, giải trí' },
        { time: '13:00', title: 'Trao quà', description: 'Trao lì xì và quà tặng may mắn' },
        { time: '14:30', title: 'Kết thúc', description: 'Chụp ảnh lưu niệm và tiễn khách' },
    ];

    return (
        <section className="section bg-stone-50">
            <div className="container">
                <div className="text-center mb-16 fade-in-up">
                    <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-3">Schedule</p>
                    <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 mb-4">Chương trình sự kiện</h2>
                    <div className="w-12 h-px bg-stone-300 mx-auto mb-4" />
                    <p className="text-base text-stone-500 max-w-lg mx-auto">
                        Lịch trình chi tiết các hoạt động trong ngày
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    {events.map((event, index) => (
                        <div key={index} className="flex gap-6 md:gap-8 fade-in-up" style={{ animationDelay: `${index * 0.08}s` }}>
                            {/* Time */}
                            <div className="flex-shrink-0 w-16 text-right pt-1">
                                <span className="text-sm font-semibold text-stone-900 tabular-nums">{event.time}</span>
                            </div>

                            {/* Timeline Line */}
                            <div className="flex flex-col items-center">
                                <div className="w-2.5 h-2.5 rounded-full bg-stone-900 ring-4 ring-stone-100 flex-shrink-0 mt-1.5" />
                                {index < events.length - 1 && (
                                    <div className="w-px flex-1 bg-stone-300 my-1" style={{ minHeight: '48px' }} />
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 pb-8">
                                <h3 className="text-base font-semibold text-stone-900 mb-1">{event.title}</h3>
                                <p className="text-sm text-stone-500">{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
