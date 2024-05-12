// 知道該月有幾天
export function getLastDayOfMonth(year: number, month: number) {
  const nextMonth = new Date(year, month + 1, 1);
  const lastDay = new Date(nextMonth.getTime() - 1);
  return lastDay.getDate();
}

// padEnd for array
export function padEnd<T>(
  array: (T | null)[],
  minLength: number,
  fillValue: T | null = null
): (T | null)[] {
  return Object.assign([...array, ...new Array(minLength - array.length).fill(fillValue)]);
}

export const transDateIntoString = (Date: Date) =>
  `${Date.getFullYear()}/${Date.getMonth() + 1}/${Date.getDate()}`;

// 生成日期arr
export function getMonthDays(year: number, month: number) {
  const firstDayOfMonth = new Date(year, month, 1);
  const weekday = firstDayOfMonth.getDay();
  const lastDay = getLastDayOfMonth(year, month);

  const days: (Date | null)[] = [];

  // 計算上個月應該顯示的日期
  const previousMonthYear = month === 0 ? year - 1 : year;
  const previousMonth = month === 0 ? 11 : month - 1;
  const lastDayOfPreviousMonth = getLastDayOfMonth(previousMonthYear, previousMonth);

  for (let i = 0; i < weekday; i++) {
    days.unshift(new Date(previousMonthYear, previousMonth, lastDayOfPreviousMonth - i));
  }

  // 當月的所有日期
  for (let i = 1; i <= lastDay; i++) {
    days.push(new Date(year, month, i));
  }

  // 計算下個月應該顯示的日期
  const nextMonthYear = month === 11 ? year + 1 : year;
  const nextMonth = month === 11 ? 0 : month + 1;

  // 當總天數小於42天時，添加下個月的開始幾天
  if (days.length < 42) {
    let i = 1;
    while (days.length < 42) {
      days.push(new Date(nextMonthYear, nextMonth, i++));
    }
  }

  return days;
}


// 生成select選項
export function generateYearsArray(
  startYear: number,
  endYear: number
): string[] {
  const yearsArray: string[] = [];
  for (let year = startYear; year < endYear; year += 1) {
    yearsArray.push(`${year}`);
  }
  return yearsArray;
}

export function getMonthRangeArray(min: Date, max: Date): Date[] {
  const months: Date[] = [];
  const current = new Date(min);
  current.setDate(1); // Ensure we're at the beginning of the month

  while (current <= max) {
    months.push(new Date(current));
    current.setMonth(current.getMonth() + 1);
  }

  return months;
}

// color code加上透明度
export function convertHexToRGBA(hex: string, alpha: number) {
  // 移除 #
  const newHex = hex.replace('#', '');

  // 解析RGB值
  const r = parseInt(newHex.substring(0, 2), 16);
  const g = parseInt(newHex.substring(2, 4), 16);
  const b = parseInt(newHex.substring(4, 6), 16);

  // return 帶有透明度的值
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
