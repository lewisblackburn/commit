import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getCommitColour } from '../utils/gradient'
import { columnWidth } from '../utils/constants'

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
        // don't display days in the future
        display: day.day > new Date().getDate() ? 'none' : 'flex',
        width: columnWidth,
        height: columnWidth,
        backgroundColor: day.isCurrentMonth ? getCommitColour(2, 10) : getCommitColour(0, -1),
        borderRadius: 10,
        borderWidth: 1,
        // if day is today, border is white
        borderColor: day.day === new Date().getDate() ? 'gray' : 'black',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4,
      }}>
      <Text>{day.day > 0 ? day.day : ''}</Text>
    </View>
  )
}

