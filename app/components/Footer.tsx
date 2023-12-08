import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

const Footer = ({ navigation }: any) => {
  return (
    <View style={styles.footer}>
      <Button onPress={navigation.navigate('all')} title="all" />
      <Button onPress={navigation.navigate('today')} title="today" />
      <Button onPress={navigation.navigate('settings')} title="settings" />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#f0f0f0', // Set your desired background color
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: '#333', // Set your desired text color
  },
});

export default Footer;
