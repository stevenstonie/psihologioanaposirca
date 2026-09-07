import Calendar from 'react-calendar';
import './availability_calendar.scss';
import { useState } from "react";
import { queryForCalendar } from '../../utils/react_query_hooks';
import type { BusyRange } from '../../api/calendar_service';
import { LoaderBreathing } from '../loader_breathing/loader_breathing';


export default function AvailabilityCalendar() {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    const { data: availableRanges, isLoading } = queryForCalendar();

    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);

    const hasAvailableSlots = (date: Date, ranges: BusyRange[]) => {
        return ranges.some(range => {
            const checkDate = new Date(date).setHours(0, 0, 0, 0);
            const start = new Date(range.start).setHours(0, 0, 0, 0);
            const end = new Date(range.end).setHours(0, 0, 0, 0);
            return checkDate >= start && checkDate <= end;
        });
    };

    const getAvailableSlotsForDay = (date: Date, ranges: BusyRange[]) => {
        const targetDate = new Date(date).setHours(0, 0, 0, 0);
        return ranges.filter(range => {
            const start = new Date(range.start).setHours(0, 0, 0, 0);
            return start === targetDate;
        });
    };

    const getTimelineStyles = (start: Date | string, end: Date | string) => {
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

    if (isLoading) return <div><LoaderBreathing text='Se încarcă calendarul..'></LoaderBreathing></div>;

    const daySlots = availableRanges ? getAvailableSlotsForDay(selectedDate, availableRanges) : [];

    return (
        <div className="availability-container">
            <h3>my availability</h3>

            <div className="legend">
                <span className="legend-busy">busy</span>
                <span className="legend-free">available</span>
            </div>

            <Calendar
                minDate={new Date()}
                maxDate={maxDate}
                minDetail="month"
                calendarType="gregory"

                onClickDay={(value) => setSelectedDate(value)}
                value={selectedDate}

                tileClassName={({ date, view }) => {
                    if (view === 'month' && availableRanges && hasAvailableSlots(date, availableRanges)) {
                        return 'date-is-free';
                    }
                    return 'date-is-busy';
                }}
            />

            <div className="hourly-breakdown">
                <h4>schedule for {selectedDate.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}</h4>

                {daySlots.length === 0 ? (
                    <p className="all-busy">completely booked on this day.</p>
                ) : (
                    <div className="busy-details">

                        <div className="timeline-container" aria-hidden="true">
                            <div className="timeline-bar">
                                {daySlots.map((slot, index) => {
                                    const startObj = new Date(slot.start);
                                    const endObj = new Date(slot.end);
                                    const timeString = `${formatShortTime(startObj)} - ${formatShortTime(endObj)}`;

                                    return (
                                        <div
                                            key={`visual-${index}`}
                                            className="timeline-available-block"
                                            style={getTimelineStyles(slot.start, slot.end)}
                                            title={timeString}
                                        >
                                            <span className="block-text">{timeString}</span>
                                        </div>
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

                        <ul className="busy-slots-list">
                            <li className="list-header">available booking windows:</li>
                            {daySlots.map((slot, index) => {
                                const startObj = new Date(slot.start);
                                const endObj = new Date(slot.end);

                                return (
                                    <li key={`text-${index}`} className="available-slot">
                                        {formatShortTime(startObj)} {' - '} {formatShortTime(endObj)}
                                    </li>
                                );
                            })}
                        </ul>

                    </div>
                )}
            </div>
        </div>
    );
}