
// Your React component file
import React from 'react';
import { View, Text } from 'react-native';
import { CalendarData, generateCalendar, getMonthName } from '../utils/calendar';
import Day from './Day';

const Calendar: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  const calendarData: CalendarData = generateCalendar(currentYear, currentMonth);

  return (
    <View>
      <Text>{getMonthName(calendarData.month).toLowerCase()}</Text>
      {calendarData.weeks.map((week, weekIndex) => (
        <View key={weekIndex} style={{ flexDirection: 'row' }}>
          {week.map((day, dayIndex) => (
            <Day key={dayIndex} day={day} dayIndex={dayIndex} />
          ))}
        </View>
      ))}
    </View>
  );
};

export default Calendar;
