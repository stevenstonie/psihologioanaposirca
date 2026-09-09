import Calendar from 'react-calendar';
import './availability_calendar.scss';
import { useState } from "react";
import { queryForCalendar } from '../../utils/react_query_hooks';
import type { BusyRange } from '../../api/calendar_service';
import { LoaderBreathing } from '../loader_breathing/loader_breathing';


interface AvailabilityCalendarProps {
    onSlotSelect: (timeString: string) => void;
}

export default function AvailabilityCalendar({ onSlotSelect }: Readonly<AvailabilityCalendarProps>) {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const { data: availableRanges, isLoading } = queryForCalendar();

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);

    const calculateFreeSlots = (date: Date, busyRanges: BusyRange[]) => {
        const dayStart = new Date(date).setHours(0, 0, 0, 0);
        const dayEnd = new Date(date).setHours(23, 59, 59, 999);

        const daysBusySlots = busyRanges
            .filter(range => {
                const rangeStart = new Date(range.start).getTime();
                const rangeEnd = new Date(range.end).getTime();
                return rangeStart < dayEnd && rangeEnd > dayStart;
            })
            .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());

        const freeSlots = [];
        let currentMarker = Math.max(dayStart, Date.now());

        for (const busy of daysBusySlots) {
            const busyStart = new Date(busy.start).getTime();
            const busyEnd = new Date(busy.end).getTime();

            if (currentMarker < busyStart) {
                freeSlots.push({ start: currentMarker, end: busyStart });
            }

            currentMarker = Math.max(currentMarker, busyEnd);
        }

        if (currentMarker < dayEnd) {
            freeSlots.push({ start: currentMarker, end: dayEnd });
        }

        return freeSlots.filter(slot => (slot.end - slot.start) >= 15 * 60 * 1000);
    };

    const hasAvailableSlots = (date: Date, busyRanges: BusyRange[]) => {
        return calculateFreeSlots(date, busyRanges).length > 0;
    };

    const getTimelineStyles = (start: Date | string | number, end: Date | string | number) => {
        const startDate = new Date(start);
        const endDate = new Date(end);

        const startMinutes = startDate.getHours() * 60 + startDate.getMinutes();
        const endMinutes = endDate.getHours() * 60 + endDate.getMinutes();
        const totalDayMinutes = 24 * 60;

        const leftPercent = (startMinutes / totalDayMinutes) * 100;
        let widthPercent = ((endMinutes - startMinutes) / totalDayMinutes) * 100;

        if (widthPercent === 0) widthPercent = 2;

        return {
            left: `${leftPercent}%`,
            width: `${widthPercent}%`,
        };
    };

    const formatShortTime = (dateObj: Date) => {
        return dateObj.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    };

    const handleSlotClick = (startObj: Date, endObj: Date) => {
        const dateString = selectedDate.toLocaleDateString('ro-RO', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
        const timeString = `${formatShortTime(startObj)} - ${formatShortTime(endObj)}`;

        onSlotSelect(`${dateString} | ${timeString}`);
    };

    if (isLoading) return <div><LoaderBreathing text='Se încarcă calendarul..' /></div>;

    const freeSlots = availableRanges ? calculateFreeSlots(selectedDate, availableRanges) : [];

    return (
        <div className="availability-container">
            <h3>calendarul cu ore disponibile</h3>

            <div className="legend">
                <span className="legend-busy">ocupat</span>
                <span className="legend-free">disponibil</span>
            </div>

            <Calendar
                minDate={new Date()}
                maxDate={maxDate}
                minDetail="month"
                calendarType="gregory"
                locale="ro-RO"
                onClickDay={(value) => setSelectedDate(value as Date)}
                value={selectedDate}
                prev2Label={null}
                next2Label={null}
                tileClassName={({ date, view }) => {
                    if (view !== 'month') return '';

                    if (date < today || date > maxDate) {
                        return 'tile-unselectable';
                    }

                    if (availableRanges && hasAvailableSlots(date, availableRanges)) {
                        return 'tile-available';
                    }

                    return 'tile-fully-booked';
                }}
            />

            <div className="hourly-breakdown">
                <h4>Programul pentru {selectedDate.toLocaleDateString('ro-RO', { weekday: 'long', month: 'long', day: 'numeric' })}</h4>

                {freeSlots.length === 0 ? (
                    <p className="all-busy">Complet rezervat în această zi.</p>
                ) : (
                    <div className="free-details">
                        <p className="list-header" id="slots-list-heading">Intervale orare disponibile:</p>

                        <ul className="free-slots-list" aria-labelledby="slots-list-heading">
                            {freeSlots.map((slot) => {
                                const startObj = new Date(slot.start);
                                const endObj = new Date(slot.end);

                                return (
                                    <li key={`text-${slot.start}-${slot.end}`} className="available-slot">
                                        <button
                                            type="button"
                                            className="slot-select-btn"
                                            onClick={() => handleSlotClick(startObj, endObj)}
                                            style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', padding: 0 }}
                                        >
                                            {formatShortTime(startObj)} {' - '} {formatShortTime(endObj)}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="timeline-container" aria-hidden="true">
                            <div className="timeline-bar">
                                {freeSlots.map((slot) => {
                                    const startObj = new Date(slot.start);
                                    const endObj = new Date(slot.end);
                                    const timeString = `${formatShortTime(startObj)} - ${formatShortTime(endObj)}`;

                                    return (
                                        <button
                                            type="button"
                                            key={`visual-${slot.start}-${slot.end}`}
                                            className="timeline-available-block"
                                            style={{ ...getTimelineStyles(slot.start, slot.end), cursor: 'pointer', border: 'none' }}
                                            title={timeString}
                                            onClick={() => handleSlotClick(startObj, endObj)}
                                        >
                                            <span className="block-text">{timeString}</span>
                                        </button>
                                    );
                                })}
                            </div>
                            <div className="timeline-labels">
                                <span>12am</span>
                                <span>6am</span>
                                <span>12pm</span>
                                <span>6pm</span>
                                <span>12am</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}