import { Dispatch, SetStateAction, useState } from 'react';

import { MONTHS } from '../constants/constants';
import { generateYearsArray, getMonthDays } from '../utils/index';
import {
  CalendarChevron,
  CalendarDay,
  CalendarHeader,
  CalendarHeaderChooser,
  CalendarWeekday
} from './calendar.base';

import {
  ConfigContextType,
  ConfigProvider,
  useConfigContext
} from '../provider/config-provider';
import {
  SingleCalendarProps,
  SingleCalendarValue,
  SingleDayColorType
} from '../types/types';
import { ChevronDownBoldIcon } from './icons';

type SingleHeaderProps = {
  curMonth: Date;
  setCurMonth: Dispatch<SetStateAction<Date>>;
};

export function SingleHeader({ curMonth, setCurMonth }: SingleHeaderProps) {
  const defaultValue = {
    themeColor: '#3EA5D9',
    minDate: new Date(1924, 1, 1),
    maxDate: new Date()
  };
  const {
    minDate = defaultValue.minDate,
    maxDate = defaultValue.maxDate,
    themeColor = defaultValue.themeColor
  } = useConfigContext();

  const year = curMonth.getFullYear();

  const years = generateYearsArray(
    minDate.getFullYear(),
    maxDate.getFullYear() + 1
  );

  function handleYearChange(value: number) {
    setCurMonth(new Date(value, curMonth.getMonth(), 1));
  }

  function handleMonthChange(value: number) {
    setCurMonth(new Date(curMonth.getFullYear(), value, 1));
  }

  const handleSwitch = (method: 'plus' | 'minus', isDisabled: boolean) => {
    if (isDisabled) return;
    const newMonth =
      method === 'plus' ? curMonth.getMonth() + 1 : curMonth.getMonth() - 1;
    const nextDate = new Date(year, newMonth, 1);
    if (nextDate.getFullYear() < minDate.getFullYear()) return;
    setCurMonth(nextDate);
  };

  const isDisabledMin = curMonth.getTime() < minDate.getTime();
  const isDisabledMax = curMonth.getTime() > maxDate.getTime() - 1;
  return (
    <CalendarHeader className="h-7 pt-2 px-10">
      <CalendarChevron
        color={themeColor}
        disabled={isDisabledMin}
        onClick={() => handleSwitch('minus', isDisabledMin)}
      />
      <div className=" w-1/2 flex flex-row gap-2 justify-center">
        {/* chooser for year */}
        <CalendarHeaderChooser
          disabled={false}
          selectItems={years}
          placeholder={curMonth.getFullYear().toString()}
          value={curMonth.getFullYear().toString()}
          icon={<ChevronDownBoldIcon color="#222" />}
          onValueChange={(e) => {
            handleYearChange(e);
          }}
        />
        {/* chooser for month */}
        <CalendarHeaderChooser
          disabled={false}
          selectItems={MONTHS}
          placeholder={(curMonth.getMonth() + 1).toString()}
          value={(curMonth.getMonth() + 1).toString()}
          icon={<ChevronDownBoldIcon color="#222" />}
          onValueChange={(e) => {
            handleMonthChange(e);
          }}
        />
      </div>
      <CalendarChevron
        disabled={isDisabledMax}
        color={themeColor}
        className="rotate-180"
        onClick={() => handleSwitch('plus', isDisabledMax)}
      />
    </CalendarHeader>
  );
}

function SingleCalendarComponent({
  value,
  onChange,
  defaultMonth = new Date()
}: SingleCalendarProps) {
  const {
    minDate = new Date(2020, 1, 10),
    maxDate = new Date(),
    weekdays,
    themeColor,
    selectText,
    dayColor
  } = useConfigContext();

  const DAY_COLOR = (dayColor as SingleDayColorType) || {
    idle: 'text-slate-500 ',
    active: 'text-white-500',
    activeBefore: 'absolute z-[-1] size-8 rounded-full',
    disabled: 'text-slate-200'
  };

  const [curMonth, setCurMonth] = useState<Date>(defaultMonth);

  const year = curMonth.getFullYear();
  const month = curMonth.getMonth();
  const days = getMonthDays(year, month);

  function handleSelect(day: SingleCalendarValue) {
    if (!day) return;
    onChange(day);
  }

  return (
    <div className="desktop:w-[284px] min-w-[284px] w-full border border-stone-300">
      <SingleHeader curMonth={curMonth} setCurMonth={setCurMonth} />
      <div className="pt-1 flex flex-wrap flex-row w-full justify-between ">
        <CalendarWeekday weekdays={weekdays} className="pb-1" />
        <div className="flex flex-wrap flex-row w-full justify-between">
          {days.map((day) => {
            const date = day?.getDate();
            const key = crypto.randomUUID();
            const isCurrentMonth = day?.getMonth() === curMonth.getMonth();
            const dayClass = `${isCurrentMonth ? DAY_COLOR.idle : `${DAY_COLOR.disabled}`} ${isCurrentMonth ? 'cursor-pointer' : 'cursor-no-drop'}`;
            if (day && (day < minDate || day > maxDate)) {
              return (
                <CalendarDay key={key} className={`${DAY_COLOR.disabled} ${dayClass}`}>
                  {date}
                </CalendarDay>
              );
            }
            if (day && day.getTime() === value?.getTime()) {
              return (
                <CalendarDay
                  key={key}
                  className={`${DAY_COLOR.active} flex flex-col items-center justify-center ${dayClass}`}
                  onClick={() => handleSelect(day)}
                >
                  <span
                    style={{ backgroundColor: `${themeColor}` }}
                    className={DAY_COLOR.activeBefore}
                  />
                  <span className={selectText && 'h-[16px]' && dayClass}>{date}</span>
                  {selectText && (
                    <span className="w-full small-regular ">{selectText}</span>
                  )}
                </CalendarDay>
              );
            }
            return (
              <CalendarDay
                key={key}
                className={DAY_COLOR.idle && dayClass}
                onClick={() => handleSelect(day)}
              >
                {date}
              </CalendarDay>
            );
          })}
        </div>
      </div>
    </div>
  );
}

type CalendarProps = ConfigContextType & SingleCalendarProps;

function SingleCalendar(props: CalendarProps) {
  const { defaultMonth, value, onChange, ...context } = props;

  return (
    <ConfigProvider value={context}>
      <SingleCalendarComponent
        defaultMonth={defaultMonth}
        value={value}
        onChange={onChange}
      />
    </ConfigProvider>
  );
}

export { SingleCalendar };
