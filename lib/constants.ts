export const TARGET_DATE = '2026-02-26T00:00:00';

export interface TimelineEvent {
    time: string;
    title: string;
    description: string;
}

export const TIMELINE_EVENTS: TimelineEvent[] = [
    { time: '08:00', title: 'Đón khách', description: 'Đón tiếp CBNV và gia đình' },
    { time: '09:00', title: 'Khai mạc', description: 'Lời chào mừng từ Ban lãnh đạo' },
    { time: '10:00', title: 'Tiệc buffet', description: 'Thưởng thức các món ăn đặc sản' },
    { time: '11:30', title: 'Trò chơi', description: 'Các hoạt động vui chơi, giải trí' },
    { time: '13:00', title: 'Trao quà', description: 'Trao lì xì và quà tặng may mắn' },
    { time: '14:30', title: 'Kết thúc', description: 'Chụp ảnh lưu niệm và tiễn khách' },
];
