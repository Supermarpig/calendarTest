/* eslint-disable @typescript-eslint/no-unused-vars */
import { ConfigContextType, ConfigProvider } from '../provider/config-provider';
import { RangeCalendarMProps } from '../types/types';
// import { RangeCalendarMDrawer } from './range-calendar-m-drawer';

type CalendarProps = ConfigContextType & RangeCalendarMProps;

function RangeMCalendar(props: CalendarProps) {
  const {
    open,
    setOpen,
    changingPosition,
    setChangingPosition,
    defaultMonth,
    value,
    onChange,
    ...context
  } = props;

  return (
    <ConfigProvider value={context}>
      {/* <RangeCalendarMDrawer {...props} /> */}
      <div>222</div>
    </ConfigProvider>
  );
}

export { RangeMCalendar };
