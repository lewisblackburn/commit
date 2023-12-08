import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getCommitColour } from '../utils/gradient'

interface Props {
  day: {
    day: number
    isCurrentMonth: boolean
  }
  dayIndex: number
}

export default function Day({ day, dayIndex }: Props) {
  return (
    <View
      key={dayIndex}
      style={{
        // work out width based on screen width
        // 7 days in a week, 4px margin on each side
        // 4 * 7 * 2 = 56
        width: (375 - 56) / 7,
        height: (375 - 56) / 7,
        backgroundColor: day.isCurrentMonth ? getCommitColour(2, 10) : getCommitColour(0, -1),
        borderRadius: 10,
        borderWidth: 1,
        // if day is today, border is white
        borderColor: day.day === new Date().getDate() ? 'gray' : 'black',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4,
      }}>
      {/* <Text>{day.day > 0 ? day.day : ''}</Text> */}
    </View>
  )
}

