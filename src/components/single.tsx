import { useState } from 'react';
import { SingleCalendarValue } from '../types/types';
import { SingleCalendar } from './single-calendar';
import { transDateIntoString } from '../utils';

function Single() {
  const [value, setValue] = useState<SingleCalendarValue>(new Date());

  const handleChange = (val: SingleCalendarValue) => {
    setValue(val);
  };

  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 24);

  const data = {
    themeColor: '#3EA5D9',
    defaultMonth: new Date(),
    minDate: new Date(1924, 1, 1),
    maxDate: maxDate,
    selectText: ''
  };
  return (
    <>
      <div className='flex items-center justify-center flex-col' >
        <h3 className='font-bold text-black'>單月曆樣式</h3>
        <div>minDate:{transDateIntoString(data.minDate)}</div>
        <div>maxDate:{transDateIntoString(data.maxDate)}</div>
        <div>defaultMonth:{transDateIntoString(data.defaultMonth)}</div>
        <div className="flex flex-row items-center gap-2">
          themeColor:
          <div
            className="size-3 rounded-full"
            style={{ backgroundColor: `${data.themeColor}` }}
          />
        </div>
      </div>
      <SingleCalendar
        value={value}
        onChange={handleChange}
        themeColor={data.themeColor}
        defaultMonth={data.defaultMonth}
        minDate={data.minDate}
        maxDate={data.maxDate}
        selectText={data.selectText}
      />
    </>
  );
}

export default Single;
