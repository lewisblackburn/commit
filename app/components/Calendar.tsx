import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { CalendarData, generateCalendar, getMonthName } from '../utils/calendar';
import Day from './Day';
import { columnWidth } from '../utils/constants';

const Calendar: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  const calendarData: CalendarData = generateCalendar(currentYear, currentMonth);

  return (
    <View>
      <Text style={{ color: 'white', margin: 10, fontSize: 25, fontWeight: 'bold' }}>{getMonthName(calendarData.month).toLowerCase()}</Text>

      {/* Display day names */}
      <View style={{ flexDirection: 'row' }}>
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((dayName, index) => (
          <View
            key={index}
            style={{
              width: columnWidth,
              height: columnWidth,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 4,
            }}>
            <Text style={{ color: 'white' }}>{dayName.toLowerCase()}</Text>
          </View>
        ))}
      </View>

      {/* Display calendar grid in reverse order */}
      {calendarData.weeks
        .slice() // Create a copy of the weeks array
        .reverse() // Reverse the order of the array
        .map((week, weekIndex) => (
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
