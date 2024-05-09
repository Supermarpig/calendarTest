import { Dispatch, SetStateAction } from 'react';

export type SingleDayColorType = {
  idle: string;
  active: string;
  activeBefore: string;
  disabled: string;
};

export type RangeDayColorType = Omit<SingleDayColorType, 'activeBefore'> & {
  isRangeBefore: string;
  isRangeAfter: string;
  isRangeStart: string;
  isRangeEnd: string;
  isRange: string;
};

// single
export type SingleCalendarValue = Date|null;
export type SingleCalendarProps = {
  defaultMonth?: Date;
  value: SingleCalendarValue;
  onChange: (value: SingleCalendarValue) => void;
};

// range
export type RangePosition = 'start' | 'end';
export type RangeCalendarValue = {
  start: Date | undefined;
  end: Date | undefined;
};


export type Direction = 'left' | 'right';
export type RangeCalendarProps = {
  changingPosition?: RangePosition;
  defaultMonth?: Date;
  value: RangeCalendarValue;
  onChange: (value: RangeCalendarValue) => void;
};

export type RangeCalendarMProps = {
  changingPosition?: RangePosition;
  setChangingPosition?: Dispatch<SetStateAction<'start' | 'end'>>;
  defaultMonth?: Date;
  value: RangeCalendarValue;
  onChange: (value: RangeCalendarValue) => void;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
