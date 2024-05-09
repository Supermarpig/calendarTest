'use client';

import { Select } from '../react-ui';
import { cn } from '../libs/cn';

import { ChevronDownBoldIcon } from './icons';

import { useCallback, ReactElement, forwardRef } from 'react';

import { weekChn } from '../constants/constants';

// ========================================================================
//                               Calendar Day
// ========================================================================

type CalendarDayElement = React.ElementRef<'div'>;
type CalendarDayProps = React.ComponentPropsWithoutRef<'div'>;

const CalendarDay = forwardRef<CalendarDayElement, CalendarDayProps>(
  ({ children, className, ...props }, ref) => {
    const baseStyle =
      'group grow body-regular cursor-pointer  desktop:min-w-8  min-w-[45px] w-[14%] text-center desktop:h-8 h-[45px] flex items-center  justify-center rounded-full relative';

    return (
      <div className={cn(baseStyle, className)} {...props} ref={ref}>
        {children}
      </div>
    );
  }
);

function CalendarDayHoverSpan() {
  return (
    <span
      className=" size-full absolute group-hover:bg-neutral-200  
    group-hover:desktop:size-8 group-hover:size-[45px] group-hover:z-[-1] 
    group-hover:absolute group-hover:rounded-full"
    />
  );
}
// ========================================================================
//                                 Chevron
// ========================================================================

type CalendarChevronProps = React.ComponentPropsWithoutRef<'svg'> & {
  size?: number;
  disabled: boolean;
};
const CalendarChevron = forwardRef<SVGSVGElement, CalendarChevronProps>(
  ({ color, className, size = 20, disabled, ...props }, ref) => {
    const defaultStyle = 'cursor-pointer inline';
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        {...props}
        className={cn(defaultStyle, className)}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.20322 7.99789L10.78 4.42228L9.57811 3.22L5.4 7.39675C5.06792 7.72872 5.06792 8.26706 5.4 8.59903L9.57811 12.7758L10.78 11.5735L7.20322 7.99789Z"
          fill={disabled ? '#bebebe' : color}
        />
      </svg>
    );
  }
);

// ========================================================================
//                                WeekDay
// ========================================================================

type CalendarWeekdayElement = React.ElementRef<'div'>;
type CalendarWeekdayProps = React.ComponentPropsWithoutRef<'div'> & {
  weekdays?: [string, string, string, string, string, string, string];
};

const CalendarWeekday = forwardRef<
  CalendarWeekdayElement,
  CalendarWeekdayProps
>(({ className, weekdays = weekChn, ...props }, ref) => {
  const baseStyle =
    'border-b border-b-stone-300 min-w-8 w-[14%] text-center small-regular text-slate-300 grow';
  return (
    <>
      {weekdays.map((weekday) => (
        <div
          key={weekday}
          className={cn(baseStyle, className)}
          {...props}
          ref={ref}
        >
          {weekday}
        </div>
      ))}
    </>
  );
});

// ========================================================================
//                       Calendar Header Chooser
// ========================================================================

type CalendarHeaderElement = React.ElementRef<'div'>;
type CalendarHeaderProps = React.ComponentPropsWithoutRef<'div'> & {
  className?: string;
};
const CalendarHeader = forwardRef<CalendarHeaderElement, CalendarHeaderProps>(
  ({ children, className, ...props }, ref) => {
    const baseHeaderStyle =
      'w-full flex flex-row w-full items-center justify-between h-5 px-10';
    return (
      <div className={cn(baseHeaderStyle, className)} {...props} ref={ref}>
        {children}
      </div>
    );
  }
);

// ========================================================================
//                       Calendar Header Chooser
// ========================================================================

type CalendarHeaderChooserProps = React.ComponentPropsWithoutRef<'div'> & {
  placeholder: string;
  icon?: ReactElement;
  selectItems: string[];
  disabled: boolean;
  onValueChange: (value: number) => void;
  value: string;
};

function CalendarHeaderChooser({
  placeholder,
  icon = <ChevronDownBoldIcon color="#222" />,
  selectItems,
  disabled,
  value,
  onValueChange
}: CalendarHeaderChooserProps) {
  const handleChange = useCallback((value: string) => {
    onValueChange(Number(value));
  }, []);

  return (
    <Select.Root onValueChange={handleChange} disabled={disabled} value={value}>
      <Select.Trigger
        data-state="open"
        className={`h-5 w-fit flex gap-1 ${disabled && 'border-0'} `}
      >
        <Select.Value placeholder={placeholder} />
        {!disabled && icon}
      </Select.Trigger>
      <Select.Content className="relative flex flex-row items-center w-full h-fit">
        <Select.Group className="w-full h-40 bg-white-500">
          {selectItems.map((item) => (
            <Select.Item value={item} key={item} className="bg-white-500">
              {item}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
}

const Calendar = {
  Header: CalendarHeader,
  HeaderChooser: CalendarHeaderChooser,
  Weekday: CalendarWeekday,
  Chevron: CalendarChevron,
  Day: CalendarDay,
  DayHover: CalendarDayHoverSpan
};

export {
  Calendar,
  CalendarHeader,
  CalendarHeaderChooser,
  CalendarWeekday,
  CalendarChevron,
  CalendarDay,
  CalendarDayHoverSpan
};
