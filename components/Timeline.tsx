import { TIMELINE_EVENTS } from '@/lib/constants';

export default function Timeline() {
    const events = TIMELINE_EVENTS;

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
                        <TimelineItem
                            key={index}
                            event={event}
                            index={index}
                            isLast={index === events.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TimelineItem({ event, index, isLast }: { event: { time: string; title: string; description: string }; index: number; isLast: boolean }) {
    return (
        <div className="flex gap-6 md:gap-8 fade-in-up" style={{ animationDelay: `${index * 0.08}s` }}>
            {/* Time */}
            <div className="flex-shrink-0 w-16 text-right pt-1">
                <span className="text-sm font-semibold text-stone-900 tabular-nums">{event.time}</span>
            </div>

            {/* Timeline Line */}
            <div className="flex flex-col items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-stone-900 ring-4 ring-stone-100 flex-shrink-0 mt-1.5" />
                {!isLast && (
                    <div className="w-px flex-1 bg-stone-300 my-1" style={{ minHeight: '48px' }} />
                )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
                <h3 className="text-base font-semibold text-stone-900 mb-1">{event.title}</h3>
                <p className="text-sm text-stone-500">{event.description}</p>
            </div>
        </div>
    );
}

