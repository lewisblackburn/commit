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

  const startDay = (firstDay.getDay() + 6) % 7; // Adjusted to make Monday the first day (0-indexed, Sunday=0)
  const endDay = lastDay.getDate();

  const today = new Date(); // Get the current date

  const calendar: CalendarData = {
    year,
    month,
    weeks: [],
  };

  let currentWeek: CalendarWeek = [];

  // Add placeholders for days from the previous month before the first day of the current month
  for (let i = startDay; i > 0; i--) {
    currentWeek.push({ day: 0, isCurrentMonth: false });
  }

  for (let day = 1; day <= endDay; day++) {
    // Create a date object for the current day
    const currentDate = new Date(year, month - 1, day);

    // Add the current day to the current week with the indication of whether it's in the current month
    currentWeek.push({
      day,
      isCurrentMonth: currentDate <= today, // Check if the day has already happened
    });

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

export const generateMonthRange = (startYear: number, startMonth: number, endYear: number, endMonth: number): CalendarData[] => {
  const months: CalendarData[] = [];

  let currentYear = startYear;
  let currentMonth = startMonth;

  while (currentYear < endYear || (currentYear === endYear && currentMonth <= endMonth)) {
    months.push(generateCalendar(currentYear, currentMonth));

    if (currentMonth === 12) {
      currentMonth = 1;
      currentYear++;
    } else {
      currentMonth++;
    }
  }

  return months;
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
};
