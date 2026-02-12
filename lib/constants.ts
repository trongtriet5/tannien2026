export const TARGET_DATE = '2026-02-26T00:00:00';

export interface TimelineEvent {
    time: string;
    title: string;
    description: string;
}

export const TIMELINE_EVENTS: TimelineEvent[] = [
    { time: '12:00', title: 'Tập trung & Khởi hành', description: 'Đón khách tại công ty, di chuyển đến  điểm đến' },
    { time: '13:30', title: 'Check-in & Thăm quan', description: 'Tham quan các địa điểm' },
    { time: '14:00 - 17:00', title: 'Teambuilding', description: 'Các trò chơi mang tính cạnh tranh cao theo nhóm (Các bạn lưu ý chuẩn bị đồ thoải mái cho phần này nhé !!!)' },
    { time: '17:00 - 18:00', title: 'Tự do vui chơi', description: 'Hoạt động tự do và chuẩn bị trang phục sang trọng cho Gala Dinner' },
    { time: '18:00', title: 'Gala Dinner', description: 'Tiệc tối sang trọng với DJ, MC và các minigame sôi động' },
    { time: '22:00', title: 'Kết thúc & Trở về', description: 'Tập trung lên xe, di chuyển về công ty' },
];
