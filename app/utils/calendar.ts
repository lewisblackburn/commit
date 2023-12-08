type CalendarDay = {
  day: number;
  isCurrentMonth: boolean;
};

export type CalendarWeek = CalendarDay[];

export type CalendarMonth = CalendarWeek[];

export type CalendarData = {
  year: number;
  month: number;
  weeks: CalendarMonth;
};

const DAYS_IN_WEEK = 7;

export const generateCalendar = (year: number, month: number): CalendarData => {
  // Calculate the first day of the month and the last day of the previous month
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);

  const startDay = firstDay.getDay();
  const endDay = lastDay.getDate();

  const calendar: CalendarData = {
    year,
    month,
    weeks: [],
  };

  let currentWeek: CalendarWeek = [];

  // Add placeholders for days from the previous month before the first day of the current month
  for (let i = 0; i < startDay; i++) {
    currentWeek.push({ day: 0, isCurrentMonth: false });
  }

  for (let day = 1; day <= endDay; day++) {
    // Add the current day to the current week with the indication of whether it's in the current month
    currentWeek.push({ day, isCurrentMonth: true });

    // If a full week is complete, add it to the calendar and reset the current week
    if (currentWeek.length === DAYS_IN_WEEK) {
      calendar.weeks.push([...currentWeek]);
      currentWeek = [];
    }
  }

  // If there are remaining days in the last week, add them to the calendar
  if (currentWeek.length > 0) {
    calendar.weeks.push([...currentWeek]);
  }

  return calendar;
};

// month number to name
export const getMonthName = (month: number): string => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July ',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return months[month - 1];
}
