import { useState } from 'react';

import {
  ConfigContextType,
  ConfigProvider,
  useConfigContext
} from '../provider/config-provider';

import {
  Direction,
  RangeCalendarProps,
  RangeDayColorType
} from '../types/types';
import { RangeCalendarItem } from './range-calendar-item';
import { CalendarWeekday } from './calendar.base';
import { RangeCalendarHeader } from './range-calendar-header';

function RangeCalendarComponent({
  value,
  onChange,
  defaultMonth = new Date(),
  changingPosition
}: RangeCalendarProps) {
  const { themeColor, dayColor } = useConfigContext();

  const DAY_COLOR = {
    idle: 'text-slate-500',
    active: `text-white`,
    disabled: 'text-slate-200',
    isRangeStart: `rounded-none text-white`,
    isRangeBefore: 'z-[-3] absolute w-1/2 h-full bg-opacity-25 ',
    isRangeAfter: 'desktop:size-8 size-[45px] rounded-full absolute z-[-2]',
    isRangeEnd: `rounded-none text-white`,
    isRange: `rounded-none `
  };

  const [curMonth, setCurMonth] = useState<Date>(defaultMonth);

  function getPosition() {
    if (changingPosition) return changingPosition;
    if (value.start && !value.end) return 'end';
    return 'start';
  }

  function handleSelect(day: Date) {
    const updated = { ...value };
    const position = getPosition();
    if (position === 'start') updated.start = day;
    if (position === 'end') updated.end = day;

    onChange(updated);
  }
  function handleSwitch(direction: Direction, isDisabled: boolean) {
    if (isDisabled) return;
    if (direction === 'left') {
      setCurMonth(
        (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
      );
    } else {
      setCurMonth(
        (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
      );
    }
  }
  const RangeCalendarComponentProps = {
    themeColor,
    dayColor:
      (dayColor as RangeDayColorType) || (DAY_COLOR as RangeDayColorType),
    value,
    setCurMonth,
    handleSelect,
    curPosition: getPosition()
  };

  return (
    <div className="desktop:flex flex-row gap-2 select-none">
      <RangeCalendarItem curMonth={curMonth} {...RangeCalendarComponentProps}>
        <RangeCalendarHeader
          direction="both"
          handleSwitch={(direction, isDisabled) =>
            handleSwitch(direction, isDisabled)
          }
          curMonth={curMonth}
        />        
        <CalendarWeekday />
      </RangeCalendarItem>

      {/* 如果要顯示兩個月曆就把她打開 */}
      {/* <RangeCalendarItem
        curMonth={new Date(curMonth.getFullYear(), curMonth.getMonth() + 1, 1)}
        {...RangeCalendarComponentProps}
      >
        <RangeCalendarHeader
          direction="right"
          handleSwitch={(direction, isDisabled) =>
            handleSwitch(direction, isDisabled)
          }
          curMonth={
            new Date(curMonth.getFullYear(), curMonth.getMonth() + 1, 1)
          }
        />
        <CalendarWeekday />
      </RangeCalendarItem> */}
    </div>
  );
}

type CalendarProps = ConfigContextType & RangeCalendarProps;

function RangeCalendar(props: CalendarProps) {
  const { defaultMonth, value, onChange, changingPosition, ...context } = props;

  return (
    <ConfigProvider value={context}>
      <RangeCalendarComponent
        defaultMonth={defaultMonth}
        value={value}
        onChange={onChange}
        changingPosition={changingPosition}
      />
    </ConfigProvider>
  );
}

export { RangeCalendar };
