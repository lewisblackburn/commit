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
        width: 30,
        height: 30,
        backgroundColor: day.isCurrentMonth ? getCommitColour(2, 10) : getCommitColour(0, -1),
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
      }}>
      {/* <Text>{day.day > 0 ? day.day : ''}</Text> */}
    </View>
  )
}

