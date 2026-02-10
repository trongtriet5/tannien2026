export default function EventPlan() {
    const activities = [
        {
            title: 'Tiệc Tân Niên',
            description: 'Buffet cao cấp với các món ăn truyền thống và hiện đại',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
            ),
        },
        {
            title: 'Trò Chơi Dân Gian',
            description: 'Các trò chơi truyền thống: ô ăn quan, đánh cờ, bịt mắt bắt dê',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            title: 'Văn Nghệ',
            description: 'Chương trình biểu diễn văn nghệ và mini game',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
            ),
        },
        {
            title: 'Quà Tặng May Mắn',
            description: 'Lì xì đầu năm và các phần quà giá trị',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
            ),
        },
        {
            title: 'Chụp Ảnh Lưu Niệm',
            description: 'Góc chụp ảnh trang trí đặc biệt với phông nền Tết',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                </svg>
            ),
        },
        {
            title: 'Teambuilding',
            description: 'Các hoạt động gắn kết tập thể và gia đình',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
            ),
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
                        Những hoạt động đặc sắc trong chương trình
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 max-w-5xl mx-auto border border-stone-200 rounded-xl overflow-hidden">
                    {activities.map((activity, index) => (
                        <div key={index} className="bg-white p-8 hover:bg-stone-50 transition-colors duration-300">
                            <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 mb-5">
                                {activity.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-stone-900 mb-2">{activity.title}</h3>
                            <p className="text-sm text-stone-500 leading-relaxed">{activity.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
