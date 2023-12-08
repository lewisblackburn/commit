import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

export default function Settings() {
  return (
    <View style={styles.container}>
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
