import { ReactNode } from 'react';

import { useConfigContext } from '../provider/config-provider';
import {
  RangeCalendarValue,
  RangeDayColorType,
  RangePosition
} from '../types/types';
import { getMonthDays, convertHexToRGBA } from '../utils/index';
import { CalendarDay, CalendarDayHoverSpan } from './calendar.base';

type RangeCalendarComponentProps = {
  children?: ReactNode;
  value: RangeCalendarValue;
  dayColor: RangeDayColorType;
  curMonth: Date;
  handleSelect: (day: Date) => void;
  curPosition: RangePosition;
};

export function RangeCalendarItem({
  children,
  dayColor,
  value,
  curMonth,
  handleSelect,
  curPosition
}: RangeCalendarComponentProps) {
  const defaultValue = {
    themeColor: '#3EA5D9',
    minDate: new Date(2024, 0, 1),
    maxDate: new Date(2025, 0, 25)
  };
  const {
    minDate = defaultValue.minDate,
    maxDate = defaultValue.maxDate,
    themeColor = defaultValue.themeColor,
    startText,
    endText
  } = useConfigContext();
  const year = curMonth.getFullYear();
  const month = curMonth.getMonth();
  const days = getMonthDays(year, month);

  return (
    <div className="desktop:max-w-[284px] min-w-[284px] desktop:border w-full  border-stone-300 border-b ">
      <div className="pt-1 flex flex-wrap flex-row w-full justify-between ">
        {/* header放的區域 */}
        {children}
        {/* day */}
        <div className="flex flex-wrap flex-row w-full justify-between  desktop:min-w-8 min-w-[45px]">
          {days.map((day) => {
            const key = crypto.randomUUID();
            const date = day?.getDate();

            const isCurrentMonth = day?.getMonth() === curMonth.getMonth();
            const dayClass = `${isCurrentMonth ? 'text-slate-500' : 'text-slate-200'} ${isCurrentMonth ? 'cursor-pointer' : 'cursor-no-drop'}`;

            const isValid =
              day && minDate && maxDate && day > minDate && day < maxDate;
            const isBeforeStart = day && value.start && day < value.start;
            const isAfterEnd = day && value.end && day > value.end;
            const isStart = day && day.getTime() === value.start?.getTime();
            const isEnd = day && day.getTime() === value.end?.getTime();
            const isSelectDone = value.end && value.start;
            const isTheSameDay =
              value.start?.getTime() === value.end?.getTime() && isStart;
            if (
              !isValid ||
              (!isSelectDone && curPosition !== 'start' && isBeforeStart) ||
              (!isSelectDone && curPosition !== 'end' && isAfterEnd) ||
              (isSelectDone && curPosition === 'end' && isBeforeStart)
            ) {
              // out of range
              return (
                <CalendarDay key={key} className={dayColor.disabled && dayClass}>
                  {date}
                </CalendarDay>
              );
            }
            if (isTheSameDay) {
              // selected
              return (
                <CalendarDay
                  className={`${dayColor.active} flex flex-col justify-center `}
                  key={key}
                  onClick={() => handleSelect(day)}
                >
                  <span
                    className="desktop:size-8 size-[45px] rounded-full absolute z-[-1]"
                    style={{
                      backgroundColor: `${themeColor}`
                    }}
                  />
                  <span className={startText && 'h-[16px]'}>{date}</span>
                  {startText && (
                    <span className="w-full small-regular ">{startText}</span>
                  )}
                </CalendarDay>
              );
            }
            if (isEnd && value.start && value.end) {
              // is range && end
              return (
                <CalendarDay
                  key={key}
                  className={`${dayColor.isRangeEnd} flex flex-col justify-center `}
                  onClick={() => isCurrentMonth &&  handleSelect(day)}
                >
                  <span
                    className={dayColor.isRangeBefore}
                    style={{
                      backgroundColor: `${convertHexToRGBA(themeColor, 0.25)}`,
                      right: '50%'
                    }}
                  />
                  <span className={endText && 'h-[16px]'}>{date}</span>
                  {endText && (
                    <span className="w-full small-regular ">{endText}</span>
                  )}
                  <span
                    className={dayColor.isRangeAfter}
                    style={{
                      backgroundColor: `${themeColor}`
                    }}
                  />
                </CalendarDay>
              );
            }
            if (isStart && value.start && value.end) {
              // is range && start
              return (
                <CalendarDay
                  key={key}
                  className={`${dayColor.isRangeStart} flex flex-col justify-center `}
                  onClick={() => isCurrentMonth && handleSelect(day)}
                >
                  <span
                    className={dayColor.isRangeBefore}
                    style={{
                      backgroundColor: `${convertHexToRGBA(themeColor, 0.25)}`,
                      left: '50%'
                    }}
                  />
                  <span className={startText && 'h-[16px]'}>{date}</span>
                  {startText && (
                    <span className="w-full small-regular ">{startText}</span>
                  )}
                  <span
                    className={dayColor.isRangeAfter}
                    style={{
                      backgroundColor: `${themeColor}`
                    }}
                  />
                </CalendarDay>
              );
            }
            if (isStart || isEnd) {
              // selected
              return (
                <CalendarDay
                  className={`${dayColor.active} flex flex-col justify-center `}
                  key={key}
                  onClick={() => isCurrentMonth &&  handleSelect(day)}
                >
                  <span
                    className="desktop:size-8 size-[45px] rounded-full absolute z-[-1]"
                    style={{
                      backgroundColor: `${themeColor}`
                    }}
                  />
                  <span className={startText && 'h-[16px]'}>{date}</span>
                  {startText && (
                    <span className="w-full small-regular ">{startText}</span>
                  )}
                </CalendarDay>
              );
            }

            if (
              day &&
              value.start &&
              day > value.start &&
              value.end &&
              day < value.end
            ) {
              // in range
              return (
                <CalendarDay
                  key={key}
                  className={dayColor.isRange}
                  onClick={() => isCurrentMonth && handleSelect(day)}
                  style={{
                    background: `${convertHexToRGBA(themeColor, 0.25)}`
                  }}
                >
                  {date}
                  <CalendarDayHoverSpan />
                </CalendarDay>
              );
            }

            return (
              <CalendarDay
                key={key}
                className={dayColor.idle && dayClass}
                onClick={() => isCurrentMonth &&  handleSelect(day)}
              >
                {date}
                <CalendarDayHoverSpan />
              </CalendarDay>
            );
          })}
        </div>
      </div>
    </div>
  );
}
