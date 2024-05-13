import { cn } from '../libs/cn';

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
    'border-b border-b-stone-300 min-w-8 w-[14%] text-center small-regular grow';
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
  selectItems,
  disabled,
  value,
  onValueChange
}: CalendarHeaderChooserProps) {
  const handleChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    onValueChange(Number(event.target.value));
  }, [onValueChange]);


  return (
    <div className={`flex items-center gap-1 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      <select onChange={handleChange} value={value} disabled={disabled} className="select-css">
        <option value="">{placeholder}</option>
        {selectItems.map((item) => (
          <option value={item} key={item}>{item}</option>
        ))}
      </select>
    </div>
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
