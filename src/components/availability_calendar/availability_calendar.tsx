import Calendar from 'react-calendar';
import './availability_calendar.scss';
import { useState } from "react";
import { queryForCalendar } from '../../utils/react_query_hooks';
import type { BusyRange } from '../../api/calendar_service';
import { LoaderBreathing } from '../loader_breathing/loader_breathing';


interface AvailabilityCalendarProps {
    onSlotSelect: (timeString: string) => void;
    headingLevel?: 'h2' | 'h3' | 'h4';
}

export default function AvailabilityCalendar({ onSlotSelect, headingLevel = 'h2' }: Readonly<AvailabilityCalendarProps>) {
    const TitleTag = headingLevel;
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

    const getClockGradients = (slots: any[]) => {
        const amParts: string[] = [];
        let amCurrentDeg = 0;

        const pmParts: string[] = [];
        let pmCurrentDeg = 0;

        const NOON_MINS = 720;

        slots.forEach(slot => {
            const startObj = new Date(slot.start);
            const endObj = new Date(slot.end);

            const startMins = startObj.getHours() * 60 + startObj.getMinutes();
            const endMins = endObj.getHours() * 60 + endObj.getMinutes();

            const subSlots = [];
            if (startMins < NOON_MINS && endMins > NOON_MINS) {
                subSlots.push({ start: startMins, end: NOON_MINS, ring: 'am' },
                    { start: NOON_MINS, end: endMins, ring: 'pm' });
            } else if (endMins <= NOON_MINS) {
                subSlots.push({ start: startMins, end: endMins, ring: 'am' });
            } else {
                subSlots.push({ start: startMins, end: endMins, ring: 'pm' });
            }

            subSlots.forEach(sub => {
                if (sub.ring === 'am') {
                    const startDeg = (sub.start / NOON_MINS) * 360;
                    const endDeg = (sub.end / NOON_MINS) * 360;
                    if (startDeg > amCurrentDeg) {
                        amParts.push(`transparent ${amCurrentDeg}deg, transparent ${startDeg}deg`);
                    }
                    amParts.push(`#3bd494 ${startDeg}deg, #3bd494 ${endDeg}deg`);
                    amCurrentDeg = endDeg;
                } else {
                    const startDeg = ((sub.start - NOON_MINS) / NOON_MINS) * 360;
                    const endDeg = ((sub.end - NOON_MINS) / NOON_MINS) * 360;
                    if (startDeg > pmCurrentDeg) {
                        pmParts.push(`transparent ${pmCurrentDeg}deg, transparent ${startDeg}deg`);
                    }
                    pmParts.push(`var(--color-primary-lighter) ${startDeg}deg, var(--color-primary-lighter) ${endDeg}deg`);
                    pmCurrentDeg = endDeg;
                }
            });
        });

        if (amCurrentDeg < 360) amParts.push(`transparent ${amCurrentDeg}deg, transparent 360deg`);
        if (pmCurrentDeg < 360) pmParts.push(`transparent ${pmCurrentDeg}deg, transparent 360deg`);

        return {
            amGradient: `conic-gradient(from 0deg, ${amParts.length ? amParts.join(', ') : 'transparent 0deg, transparent 360deg'})`,
            pmGradient: `conic-gradient(from 0deg, ${pmParts.length ? pmParts.join(', ') : 'transparent 0deg, transparent 360deg'})`
        };
    };

    if (isLoading) return <div><LoaderBreathing text='Se încarcă calendarul..' /></div>;

    const freeSlots = availableRanges ? calculateFreeSlots(selectedDate, availableRanges) : [];

    return (
        <div className="availability-container">
            <TitleTag style={{ marginTop: 0}}>calendarul cu ore disponibile</TitleTag>

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
                <p style={{ fontSize: '1.3rem', fontWeight: 'bold', margin: '0' }}>Programul pentru {selectedDate.toLocaleDateString('ro-RO', { weekday: 'long', month: 'long', day: 'numeric' })}</p>

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
                                    <li key={`text-${slot.start}-${slot.end}`} style={{ display: 'inline' }}>
                                        <button
                                            type="button"
                                            className="available-slot"
                                            onClick={() => handleSlotClick(startObj, endObj)}
                                        >
                                            {formatShortTime(startObj)} {' - '} {formatShortTime(endObj)}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="clock-container" aria-hidden="true">
                            <div className="clock-visualizer">
                                {(() => {
                                    const { amGradient, pmGradient } = getClockGradients(freeSlots);
                                    return (
                                        <>
                                            <div className="clock-ring clock-outer" style={{ background: pmGradient }}></div>

                                            <div className="clock-ring clock-inner" style={{ background: amGradient }}></div>
                                        </>
                                    );
                                })()}

                                <div className="clock-center-pin"></div>

                                {[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((hour) => {
                                    const angle = hour * 30;
                                    return [
                                        <div
                                            key={`tick-${hour}`}
                                            className="clock-tick"
                                            style={{
                                                transform: `rotate(${angle}deg) translate(0, -71px)`
                                            }}
                                        ></div>,

                                        <span
                                            key={`label-${hour}`}
                                            className="clock-hour-label"
                                            style={{
                                                transform: `rotate(${angle}deg) translate(0, -86px) rotate(-${angle}deg)`,
                                            }}
                                        >
                                            {hour}
                                        </span>
                                    ];
                                })}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}