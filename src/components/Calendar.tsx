import React, { useState } from 'react';

type CalendarProps = {
    initialDate?: Date;
};

const Calendar: React.FC<CalendarProps> = ({ initialDate = new Date() }) => {
    const [date, setDate] = useState<Date>(initialDate);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const changeMonth = (offset: number) => {
        const newDate = new Date(date.getFullYear(), date.getMonth() + offset, 1);
        setDate(newDate);
    };

    const month = date.getMonth();
    const year = date.getFullYear();
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    const handleDayClick = (clickedDay: Date) => {
        if (clickedDay.getMonth() !== month) return; // B: Disable non-current month days

        if (!startDate || (endDate && clickedDay > startDate)) {
            setEndDate(null);
            setStartDate(clickedDay);
        } else if (clickedDay > startDate) {
            setEndDate(clickedDay);
        } else {
            setStartDate(clickedDay);
        }
    };

    const daysOfWeek = ['日', '一', '二', '三', '四', '五', '六'];
    const dates = [];

    for (let i = 0; i < firstDay; i++) {
        dates.push(<div key={`empty-${i}`} className="text-center opacity-50">-</div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
        const dateObj = new Date(year, month, day);
        const isRangeStart = startDate && dateObj.getTime() === startDate.getTime();
        const isRangeEnd = endDate && dateObj.getTime() === endDate.getTime();
        const isInRange = startDate && endDate && dateObj > startDate && dateObj < endDate;
        const extraClass = isRangeStart || isRangeEnd ? 'bg-blue-500 text-white' : isInRange ? 'bg-blue-300' : '';

        dates.push(
            <div
                key={day}
                className={`text-center p-2 cursor-pointer ${extraClass} ${month === currentMonth && year === currentYear ? '' : 'cursor-not-allowed opacity-50'}`}
                onClick={() => handleDayClick(dateObj)}
            >
                {day}
            </div>
        );
    }

    return (
        <div className="p-5 bg-gray-200 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <button onClick={() => changeMonth(-1)} className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400">« 上個月</button>
                <span className="text-center font-bold text-lg">{`${year}年${month + 1}月`}</span>
                <button onClick={() => changeMonth(1)} className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400">下個月 »</button>
            </div>
            <div className="grid grid-cols-7 gap-1">
                {daysOfWeek.map((day, index) => (
                    <div key={index} className="text-center font-bold">{day}</div>
                ))}
                {dates}
            </div>
        </div>
    );
};

export default Calendar;
