import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Calendar from '../components/Calendar'

export default function All() {
  return (
    <View style={styles.container}>
      <Calendar />
    </View>
  )

}

const dimensions = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    width: dimensions.width,
    height: dimensions.height,
    backgroundColor: 'black',
  },
})
