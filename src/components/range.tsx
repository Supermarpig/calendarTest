import { useState } from 'react';
import { RangeCalendarValue, RangePosition } from '../types/types';
import { RangeCalendar } from './range-calendar';
import { RangeMCalendar } from './range-calendar-m';

function Range() {
  const [open, setOpen] = useState(false);

  const [value, setValue] = useState<RangeCalendarValue>({
    start: undefined,
    end: undefined
  });
  const [changingPosition, setChangingPosition] =
    useState<RangePosition>('start');

  const handleChange = (val: RangeCalendarValue) => {
    const updated = { ...val };
    if (value.start && value.end && changingPosition === 'start') {
      updated.end = undefined;
    }

    if (changingPosition === 'start') setChangingPosition('end');
    if (changingPosition === 'end') setChangingPosition('start');

    setValue(updated);
  };

  const defaultValue = {
    themeColor: '#3EA5D9',
    minDate: new Date(2024, 0, 1),
    maxDate: new Date(2025, 0, 25)
  };
  const RangeMCalendarProps = {
    open,
    setOpen,
    value,
    setValue,
    changingPosition,
    setChangingPosition,
    onChange: handleChange,
    minDate: new Date(2024, 0, 1) || defaultValue.minDate,
    maxDate: new Date(2025, 0, 25) || defaultValue.maxDate,
    themeColor: '#3EA5D9' || defaultValue.themeColor
  };
  return (
    <>
      <div className="hidden desktop:block">
        <label className="relative">
          <span className="absolute top-0 left-2 ">START</span>
          <input
            type="text"
            className="w-45 h-8 border border-slate-200 rounded pl-13 text-slate-200"
            value={value.start?.toDateString() || ''}
            onFocus={() => setChangingPosition('start')}
            readOnly
          />
        </label>
        <label className="relative">
          <span className="absolute top-0 left-2 ">END</span>
          <input
            type="text"
            className="w-45 h-8 border border-slate-200 rounded pl-13 text-slate-200"
            value={value.end?.toDateString() || ''}
            onFocus={() => setChangingPosition('end')}
            readOnly
          />
        </label>
      </div>

      <RangeCalendar
        changingPosition={changingPosition}
        value={value}
        onChange={handleChange}
        themeColor={defaultValue.themeColor}
        minDate={new Date(2024, 0, 1)}
        maxDate={new Date(2025, 0, 25)}
        startText="去程"
        endText="回程"
      />

      <RangeMCalendar {...RangeMCalendarProps} />
    </>
  );
}
export default Range;
