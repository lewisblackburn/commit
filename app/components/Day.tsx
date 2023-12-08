import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

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
        backgroundColor: day.isCurrentMonth ? 'lightblue' : 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
      }}>
      {/* <Text>{day.day > 0 ? day.day : ''}</Text> */}
    </View>
  )
}

