import { useConfigContext } from '../provider/config-provider';
import { CalendarChevron, CalendarHeader } from './calendar.base';

type RangeCalendarHeaderProps = {
  direction: 'left' | 'right';
  curMonth: Date;
  handleSwitch: (direction: 'left' | 'right', isDisabled: boolean) => void;
};

// 有PC版與M版的header 此component放在 RangeCalendarItem中

export function RangeCalendarHeader({
  direction,
  curMonth,
  handleSwitch
}: RangeCalendarHeaderProps) {
  const defaultValue = {
    themeColor: '#3EA5D9',
    minDate: new Date(2024, 0, 1),
    maxDate: new Date(2025, 0, 25)
  };
  const {
    themeColor = defaultValue.themeColor,
    minDate = defaultValue.minDate,
    maxDate = defaultValue.maxDate
  } = useConfigContext();
  const isDisabledMin = curMonth.getTime() < minDate.getTime();
  const isDisabledMax = curMonth.getTime() > maxDate.getTime() - 1;

  return (
    <CalendarHeader className="p-1 min-h-8 relative">
      {direction === 'left' && (
        <CalendarChevron
          disabled={isDisabledMin || false}
          color={themeColor}
          onClick={() => handleSwitch(direction, isDisabledMin)}
          className="absolute left-8 top-[calc(50%-11px)] size-5"
        />
      )}

      <div className="m-auto">
        <span>{curMonth.getFullYear()} 年</span>
        <span>{curMonth.getMonth() + 1}月</span>
      </div>
      {direction === 'right' && (
        <CalendarChevron
          color={themeColor}
          disabled={isDisabledMax || false}
          onClick={() => handleSwitch(direction, isDisabledMax)}
          className="rotate-180 absolute right-8 top-[calc(50%-11px)] size-5"
        />
      )}
    </CalendarHeader>
  );
}

export function RangeCalendarMHeader({ curMonth }: { curMonth: Date }) {
  return (
    <CalendarHeader className="p-1 min-h-8  shadow-black shadow-md sticky top-0 bg-white-500 z-10">
      <div className="m-auto h5-regular text-slate-500 flex items-center">
        <span>{curMonth.getFullYear()}年 </span>
        <span>{curMonth.getMonth() + 1}月</span>
        <CalendarChevron
          disabled={false}
          color="#222"
          className="rotate-[270deg]"
        />
      </div>
    </CalendarHeader>
  );
}
